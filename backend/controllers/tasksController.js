const tasksService = require('../services/tasksService');

const getAll = async (req, res) => {
  try {
    const tasks = await tasksService.getAll();

    res.status(tasks.statusCode).json(tasks.responseMessage);

  } catch (error) {
    console.error(error);
    res.status(404).json({ message: 'Not Found!' });
  }
};

module.exports = {
  getAll,
};