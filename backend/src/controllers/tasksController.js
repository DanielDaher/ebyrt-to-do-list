const tasksService = require('../services/tasksService');

const getAll = async (req, res) => {
  try {
    const tasks = await tasksService.getAll();

    res.status(tasks.statusCode).json(tasks.responseMessage);

  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'error, try again latter' });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await tasksService.getById(id);

    res.status(task.statusCode).json(task.responseMessage);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'error, try again latter' });
  }
};

const create = async (req, res) => {
  try {
    const { task, status } = req.body;
    const insert = await tasksService.create({ task, status });
  
    res.status(insert.statusCode).json(insert.responseMessage);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'error, try again latter' });
  }
};



module.exports = {
  getAll,
  getById,
  create,
};