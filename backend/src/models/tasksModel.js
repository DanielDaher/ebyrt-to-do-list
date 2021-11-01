const connection = require('./connection');
const { ObjectId } = require('mongodb');

const getAll = async () => {
  const db = await connection();
  const tasks = await db.collection('tasks').find().toArray();
  return tasks;
};

const getById = async (id) => {
  if (!ObjectId.isValid(id)) return null;

  const db = await connection();
  const tasks = await db.collection('tasks').findOne(ObjectId(id));
  return tasks;
};

const create = async ({ task, status, createdAt }) => {
  const query = {
    task,
    status,
    createdAt,
  };

  const db = await connection();
  await db.collection('tasks').insertOne(query);
  return 'task inserted successfully';
};

module.exports = {
  getAll,
  getById,
  create,
};