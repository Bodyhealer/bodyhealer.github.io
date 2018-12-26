var myImage = document.querySelector('img');

myImage.onclick = function (e2) {
    e2.stopPropagation;
    var mySrc = myImage.getAttribute('src');
    if (mySrc === "images/logo.png") {
        myImage.setAttribute('src', 'images/bull.jpg');
    } else {
        myImage.setAttribute('src', 'images/logo.png');
    }
};

var myButton = document.querySelector('button.change-name');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Пожалуйста введите своё имя.');
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla крутая, ' + myName;
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Mozilla крутая, ' + storedName;
}

myButton.onclick = function () {
    setUserName();
};

var list = document.querySelector('ul.what_do');
var btnAddRow = document.querySelector('button.add-row');

list.querySelectorAll('li').forEach(e => {e.addEventListener('click', function(e1) {
        e1.stopPropagation();
        var listContent = prompt("Введи новый текст для строки из списка");
        this.textContent = listContent;
    })});

/*document.querySelectorAll('li').forEach(e => {e.addEventListener('click', function(e1) {
        e1.stopPropagation();
        var listContent = prompt("Введи новый текст для строки из списка");
        this.textContent = listContent;
    })});*/

/*list.childNodes.forEach(e => {e.addEventListener('click', function(e1) {
        e1.stopPropagation();
        var listContent = prompt("Введи новый текст для строки из списка");
        this.textContent = listContent;
    })});*/

btnAddRow.onclick = function () {
    var listItem = document.createElement('li');
    var listContent = prompt("Какой текст ты хочешь добавить в список?");
    listItem.textContent = listContent;
    list.appendChild(listItem);
    
    listItem.onclick = function(e) {
        e.stopPropagation();
        var listContent = prompt("Введи новый текст для строки из списка");
        this.textContent = listContent;
    }
}