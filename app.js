const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const chalk = require("chalk");
require("dotenv").config();
const rootDir = require("./utils/rootDir");
const errorController = require("./controllers/errorController");
const userRouter = require("./routers/user");
const app = express();
const port = process.env.PORT || 5000;

app.set("view engine", "ejs");
app.set("views", "views");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(rootDir, "public")));
app.use(userRouter);
app.use(errorController.get404);
app.listen(port, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log(
            chalk.green.inverse(`connected to the server at port: ${port}`)
        );
    }
});
