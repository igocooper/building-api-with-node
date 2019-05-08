const getAllArtists = (method, url, cb) => {
    const Http = new XMLHttpRequest();
    Http.open(method, url);
    Http.send();
    Http.onreadystatechange = function(e) {
        if(this.readyState == 4 && this.status === 200) {
            return cb(e, Http.responseText);
        }
    }
}

const createArtist = (method, url, data, cb) => {
    const Http = new XMLHttpRequest();
    Http.open(method, url);
    Http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    Http.send(JSON.stringify(data));
    Http.onreadystatechange = function(e) {
        if(this.readyState == 4 && this.status === 200) {
            return cb(e, Http.responseText);
        }
    }
}

getAllArtists('GET', 'http://localhost:3012/artists', (e, responseText) => {
    console.log(responseText);
});

// createArtist('POST', 'http://localhost:3012/artists', {name: "David Guetta"}, (e, responseText) => {
//     console.log(responseText);
// });
