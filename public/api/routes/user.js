const userService = require('../services/user.service');

module.exports = (app, db) => {
  const userServiceInstance = userService(db);

  app.get('/api/user', (req, res) => userServiceInstance.get().then(obj => res.send(obj.data)));

  app.get('/api/user/:id', (req, res) => userServiceInstance.getById(req.params.id).then(obj => res.send(obj)));

  app.put('/api/user/:id', (req, res) => userServiceInstance.put(req.params.id, req.body).then(obj => res.send(obj)));

  app.post('/api/user', (req, res) => userServiceInstance.post(req.body).then(obj => res.send(obj)));

  app.delete('/api/user/:id', (req, res) => userServiceInstance.delete(req.params.id).then(obj => res.send(obj)));
};
