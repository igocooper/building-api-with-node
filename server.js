var express = require('express');
var bodyParser = require('body-parser');

var app = express();
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

app.get('/artists/:id', function(req, res) {
    var artist = artists.find(function (artist) {
       return artist.id === Number(req.params.id)
    });
    res.send(artist);
});

app.get('/artists', function(req, res) {
    res.send(artists);
});

app.post('/artists', function(req, res) {
    var artist = {
        id: Date.now(),
        name: req.body.name
    };
    artists.push(artist);
    res.send(artist);
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