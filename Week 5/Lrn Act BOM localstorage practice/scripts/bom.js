// select elements from the DOM
const inputElement = document.querySelector("#favchap");
const buttonElement = document.querySelector("button");
const listElement = document.querySelector("#list");

let chaptersArray = getChapterList() || [];

// wait for button clicks
buttonElement.addEventListener("click", function () {
	// Check if the user entered something
	if (inputElement.value != "") {
		// create list item and give it the value of the input
		const li = document.createElement("li");
		li.textContent = inputElement.value;
		// create a button and add a click event listener
		const deleteBtn = document.createElement("button");
		deleteBtn.textContent = "❌";
		deleteBtn.addEventListener("click", function () {
			listElement.removeChild(li);
			inputElement.focus();
		});
		// add the button to the list item
		li.appendChild(deleteBtn);
		// OUTPUT: finally display the completed list item to the unordered list
		listElement.appendChild(li);
		// clear the user input field
		inputElement.value = "";
	}
	// focus the user back to the input field
	inputElement.focus();
});

buttonElement.addEventListener("click", () => {
	if(inputElement.value != '') {
		displayList(inputElement/value);
		chaptersArray.push(inputElement.value);
		setChapterList();
		inputElement.value = '';
		inputElement.focus();
	}
})

chaptersArray.forEach(chapter => {
	displayList(chapter);	
});


function getChapterList() {
	return JSON.parse(localStorage.getItem('myFavBOMList'));
}

function displayList(item) {
	let li = document.createElement('li');
	let deletebutton = document.createElement('button');
	li.textContent = item; // note the use of the displaylist parameter 'item'
	deletebutton.textContent = '❌';
	deletebutton.classList.add('delete'); // This references the css rule .delete{width:fit-content} to size the delete button
	li.append(deletebutton);
	listElement.append(li);
	deletebutton.addEventListener('click', function () {
		listElement.removeChild(li);
		deleteChapter(li.textContent); // note this new function that is needed to remove the chapter from the array and localStorage.
		inputElement.focus(); // set the focus back to the input
	});
	console.log('though I do not pretend I currently fully understand this code im getting better and I did type it out myself notes and all as I use these example programs as my notes in part though I more or less copying it but I hope to continue to learn as much as I can.')
}

function setChapterList() {
	localStorage.setItem('myfavBomList', JSON.stringify(chaptersArray));
}

function deletechapter(chapter) {
	chapter = chapter.slice(0, chapter.length - 1); // This slices off the last character
	chaptersArray = chaptersArray.filter(item => item !== chapter);
	setChapterList();
}
