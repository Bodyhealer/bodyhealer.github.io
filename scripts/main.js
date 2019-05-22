import {factorial_for} from './modules/bodyMath';

let myImage = document.querySelector('img');

myImage.onclick = function (e2) {
    e2.stopPropagation;
    let mySrc = myImage.getAttribute('src');
    if (mySrc === "images/logo.png") {
        myImage.setAttribute('src', 'images/bull.jpg');
    } else {
        myImage.setAttribute('src', 'images/logo.png');
    }
};

let myButton = document.querySelector('button.change-name');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Пожалуйста введите своё имя.');
    localStorage.setItem('name', myName);
    myHeading.innerText = `Mozilla крутая, ${myName}`;
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.innerText = `Mozilla крутая, ${storedName}`;
}

myButton.onclick = function () {
    setUserName();
};

const btn_calc_fact = document.querySelector('button.calc_fact');
const field_answer = document.querySelector('p.calc_fact-answer');

btn_calc_fact.onclick = () => {
    calc_fact();
};

const calc_fact = () => {
    let operand = parseInt(document.querySelector('input#operand').value);    
    field_answer.innerText = factorial_for(operand);
}

let list = document.querySelector('ul.what_do');
let btnAddRow = document.querySelector('button.add-row');

list.querySelectorAll('li').forEach(e => {e.addEventListener('click', function(e1) {
        e1.stopPropagation();
        let listContent = prompt("Введи новый текст для строки из списка");
        this.textContent = listContent;
    })});

/*document.querySelectorAll('li').forEach(e => {e.addEventListener('click', function(e1) {
        e1.stopPropagation();
        let listContent = prompt("Введи новый текст для строки из списка");
        this.textContent = listContent;
    })});*/

/*list.childNodes.forEach(e => {e.addEventListener('click', function(e1) {
        e1.stopPropagation();
        let listContent = prompt("Введи новый текст для строки из списка");
        this.textContent = listContent;
    })});*/

btnAddRow.onclick = function () {
    let listItem = document.createElement('li');
    let listContent = prompt("Какой текст ты хочешь добавить в список?");
    listItem.textContent = listContent;
    list.appendChild(listItem);
    
    listItem.onclick = function(e) {
        e.stopPropagation();
        let listContent = prompt("Введи новый текст для строки из списка");
        this.textContent = listContent;
    }
}