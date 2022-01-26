const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./routes/index");
const livrosRouter = require("./routes/indexLivros");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
module.exports = app;

app.use("/", indexRouter);
app.use("/livros",livrosRouter);


app.listen("4000", () => console.log("Rodando..."));