
const getArtists = (url) => {
    const params = {
        method: "GET",
        header: {
            "content-type": "application/json; charset=UTF-8"
        }
    }
    return fetch(url, params)
        .then((data) => data.json())
}



getArtists('/api/artists')
    .then((json) => {
        const cardDeck = document.querySelector('.card-deck');
        const loading = document.querySelector('.loading');
        json.forEach(artist => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.style.width = "360px";

            card.innerHTML = `
                <div class="card-image">
                <figure class="image is-4by3">
                    <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus nec iaculis mauris. <a>@bulmaio</a>.
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