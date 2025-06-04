const express = require("express");
const router = express.Router();
const taskModel = require("../models/taskModel");

// fetches all task for database
router.get("/", async (req, res) => {
  const tasks = await taskModel.getTasks();
  res.json(tasks);
});

// handles post request to add new task to data
router.post("/", async (req, res) => {
  const { title, description } = req.body;
  const task = await taskModel.addTask(title, description);
  res.status(201).json(task);
});

module.exports = router;
