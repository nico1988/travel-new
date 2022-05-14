const express = require("express");
const router = express.Router();

/**
 * Summary of all routes
 * @returns 
 */
const route = () => {
    const userRouter = require("../controller/user");
    const eventRouter = require("../controller/event");
    router.use("/user", userRouter);
    router.use("/event", eventRouter);
    return router;
};

module.exports = route;
