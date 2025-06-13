const historicPlaces = [
    {
        name: "Himeji Castle",
        description: "Himeji Castle is Japan's largest and most visited castle, renowned for its striking white exterior and elegant design, earning it the nickname “White Heron Castle.” Completed in 1609, it served as a powerful fortress during Japan's feudal era and remains remarkably intact despite wars and natural disasters. Located in Himeji City, Hyōgo Prefecture, it is considered a masterpiece of traditional Japanese architecture and was designated a UNESCO World Heritage Site in 1993.",
        image: 'image/Himeji-castle.webp',
        figcaption: "Himeji Castle, Hyōgo Prefecture",
        year: 1609
    },
    {
        name: "Hōryū-ji",
        description: "Hōryū-ji, located in Nara Prefecture, is one of the oldest wooden buildings in the world. Originally built in 607 AD by Prince Shōtoku, it played a key role in the early spread of Buddhism in Japan. The temple complex features beautifully preserved architecture and ancient Buddhist artwork, earning it a place on the UNESCO World Heritage list.",
        image: 'image/horyuji-temple.webp',
        figcaption: "Hōryū-ji, Nara Prefecture",
        year:  607
    },
    {
        name: "Fushimi Inari-taisha",
        description: "Fushimi Inari-taisha is a famous Shinto shrine in Kyoto, best known for its thousands of bright red torii gates lining trails up Mount Inari. Founded in 711 AD, it is dedicated to Inari, the god of rice and prosperity. The site is both spiritually significant and visually iconic, attracting millions of visitors each year.",
        image: 'image/Fushimi.webp',
        figcaption: "Fushimi Inari-taisha, Kyoto",
        year: 711
    },
    {
        name: "Itsukushima Shrine",
        description: "Located on Miyajima Island in Hiroshima Prefecture, Itsukushima Shrine is a Shinto sanctuary built in the 6th century to honor the sea goddesses and protect sailors. Famous for its 'floating' torii gate on the water, it was constructed to preserve the island's sacredness by avoiding direct contact with the land.",
        image: 'image/Itsukushima.webp',
        figcaption: "Itsukushima Shrine, Hiroshima Prefecture",
        year: 1168
    },
    {
        name: "Kinkaku-ji (Golden Pavilion)",
        description: "Situated in Kyoto, Kinkaku-ji was originally a shogun's retirement villa in the 14th century and later turned into a Zen Buddhist temple. Its golden-covered upper floors symbolize Buddhist harmony and the opulence of the Muromachi period. The temple reflects beauty, spirituality, and nature.",
        image: 'image/Pavilion.webp',
        figcaption: "Kinkaku-ji (Golden Pavilion), Kyoto",
        year: 1397
    },
    {
        name: "Hiroshima Peace Memorial (Genbaku Dome)",
        description: "Located in Hiroshima City, this preserved ruin was near the epicenter of the atomic bomb in 1945. Once an industrial hall, it now stands as a powerful symbol of the horrors of nuclear war and a call for peace, forming the heart of the Hiroshima Peace Memorial Park.",
        image: 'image/Hiroshima.webp',
        figcaption: "Hiroshima Peace Memorial, Hiroshima",
        year: 1915
    }
];

const container = document.getElementById("historicContainer");
const filterBtn = document.getElementById("filterOldest");

function displayPlaces(places) {
    container.innerHTML = "";
    places.forEach(place => {
        const section = document.createElement("section");
        section.classList.add("place-card");

        const title = document.createElement("h3");
        title.textContent = place.name;
        title.classList.add("place-title");

        // div for information 
        const contentDiv = document.createElement("div");
        contentDiv.classList.add("place-content");

        // div for description + year
        const textDiv = document.createElement("div");
        textDiv.classList.add("text-content");

        const desc = document.createElement("p");
        desc.textContent = place.description;

        const year = document.createElement("p");
        year.textContent = `Year Built: ${place.year}`;

        textDiv.appendChild(desc);
        textDiv.appendChild(year);

        // img + caption
        const figure = document.createElement("figure");
        figure.classList.add("image-content");

        const img = document.createElement("img");
        img.src = place.image;
        img.alt = place.name;
        img.loading = "lazy";
        img.style.width = "100%";
        img.style.height = "auto";

        const figcaption = document.createElement("figcaption");
        figcaption.textContent = place.figcaption;

        contentDiv.appendChild(textDiv);
        contentDiv.appendChild(figure);

        section.appendChild(title);
        section.appendChild(contentDiv);
        figure.appendChild(img);
        figure.appendChild(figcaption);

        container.appendChild(section);
    });
}

// filter
function filterPlaces() {
    const filter = filterSelect.value;

    if (filter === "all") {
        displayPlaces(historicPlaces);
    } else if (filter === "older") {
        const filtered = historicPlaces.filter(place => place.year > 1000);
        displayPlaces(filtered);
    } else if (filter === "newer") {
        const filtered = historicPlaces.filter(place => place.year <= 1000);
        displayPlaces(filtered);
    }
}

// Show all
displayPlaces(historicPlaces);

filterSelect.addEventListener("change", filterPlaces);