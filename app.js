//להעביר את ה url הדינמי לקובץ אחר

const fs = require(`fs`);
const path = require(`path`);
const express = require(`express`);
const app = express();
const routerpage = require(`./src/modules/routes/routerPage`);
// const logger = require(`./src/modules/middlewares/logger`);
const morgan = require('morgan');

const user = require(`./src/modules/routes/user`);



app.use(`/routerPage`,routerpage);
// app.use(logger);
app.use(morgan('common'));



app.listen(3030, () => {
    console.log('Example app listening on port 3030!');
});

app.use(`/user`,user);


app.get('/', (req, res) => {
    fs.createReadStream(path.join(__dirname, './src/static/index.html')).pipe(res);
});


// app.get('/david', (req, res) => {
//     fs.createReadStream(path.join(__dirname, './src/static/david.html')).pipe(res);
// });