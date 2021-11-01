const tasksModel = require('../models/tasksModel');
const { validateReqBody } = require('./helpers');

const getAll = async () => {
  const tasks = await tasksModel.getAll();
  if (tasks.length < 1) return { statusCode: 404, responseMessage: 'not found!' };

  return { statusCode: 200, responseMessage: tasks };
};

const getById = async (id) => {
  const task = await tasksModel.getById(id);
  if (!task) return { statusCode: 404, responseMessage: 'task not found!' };

  return { statusCode: 200, responseMessage: task };
};

const create = async ({ task, status }) => {
  const responseMessage = `Invalid info. The fields 'task' and 'status' are required on this body requisition`;
  const validReqBody = validateReqBody({ task, status });

  if (!validReqBody) return { statusCode: 400, responseMessage };

  const insert = await tasksModel.create({ task, status, createdAt: Date.now() });

  return { responseMessage: insert, statusCode: 201 };
};

module.exports = {
  getAll,
  getById,
  create,
};