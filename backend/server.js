import Fastify from 'fastify'
import todoRoutes from './routes/todoRoutes.js';
const port = 5001;

const fastify = Fastify({ logger: true })


fastify.register(todoRoutes);

fastify.listen({ port: port }, (err) => {
    if (err) {
        fastify.log.error(err);
        process.exit(1);
    }
    console.log(`server is running on http://localhost:${port}`)
})