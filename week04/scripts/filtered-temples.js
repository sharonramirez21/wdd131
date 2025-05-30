// current date
const today = new Date();
const menu = document.getElementById('menu');
const nav = document.querySelector('nav');

// hambuerger buttom
menu.addEventListener('click', () =>
{
    nav.classList.toggle('show');
    menu.classList.toggle('open');
})

// current year --- with getFullYear()
const currentYear = today.getFullYear();
document.getElementById("currentyear").textContent = currentYear;  

// lastModified
const LastModifiedDate = document.lastModified; 
document.getElementById("lastModified").textContent = `Last Modification: ${LastModifiedDate}`;


const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Buenos Aires Argentina",
    location: "Buenos Aires, Argentina",
    dedicated: "1986, January , 17",
    area: 30659,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/buenos-aires-argentina-temple/buenos-aires-argentina-temple-4087-main.jpg"
  },
  {
    templeName: "Davao Philippines",
    location: "Davao, Philippines",
    dedicated: "2020, November, 14",
    area: 18450,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/davao-philippines-temple/davao-philippines-temple-11690-main.jpg"
  },
  {
    templeName: "Perth Australia",
    location: "Perth, Australia",
    dedicated: "2001, May, 20",
    area: 10700,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/perth-australia-temple/perth-australia-temple-34994-main.jpg"
  }
];

const container = document.querySelector("#temple-container");

// Point 6 and 7
function displayTemples(filteredTemples, title="Temples") {
  const container = document.querySelector("#temple-container");
  const titleElement = document.querySelector("#temple-title");

  titleElement.textContent = title; //title

  container.innerHTML = "";  
  filteredTemples.forEach(temple => {
      // creatd section with all 
      
      const card = document.createElement("section");
      card.classList.add("temple-card"); //class add

      const name = document.createElement("h2");
      name.textContent = temple.templeName;

      const location = document.createElement("p");
      location.textContent = `Location : ${temple.location}`;

      const dedication = document.createElement("p");
      dedication.textContent = `Dedicated : ${temple.dedicated}`;

      const area = document.createElement("p");
      area.textContent =  `Area: ${temple.area}`;

      const images = document.createElement("img");
      images.src = temple.imageUrl;
      images.alt = temple.templeName;
      images.width = 400;
      images.height = 250;
      images.loading = "lazy"; 

      card.appendChild(name);
      card.appendChild(location);
      card.appendChild(dedication);
      card.appendChild(area);
      card.appendChild(images);

      container.appendChild(card);
  });
};

// for HOME nav
document.querySelector("#home").addEventListener("click", (e) => {
  e.preventDefault();
  displayTemples(temples);
});

// for OLD temples
document.querySelector("#old").addEventListener("click", (e) =>{
  e.preventDefault();
  const oldTemples = temples.filter(t => {
    const year = parseInt(t.dedicated.split(",")[0].trim())
    return year < 1900;
  });
  displayTemples(oldTemples, "Old Temples");
});


// for new temples
document.querySelector("#new").addEventListener("click", (e) => {
  e.preventDefault();
  const newTemples = temples.filter(t => {
    const year = parseInt(t.dedicated.split(",")[0].trim());
    return year > 2000;
  });
  displayTemples(newTemples, "New Temples");
});


// for larges (> 90,000)
document.querySelector("#large").addEventListener("click", (e) => {
  e.preventDefault();
  const largeTemples = temples.filter(t => t.area > 90000);
  displayTemples(largeTemples, "Larges Temples");
});


// for small (< 10,000)
document.querySelector ("#small").addEventListener("click", (e) => {
  e.preventDefault();
  const smallTemples = temples.filter(t => t.area < 10000);
  displayTemples(smallTemples, "Small Temples");
});

displayTemples(temples, "Temples"); 