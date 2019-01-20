const express = require('express');
const router = express.Router();
const mongojs = require('mongojs');
const db = mongojs('tasks', ['tasks']);

const services = [
  {
    id: 1,
    heading: 'Service 1',
    text: 'This is a great place to talk about your webpage. This template is purposefully unstyled so you can use it as a boilerplate or starting point for you own landing page designs! This template features: '
  },
  {
    id: 2,
    heading: 'Service 2',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut optio velit inventore, expedita quo laboriosam possimus ea consequatur vitae, doloribus consequuntur ex. Nemo assumenda laborum vel, labore ut velit dignissimos.',
  },
  {
    id: 3,
    heading: 'Service 3',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero odio fugiat voluptatem dolor, provident officiis, id iusto! Obcaecati incidunt, qui nihil beatae magnam et repudiandae ipsa exercitationem, in, quo totam.',
  }
];

// Get All Services
router.get('/services', function (req, res, next) {

  res.json(services);
  // db.tasks.find(function (err, tasks) {
  //   if (err) {
  //     res.status(404);
  //     res.send(err);
  //   }
  //   res.json(tasks);
  // });
});

// // Get Single Service
router.get('/services/:id', function (req, res, next) {
  var result = services.filter(function (service) {
    return service.id == req.params.id;
  });

  if (result.length === 1) {
    res.json(result[0]);
  } else {
    res.status(404);
  }
  // db.tasks.findOne({ _id: mongojs.ObjectId(req.params.id) }, function (err, task) {
  //   if (err) {
  //     res.status(404);
  //     res.send(err);
  //   }
  //   res.json(task);
  // });
});

// // // Save Tasks
// router.post('/tasks', function (req, res, next) {
//   let task = req.body;
//   // if (!task.title || (task.isDone + '')) {
//   if (!task) {
//     res.status(404);
//     res.json({
//       error: 'information is invalid'
//     });
//   } else {
//     db.tasks.save(task, function (err, task) {
//       if (err) {
//         res.status(404);
//         res.send(err);
//       }
//       res.json(task);
//     });
//   }
// });

// // Delete Task
// router.delete('/tasks/:id', function (req, res, next) {
//   db.tasks.remove({ _id: mongojs.ObjectId(req.params.id) }, function (err, task) {
//     if (err) {
//       res.status(404);
//       res.send(err);
//     }
//     res.json(task);
//   });
// });

// // Update Task
// router.put('/tasks/:id', function (req, res, next) {
//   let task = req.body.task;
//   let updatedTask = {};
//   if (task) {
//     updatedTask = task;
//     delete updatedTask._id;
//   }
//   db.tasks.update({ _id: mongojs.ObjectId(req.params.id) }, updatedTask, {}, function (err, task) {
//     if (err) {
//       res.status(404);
//       res.send(err);
//     }
//     res.json(task);
//   });
// });

module.exports = router;
