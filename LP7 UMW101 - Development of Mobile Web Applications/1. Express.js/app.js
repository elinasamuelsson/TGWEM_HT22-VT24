var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var mongoose = require("mongoose");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var charactersRouter = require("./routes/characters");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

mongoose.connect(
  "mongodb+srv://elinasamuelsson:<password>@cluster0.vgre3yi.mongodb.net/UMW101?retryWrites=true&w=majority"
);

app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/characters", charactersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
