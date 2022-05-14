const express = require('express');
const router = express.Router();
const { sign, encript } = require("../util/encrypt");
const { User } = require("../model/user");

const result = (code = 500, msg = "", data = {}) => {
    return {
        code: code,
        msg: msg,
        data: data
    };
};

router.get("/test1", (req, res) => {
    console.log(req.user);
    return res.json({
        code: 200,
        msg: "ok"
    });
});


/**
 * user register
 */
 router.post('/register', async (req, res) => {
    const insertData = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    };
    const user = await User.findOne({ username: insertData.username });
    if(!user){
        const users = await User.insertMany([insertData]);
        if (users && users.length > 0) {
            const user = users[0];
            const returnData = {
                id: user._id,
                username: user.username
            };
            return res.json(result(200, 'ok', returnData));
        } else {
            return res.json(result(msg="Register failed"));
        }
    }
    return res.json(result(msg="Register failed"));
    // console.log(req.body);
    // return res.json({password: encript(req.body.password)});

    
    
  });

/**
 * user login
 */
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const returnResult = result(msg="User name or password is incorrect");
  const user = await User.findOne({ username: username });
  if (user) {
      console.log(user.password);
      console.log(encript(password));
      if (user.password === encript(password)) {
          console.log(user);
          returnResult.code = 200;
          returnResult.msg = "ok";
          returnResult.data = {
              userid: user._id,
              username: user.username,
              email: user.email,
              token: sign({ userid: user._id, username: user.username, email: user.email })
          };
      }
  }

  return res.json(returnResult);
});

module.exports = router;
