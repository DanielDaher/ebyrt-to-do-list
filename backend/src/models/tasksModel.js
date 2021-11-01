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

module.exports = {
  getAll,
  getById,
};