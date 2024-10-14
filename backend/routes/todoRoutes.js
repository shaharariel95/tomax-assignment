import { getTodos, getTodoById, addTodo, updateTodo, deleteTodo } from '../controllers/todoController.js';

async function todoRoutes(fastify, options) {
    fastify.get('/todos', getTodos);
    fastify.get('/todos/:id', getTodoById);
    fastify.post('/todos', addTodo);
    fastify.put('/todos/:id', updateTodo);
    fastify.delete('/todos/:id', deleteTodo);
}

export default todoRoutes;
