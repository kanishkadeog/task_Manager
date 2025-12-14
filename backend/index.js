require("dotenv").config();

const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
// require('dotenv').config();
//--------------------
//----check schema model
//const taskModel = require("./models/task.model");

//----check service functions
// const TaskService = require("./services/task.service");

// const TaskServiceInstance = new TaskService();
// console.log(
//   TaskServiceInstance.find,
//   TaskServiceInstance.create,
//   TaskServiceInstance.update,
//   TaskServiceInstance.delete
// );

//----check controller functions
// const {
//   getTasks,
//   createTask,
//   updateTask,
//   deleteTask,
// } = require("./controllers/task.controller");

// console.log(getTasks, createTask, updateTask, deleteTask);

//----Check routes 
const taskRoutes = require("./routes/task.route");


//-------------

const app = express();
const PORT = 8082;
// const MONGO_URL = 'mongodb://localhost:27017/task-manager';
const MONGO_URL = 'mongodb+srv://taskmanager:taskmanager123@taskmanager.egz1f8m.mongodb.net/?appName=taskmanager';
//in crio--
// const DB_URI = "mongodb://localhost:27017/task-manager";
//or
// const MONGO_URL = "mongodb://127.0.0.1:27017/task-manager";

mongoose.connect(MONGO_URL, {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});

// Middleware
app.use(cors());
app.use(express.json());

//--------
app.use("/tasks", taskRoutes);
//-------

app.listen(PORT, () => {
  console.log(`Backend Server is running on http://localhost:${PORT}`);
  console.log(`Backend listening on PORT ${PORT}`);
});


//----------------------
// add data in table usinf below command:- 
// Invoke-RestMethod -Uri "http://localhost:8082/tasks" -Method POST -ContentType "application/json" -Body ('{"title":"one project on MERN","description":"use Mongo DB, Express, React, Node ","deadline":"2024-11-05T21:59:59.999Z"}')
// get data from table using below command:-
// Invoke-RestMethod -Uri "http://localhost:8082/tasks" -Method GET
// update data in table using below command:-
// Invoke-RestMethod -Uri "http://localhost:8082/tasks/{task_id}" -Method PUT -ContentType "application/json" -Body ('{"status":"DONE"}')
// delete data from table using below command:-
// Invoke-RestMethod -Uri "http://localhost:8082/tasks/{task_id}" -Method DELETE
//--------------------
//--command to delete data base data :- db.tasks.deleteMany({})
//--command to view all data base data :- db.tasks.find().pretty()
//--command to view specific data base data :- db.tasks.find({status:"TODO"}).pretty()
//--command to update specific data base data :- db.tasks.updateOne({_id:ObjectId("64a7f3e2f1d2c8b1e4f0c123")},{$set:{status:"DONE"}})


