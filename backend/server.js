import Fastify from 'fastify'
import cors from '@fastify/cors'
import todoRoutes from './routes/todoRoutes.js';
const port = 5001;

const fastify = Fastify({ logger: false })
fastify.register(cors, {
    origin: 'http://localhost:5173',
    methods:['GET','POST', 'PUT', 'DELETE'],
});

fastify.register(todoRoutes);

fastify.listen({ port: port }, (err) => {
    if (err) {
        fastify.log.error(err);
        process.exit(1);
    }
    console.log(`server is running on http://localhost:${port}`)
})