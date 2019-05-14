
const getArtists = (url) => {
    const params = {
        method: "GET",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }
    return fetch(url, params)
        .then((data) => data.json())
}

const deleteArtist = (url) => {
    const params = {
        method: "DELETE",
    }
    return fetch(url, params)
}

const cardDeck = document.querySelector('.card-deck');
cardDeck.addEventListener('click', function (e) {
    const element = e.target;
    if(element.classList.contains('card-delete')) {
        e.stopPropagation();
        const card = element.parentElement;
        const id = card.dataset.id;
        deleteArtist(`/api/artists/${id}`)
            .then(() => {
                card.innerHTML="";
                card.remove();
            })
            .catch((e) => {
                console.log(e);
            })
    }
})


getArtists('/api/artists')
    .then((json) => {

        const loading = document.querySelector('.loading');
        json.forEach(artist => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.style.width = "360px";

            const photoSrc = artist.photo ? `/uploads/${artist.photo}` : "https://bulma.io/images/placeholders/1280x960.png"
            card.dataset.id = artist._id;
            card.innerHTML = `
                <span class="card-delete">╳</span>
                <div class="card-image">
                <figure class="image is-16by9">
                    <img src="${photoSrc}" alt="Placeholder image">
                </figure>
                </div>
                <div class="card-content">
                <div class="media">
                    <div class="media-left">
                    <figure class="image is-48x48">
                        <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                    </figure>
                    </div>
                    <div class="media-content">
                    <p class="title is-4">${artist.name}</p>
                    <p class="subtitle is-6">@johnsmith</p>
                    </div>
                </div>

                <div class="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                </div>
                </div>
            `;
            cardDeck.appendChild(card);
            loading.style.display = 'none';
        });
    })
    .catch(err => {
        console.log(err)
    });