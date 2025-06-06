const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// loading chaoter or make an li
let chaptersArray = getChapterList() || [];

// chapters saved on page load
chaptersArray.forEach(chapter => {
    displayList(chapter);
});

// add a chapter
button.addEventListener('click', function() {
  if (input.value.trim() !== '') {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();

        input.value = "";  
        input.focus();
    }
});

// show a chapter in the list with delte button
function displayList(item) {
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');

    li.textContent = item;
    deleteButton.textContent = '❌';
    deleteButton.setAttribute('aria-label', `Delete ${item}`);

    li.append(deleteButton);
    list.append(li);

    deleteButton.addEventListener('click', function () {
        deleteChapter(item + '❌');
    });
}

// save to the localStorage
function setChapterList() {
    localStorage.setItem('chapters', JSON.stringify(chaptersArray));
}

// load from localStorage
function getChapterList() {
    const stored = localStorage.getItem('chapters');
    return stored ? JSON.parse(stored) : null;
}

// delete a chapter from the list and update localStorage
function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1); // delete the '❌'
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();

    // Update the list
    list.innerHTML = '';
    chaptersArray.forEach(displayList);
}
