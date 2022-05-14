const express = require('express');
const router = express.Router();
const { Event } = require("../model/event");

const result = (code = 500, msg = "", data = {}) => {
    return {
        code: code,
        msg: msg,
        data: data
    };
};

/**
 * Add event
 */
router.post("/create", async (req,res) => {
    const insertEvent = {...req.body, creator: req.user.userid};
    const event = await Event.create(insertEvent);
    console.log(insertEvent);
    // console.log(req.body);
    return res.json(result(code=200, msg="ok", event));
});

/**
 * Query all the events by the user id
 */
router.get("/list", async (req, res) => {
    const { userid } = req.user;
    const events = await Event.find({ creator: userid })
    return res.json(result(code=200, msg="ok", { events: events }));
});

module.exports = router;