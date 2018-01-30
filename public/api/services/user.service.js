const collection = 'users';

module.exports = (db) => ({
  get: () => new Promise((resolve, reject) => {
    db.loadDatabase({}, () => {
      try {
        const users = db.getCollection(collection);
        resolve(users);
      } catch (err) {
        reject(err);
      }
    });
  }),
  getById: (id) => new Promise((resolve, reject) => {
    db.loadDatabase({}, () => {
      try {
        const users = db.getCollection(collection);
        const user = users.findOne({ id: parseInt(id, 10) });
        resolve(user);
      } catch (err) {
        reject(err);
      }
    });
  }),
  put: (id, user) => new Promise((resolve, reject) => {
    db.loadDatabase({}, () => {
      try {
        const users = db.getCollection(collection);
        const result = users.findOne({ id: parseInt(id, 10) });
        const updatedUser = Object.assign({}, result, user);
        users.update(updatedUser);
        db.saveDatabase();
        resolve(updatedUser);
      } catch (err) {
        reject(err);
      }
    });
  }),
  post: (user) => new Promise((resolve, reject) => {
    db.loadDatabase({}, () => {
      try {
        const users = db.getCollection(collection);
        user.id = users.maxId + 1;
        users.insert(user);
        db.saveDatabase();
        resolve(user);
      } catch (err) {
        reject(err);
      }
    });
  }),
  delete: (id) => new Promise((resolve, reject) => {
    db.loadDatabase({}, () => {
      try {
        const users = db.getCollection(collection);
        users.removeDataOnly({ id: parseInt(id, 10) });
        db.saveDatabase();
        resolve(users);
      } catch (err) {
        reject(err);
      }
    });
  })
});
