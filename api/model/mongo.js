const mongoose = require("mongoose");
mongoose.set("useNewUrlParser", true);
mongoose.set("useUnifiedTopology", true);
mongoose.set("useCreateIndex", true);
const HOST = "127.0.0.1";
const PORT = 27017;
const DB = "db_calandar";
mongoose.connect(`mongodb://${HOST}:${PORT}/${DB}`);

module.exports = mongoose;