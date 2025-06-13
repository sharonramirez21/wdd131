/* section highlights = cards  */
const highlights = [
    {
        img: 'image/tokyo.webp',
        alt: 'Tokyo',
        title: 'Tokyo',
        description: "Japan's capital city blends the ultramodern with the traditional.",
        link: 'cities.html#tokyo'
    },

    {
        img: 'image/osaka.webp',
        alt: 'Osaka',
        title: 'Osaka',
        description: 'A dynamic city famous for its historic castle, delicious food, and lively shopping districts.',
        link: 'cities.html#osaka'
    }
];

const cardsContainer = document.getElementById('cardsContainer');

/* card create */
if (cardsContainer) {
    function createCard(card) {
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card');


        /*Title of the card*/
        const h3 = document.createElement('h3');
        h3.textContent = card.title;

        /*images*/
        const img = document.createElement('img');
        img.src = card.img;
        img.alt = card.alt;
        img.loading = 'lazy';

        /*Description */
        const p = document.createElement('p');
        p.textContent = card.description;

        /*DIV for img + p */
        const contentDiv = document.createElement('div');
        contentDiv.classList.add('card-content');
        contentDiv.appendChild(img);
        contentDiv.appendChild(p);

        /*Link (More..)*/
        const a = document.createElement('a');
        a.href = card.link;
        a.textContent = 'More...';

        /*add to container*/
        cardDiv.appendChild(h3);
        cardDiv.appendChild(contentDiv);
        cardDiv.appendChild(a);

        return cardDiv;
    }
}

/*Create the card in html */
highlights.forEach(card => {
    const cardElement = createCard(card);
    cardsContainer.appendChild(cardElement);
});