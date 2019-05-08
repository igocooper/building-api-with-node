$(document).ready(function(){
    const getAllArtists = function (url, method) {
        $.ajax({
            url: url,
            type: method,
            success: function(result) {
                console.log(result)
            },
            error: function(error) {
                console.log(`Error ${error}`)
            }
        })
    }
    const createArtist = function (url, method, data) {
        $.ajax({
            url: url,
            type: method,
            data: data,
            success: function(result) {
                console.log(result)
            },
            error: function(error) {
                console.log(`Error ${error}`)
            }
        })
    }

    const deleteArtist = function (url, method, id) {
        $.ajax({
            url: `${url}/${id}`,
            type: method,
            success: function(result) {
                console.log(result)
            },
            error: function(error) {
                console.log(`Error ${error}`)
            }
        })
    }

    const updateArtist = function (url, method, data, id) {
        $.ajax({
            url: `${url}/${id}`,
            type: method,
            data: data,
            success: function(result) {
                console.log(result)
            },
            error: function(error) {
                console.log(`Error ${error}`)
            }
        })
    }

    // createArtist('http://localhost:3012/artists', 'POST', {name: "PLease stop and delete unneeded Guettas"});

    // deleteArtist('http://localhost:3012/artists', 'DELETE', '5cd1ed3b525a5a26cbee4b72');

    updateArtist('http://localhost:3012/artists', 'PUT', {name: "Imagine Dragons"}, '5cd1ed35525a5a26cbee4b71');

    getAllArtists('http://localhost:3012/artists', 'GET');
});



// const getAllArtists = (method, url, cb) => {
//     const Http = new XMLHttpRequest();
//     Http.open(method, url);
//     Http.send();
//     Http.onreadystatechange = function(e) {
//         if(this.readyState == 4 && this.status === 200) {
//             return cb(e, Http.responseText);
//         }
//     }
// }

// const createArtist = (method, url, data, cb) => {
//     const Http = new XMLHttpRequest();
//     Http.open(method, url);
//     Http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
//     Http.send(JSON.stringify(data));
//     Http.onreadystatechange = function(e) {
//         if(this.readyState == 4 && this.status === 200) {
//             return cb(e, Http.responseText);
//         }
//     }
// }

// getAllArtists('GET', 'http://localhost:3012/artists', (e, responseText) => {
//     console.log(responseText);
// });

// createArtist('POST', 'http://localhost:3012/artists', {name: "David Guetta"}, (e, responseText) => {
//     console.log(responseText);
// });
