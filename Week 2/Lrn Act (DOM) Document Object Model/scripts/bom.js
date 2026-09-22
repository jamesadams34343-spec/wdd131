const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('_______'); // Fill in the blank to reference the unordered list element.

const li = document.createElement('li');
const deleteButton = document.createElement('button');
li.textContent = input.value;
deleteButton.textContent = '❌'
li.append(deleteButton);
list.append(li);

button.addEventListener('click', function() {
  if (input.value.trim() !== '') {
    const newListItem = document.createElement('li');
    newListItem.textContent = chapterName;

    chapterList.appendChild(newListItem);

    chapterInput.value = '';
  }

  alert('Please enter a chapter name.');
  return;
});