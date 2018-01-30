const userService = require('../services/user.service');

module.exports = (app, db) => {
  const userServiceInstance = userService(db);

  app.get('/user', (req, res) => userServiceInstance.get().then(obj => res.send(obj.data)));

  app.get('/user/:id', (req, res) => userServiceInstance.getById(req.params.id).then(obj => res.send(obj)));

  app.post('/user', (req, res) => userServiceInstance.post(req.body).then(obj => res.send(obj.data)));

  app.delete('/user/:id', (req, res) => userServiceInstance.getById(req.params.id).then(obj => res.send(obj.data)));
};
