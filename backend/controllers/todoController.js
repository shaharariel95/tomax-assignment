import fastify from 'fastify';
import { promises as fs } from 'fs';
import path from 'path';

const todosFile = path.join(process.cwd(), 'todos.json');

export const getTodos = async (request, reply) => {
    try {
        const data = await fs.readFile(todosFile, 'utf-8');
        const todos = JSON.parse(data);
        reply.send(todos);
    } catch (err) {
        fastify.log.err(err);
        reply.code(500).send({ error: 'Error in getting Todos' });
    }
};

export const addTodo = async (request, reply) => {
    try {
        const newTodo = request.body;
        const data = await fs.readFile(todosFile, 'utf-8');
        const todos = JSON.parse(data);
        todos.push(newTodo);
        await fs.writeFile(todosFile, JSON.stringify(todos, null, 2));
        reply.send(newTodo);
    } catch (err) {
        fastify.log.err(err);
        reply.code(500).send({ error: 'Error in adding Todo' });
    }
};
