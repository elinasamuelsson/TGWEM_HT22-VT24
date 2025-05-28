var express = require("express");
var router = express.Router();

var mongoose = require("mongoose");
var CharacterModel = require("../models/CharacterModel.js");

/* GET characters listing. */
router.get("/", function (req, res, next) {
  CharacterModel.find().then(function (genshin_impact_characters) {
    res.json(genshin_impact_characters);
  });
});

router.post("/", function (req, res, next) {
  CharacterModel.create(req.body).then(function (post) {
    res.json(post);
  });
});

router.put("/:id", function (req, res, next) {
  CharacterModel.findByIdAndUpdate(req.params.id, req.body).then(function (
    post
  ) {
    res.json(post);
  });
});

router.delete("/:id", function (req, res, next) {
  CharacterModel.findByIdAndDelete(req.params.id, req.body).then(function (
    post
  ) {
    res.json(post);
  });
});

module.exports = router;
