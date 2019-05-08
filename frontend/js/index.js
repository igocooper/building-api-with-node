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
