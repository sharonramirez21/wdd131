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