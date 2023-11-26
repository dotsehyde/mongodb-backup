const { MongooseBackup } = require("mongoose-backup");
const Backup = new MongooseBackup({
  url: "mongodb://localhost:27017/test",
});

Backup.on('connected', () => {
  Backup.Localize({
      per: 'monthly' // minutes, hours, daily, monthly, yearly
  });
  Backup.Github({
    key: "ghp_XXXX",
    per: "yearly",
    options: {
        owner: "username",
        repo: "repo",
    }
});
});
Backup.on("ping", (data) => {
  console.log(`${data.time}: Mongoose Backup is alive. Time: `);
});

Backup.on("githubBackup", (data) => {
  console.log(`${data.time}: [GitHub]: Total ${data.total} documents with ${data.items} items backed up.`);
});

Backup.on("localizeBackup", (data) => {
  console.log(`${data.time}: [Local]: Total ${data.total} documents with ${data.items} items backed up.`);
});