import { getTodos, addTodo } from '../controllers/todoController.js';

async function todoRoutes(fastify, options) {
    fastify.get('/todos', getTodos);
    fastify.post('/todos', addTodo);
}

export default todoRoutes;