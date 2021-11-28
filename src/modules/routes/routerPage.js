const express = require(`express`);
const router = express.Router();
const fs = require(`fs`);
const path = require(`path`);

// const logger = require(`./middlewares/logger`);
// router.use(logger);


router.get(`/about-me`, (req, res) => {
    res.send(`about me !!!`);
});
// router.get(`/help`, (req, res) => {
//     res.sendFile(path.join(__dirname , './src/static/help.html'));
// });

module.exports = router;
