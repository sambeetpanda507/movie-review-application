const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const chalk = require("chalk");
const rootDir = require("./utils/rootDir");
const errorController = require("./controllers/errorController");
const userRouter = require("./routers/user");
const app = express();
app.set("view engine", "ejs");
app.set("views", "views");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(rootDir, "public")));
app.use(userRouter);
app.use(errorController.get404);
app.listen(3000, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log(
            chalk.green.inverse("connected to the server at port 3000")
        );
    }
});
