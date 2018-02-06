const collection = 'users';

module.exports = db => ({
  get: () => new Promise((resolve, reject) => {
    const users = db.getCollection(collection);
    if (users) {
      resolve(users);
    }
    reject(new Error('Error'));
  }),
  getById: id => new Promise((resolve, reject) => {
    const users = db.getCollection(collection);
    const user = users.findOne({ id: parseInt(id, 10) });
    if (user) {
      resolve(user);
    }
    reject(new Error('Error'));
  }),
  put: (id, user) => new Promise((resolve, reject) => {
    const users = db.getCollection(collection);
    const result = users.findOne({ id: parseInt(id, 10) });
    if (result) {
      const updatedUser = Object.assign({}, result, user);
      users.update(updatedUser);
      resolve(updatedUser);
    }
    reject(new Error('Error'));
  }),
  post: user => new Promise((resolve, reject) => {
    const users = db.getCollection(collection);
    if (users) {
      const newUser = Object.assign({}, user);
      newUser.id = users.maxId + 1;
      users.insert(newUser);
      resolve(newUser);
    }
    reject(new Error('Error'));
  }),
  delete: id => new Promise((resolve, reject) => {
    const users = db.getCollection(collection);
    const result = users.findOne({ id: parseInt(id, 10) });
    if (result) {
      users.remove(result);
      resolve(result);
    }
    reject(new Error('Error'));
  }),
});
