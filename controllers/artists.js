var Artist = require('../models/artist');

exports.all = function (req, res) {
  Artist.all(function (err, docs) {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.send(docs);
  })
};

exports.findById = function (req, res) {
  Artist.findById(req.params.id, function (err, doc) {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.send(doc);
  })
};

exports.create = function (req, res) {
  var artist = {
    name: req.body.name
  };
    Artists.create(artist, function (err, result) {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.send(artist);
  })
};

exports.update = function (req, res) {
  Artists.update(req.param.id, { name: req.body.name }, function (err, result) {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.sendStatus(200);
  })
};

exports.delete = function (req, res) {
  Artist.delete(req.params.id, function (err, result) {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.sendStatus(200);
  })
};