import Fastify from 'fastify'
import cors from '@fastify/cors'
import dotenv from 'dotenv'
import todoRoutes from './routes/todoRoutes.js';
// import todoS3Routes from './routes/todos3Routes.js';
// const port = 5001;

dotenv.config()
const port = process.env.PORT;
console.log(`init server, getting port from .env: port = ${port}`)
const fastify = Fastify({ logger: true })
fastify.register(cors, {
    origin: 'http://localhost:5173',
    methods:['GET','POST', 'PUT', 'DELETE'],
});

fastify.register(todoRoutes);
// fastify.register(todoS3Routes);

fastify.listen({ port: port }, (err) => {
    if (err) {
        fastify.log.error(err);
        process.exit(1);
    }
    console.log(`server is running on http://localhost:${port}`)
})