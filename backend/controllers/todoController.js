import { promises as fs } from 'fs';
import path from 'path';

const todosFile = path.join(process.cwd(), 'todos.json');

async function readTodos() {
    const data = await fs.readFile(todosFile, 'utf-8');
    return JSON.parse(data);
}

async function writeTodos(todos) {
    await fs.writeFile(todosFile, JSON.stringify(todos, null, 2));
}

export const getTodos = async (request, reply) => {
    try {
        const todos = await readTodos();
        reply.send(todos);
    } catch (err) {
        request.log.error(err);
        reply.code(500).send({ error: 'Error in getting Todos' });
    }
};


export const getTodoById = async (request, reply) => {
    try {
        const { id } = request.params;
        const todos = await readTodos();
        const todo = todos.find(todo => todo.id === id);
        if (!todo) {
            return reply.code(404).send({ error: 'Todo not found' });
        }
        reply.send(todo);
    } catch (err) {
        request.log.error(err);
        reply.code(500).send({ error: 'Unable to read todos' });
    }
};


export const addTodo = async (request, reply) => {
    try {
        const newTodo = request.body;
        const todos = await readTodos();
        todos.push(newTodo);
        await writeTodos(todos)
        reply.code(200).send({massege: 'succesfuly added todo item'});
    } catch (err) {
        request.log.error(err);
        reply.code(500).send({ error: 'Error in adding Todo' });
    }
};


export const updateTodo = async (request, reply) => {
    try {
        const { id } = request.params;
        const updatedTodo = request.body;
        const todos = await readTodos();
        const index = todos.findIndex(todo => todo.id === id);
        if (index === -1) {
            return reply.code(404).send({ error: 'Todo not found' });
        }
        todos[index] = { ...updatedTodo, id };
        await writeTodos(todos);
        reply.code(200).send(todos[index]);
    } catch (err) {
        request.log.error(err);
        reply.code(500).send({ error: 'Unable to update todo' });
    }
};


export const deleteTodo = async (request, reply) => {
    try {
        const { id } = request.params;
        const todos = await readTodos();
        const newTodos = todos.filter(todo => todo.id !== id);
        if (newTodos.length === todos.length) {
            return reply.code(404).send({ error: 'Todo not found' });
        }
        await writeTodos(newTodos);
        reply.code(200).send({ message: `Todo with ID ${id} deleted` });
    } catch (err) {
        request.log.error(err);
        reply.code(500).send({ error: 'Unable to delete todo' });
    }
};