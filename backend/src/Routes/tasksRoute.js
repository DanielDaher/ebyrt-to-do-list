const router = require("express").Router();
const tasksController = require('../controllers/tasksController');

router.get('/', tasksController.getAll);
router.get('/:id', tasksController.getById);
router.post('/', tasksController.create);

module.exports = router;