/* footer */
const today = new Date();

const currentYear = today.getFullYear();
document.getElementById("currentyear").textContent = currentYear;

const LastModifiedDate = document.lastModified;
document.getElementById("lastModified").textContent = `Last Modification: ${LastModifiedDate}`;


/* buttom hamb */
const menuBtn = document.getElementById('menu');
const nav = document.querySelector('nav');

menu.addEventListener('click', () =>
{
    nav.classList.toggle('show');
    menu.classList.toggle('open');
})
