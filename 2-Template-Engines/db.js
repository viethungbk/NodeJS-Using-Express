var low = require('lowdb');

var FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('db.json');
const db = low(adapter);

// Set some defaults (required if your JSON file is empty)
db.defaults({ users: [], products:[], sessions:[] })
  .write();

module.exports = db;