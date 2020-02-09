const textArea = document.getElementById("textArea");
const submit = document.getElementById("submit");
const clear = document.getElementById("clear");

function isEmpty(val) {
	return val == ''; 
}

function checkTextAreaField() {
	submit.style.visibility = isEmpty(textArea.value) ? 'hidden' : 'visible';
}

function pushDataToLocalStorage() {
	if (window.localStorage.getItem("num23")) {
		alert("Value already exists!");
		return;
	}
	window.localStorage.setItem("num23", textArea.value);
}

function clearDataFromLocalStorage() {
	if (window.localStorage.getItem("num23")) {
		window.localStorage.removeItem("num23");
	}
}

function isEven(number) {
	return number % 2 == 0 ;
}

function colorizeNumbers(predicate) {
	return predicate ? "green" : "red";
}

function handleInput() {
	const dataFromLocalStorage = window.localStorage.getItem("num23");

	if (dataFromLocalStorage) {
		const paragraph = document.createElement("p");
		const data = document.createTextNode(dataFromLocalStorage);

		paragraph.style.color = colorizeNumbers(isEven(parseInt(dataFromLocalStorage)));

		paragraph.appendChild(data);
		document.body.insertBefore(paragraph,document.body.childNodes[1]);
	}
	clearDataFromLocalStorage();
}