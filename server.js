var express = require('express');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;

var app = express();
var db;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var artists = [
    {
        id: 1,
        name: 'Bonobo'
    },
    {
        id: 2,
        name: 'Tame Impala'
    },
    {
        id: 3,
        name: 'Foals'
    }
];

app.get('/', function (req, res) {
    res.send('Hello API');
});

app.get('/artists', function(req, res) {
    db.collection('artist').find().toArray(function (err, docs) {
      if (err) {
          console.log(err);
          return res.sendStatus(500);
      }
      res.send(docs);
    };
});

app.get('/artists/:id', function(req, res) {
    db.collection('artist').findOne({ _id: ObjectID( req.params.id ) }, function (err, doc) {
        if (err) {
            console.log(err);
            return res.sendStatus(500)
        }
      res.send(docs);
    };
});

app.post('/artists', function(req, res) {
    var artist = {
        name: req.body.name
    };

   db.collection('artists').insert(artist, function (err, result) {
       if(err) {
           console.log(err);
           return res.sendStatus(500);
       }
   };
});

app.put('/artists/:id', function (req, res) {
    var artist = artists.find(function (artist) {
        return artist.id === Number(req.params.id)
    });
    artist.name = req.body.name;
    console.log(req.body.name);
    console.log(artist.name);
    res.sendStatus(200);
});

app.delete('/artists/:id', function (req, res) {
   artists = artists.filter(function (artist) {
       return artist.id !== Number(req.params.id);
   });
    res.sendStatus(200);
});

app.listen(3012, function () {
    console.log('API app started')
});

MongoClient.connect('mongodb://lpcalhost:27017/myapi', function (err, database) {
    if (err) {
        return console.log(err);
    }
    db = database;
    app.listen(3012, function () {
        console.log('API app started')
    });
};