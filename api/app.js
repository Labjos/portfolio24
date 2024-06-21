require("dotenv").config();
const express = require("express");
const logger = require("morgan");

require("./configs/db.confing");
const router = require("./configs//routes.config");


const cors = require("./middlewares/cors.middlewares");


const app = express();

//Middlewares
app.use(logger('dev'));
app.use(express.json());
app.use(cors)

//Routes
app.use("/api/v1", router);

//Errors
app.use("/", require('./web'))


const port = process.env.PORT || 3000;
app.listen(port, () => console.info(`Running on port!!!`));