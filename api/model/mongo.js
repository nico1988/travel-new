const mongoose = require("mongoose");
mongoose.set("useNewUrlParser", true);
mongoose.set("useUnifiedTopology", true);
mongoose.set("useCreateIndex", true);
const HOST = "localhost";
const PORT = 27017;
const DB = "db_calandar";
mongoose.connect(`mongodb://${HOST}:${PORT}/${DB}`);

module.exports = mongoose;