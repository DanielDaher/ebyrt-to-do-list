const tasksModel = require('../models/tasksModel');

const getAll = async () => {
  const tasks = await tasksModel.getAll();
  if (tasks.length < 1) return { statusCode: 404, responseMessage: 'not found!' };

  return { statusCode: 200, responseMessage: tasks };
};

module.exports = {
  getAll,
};