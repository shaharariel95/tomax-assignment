import { S3Client, GetObjectCommand, PutObjectCommand } from "@aws-sdk/client-s3";
import dotenv from 'dotenv'

dotenv.config()

const secretAccessKey = process.env.SECRET_ACCESS_KEY;
const accessKeyId = process.env.ACCESS_KEY_ID;
const BUCKET_NAME = process.env.BUCKET_NAME;
const ITEM_KEY = process.env.ITEM_KEY;

const s3Client = new S3Client({
  region: "eu-west-1",
  credentials: {
    accessKeyId,
    secretAccessKey
  }
});

const streamToString = (stream) =>
  new Promise((resolve, reject) => {
    const chunks = [];
    stream.on("data", (chunk) => chunks.push(chunk));
    stream.on("error", reject);
    stream.on("end", () => resolve(Buffer.concat(chunks).toString("utf8")));
  });

async function readTodos() {
  const command = new GetObjectCommand({
    Bucket: BUCKET_NAME,
    Key: ITEM_KEY
  });

  try {
    const response = await s3Client.send(command);
    const todosData = await streamToString(response.Body);
    return JSON.parse(todosData);
  } catch (err) {
    request.log.error(err);
    throw new Error('Error reading todos from S3');
  }
}

async function writeTodos(todos) {
  const command = new PutObjectCommand({
    Bucket: BUCKET_NAME,
    Key: ITEM_KEY,
    Body: JSON.stringify(todos, null, 2),
    ContentType: 'application/json'
  });

  try {
    await s3Client.send(command);
  } catch (err) {
    request.log.error(err);
    throw new Error('Error writing todos to S3');
  }
}

export const getTodos = async (request, reply) => {
  try {
    const todos = await readTodos();
    reply.send(todos);
  } catch (err) {
    request.log.error(err);
    reply.code(500).send({ error: 'Error in getting Todos from S3' });
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
    reply.code(500).send({ error: 'Unable to read todos from S3' });
  }
};

export const addTodo = async (request, reply) => {
  try {
    const newTodo = request.body;
    const todos = await readTodos();
    todos.push(newTodo);
    await writeTodos(todos);
    reply.code(200).send({ message: 'Successfully added todo item to S3' });
  } catch (err) {
    request.log.error(err);
    reply.code(500).send({ error: 'Error in adding Todo to S3' });
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
    reply.code(500).send({ error: 'Unable to update todo in S3' });
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
    reply.code(200).send({ message: `Todo with ID ${id} deleted from S3` });
  } catch (err) {
    request.log.error(err);
    reply.code(500).send({ error: 'Unable to delete todo from S3' });
  }
};
