const backup = require('mongodb-backup');

const backupOptions = {
  uri: 'mongodb://mongo:27017/your-database-name', // Update with your MongoDB connection URI
  root: __dirname,
  parser: 'json',
};

backup.dump(backupOptions, (err) => {
  if (err) {
    console.error('Backup failed:', err);
  } else {
    console.log('Backup successful');
  }
});