const express = require('express');
const router = express.Router();


// router.get('/:name', (req, res) => {
//     res.send(`User ${req.params.name} entered the system`);
// });



router.get('/:name/:id', (req, res) => {
    res.send(`User ${req.params.name} entered the system. The ID is ${req.params.id}`);
});
module.exports = router;