const checkIfCollectionExists = (db, collectionName) => db.getCollection(collectionName);

const addCollection = (db, collectionName) => {
  db.addCollection(collectionName);
};

const loadDatabase = (config, db) => {
  const { database: { mainCollection } } = config;
  db.loadDatabase({}, () => {
    if (!checkIfCollectionExists(db, mainCollection)) {
      addCollection(db, mainCollection);
    }
  });
};

exports.loadDatabase = loadDatabase;
