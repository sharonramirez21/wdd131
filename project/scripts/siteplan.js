const today = new Date();

const currentYear = today.getFullYear();
document.getElementById("currentyear").textContent = currentYear;

const LastModifiedDate = document.lastModified; 
document.getElementById("lastModified").textContent = `Last Modification: ${LastModifiedDate}`; 
