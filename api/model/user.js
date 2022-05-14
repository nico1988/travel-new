const mongoose = require("./mongo");
const { encript } = require("../util/encrypt");

const User = mongoose.model("User", {
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        set(val) {
            return encript(val)
        }
    },
    createAt: {
        type: Date,
        default: Date,
        get: (v) => moment(v).format("MMMM Do YYYY, h:mm a"),
    }
});

module.exports = {
    User
};