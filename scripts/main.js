/* eslint-disable no-alert */
/* eslint-disable strict */
/* eslint-disable func-names */

'use strict';

import factorialFor from './modules/bodyMath.js';
import fizzBuzz from './modules/fizzBuzz.js';
import diffAngle from './modules/diffAngle.js';

const myImage = document.querySelector('img');

myImage.onclick = (e2) => {
  e2.stopPropagation();
  const mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/logo.png') {
    myImage.setAttribute('src', 'images/bull.jpg');
  } else {
    myImage.setAttribute('src', 'images/logo.png');
  }
};

const myButton = document.querySelector('button.change-name');
const myHeading = document.querySelector('h1');

const setUserName = () => {
  const myName = prompt('Пожалуйста введите своё имя.');
  localStorage.setItem('name', myName);
  myHeading.innerText = `Mozilla крутая, ${myName}`;
};

if (!localStorage.getItem('name')) {
  setUserName();
} else {
  const storedName = localStorage.getItem('name');
  myHeading.innerText = `Mozilla крутая, ${storedName}`;
}

myButton.onclick = () => {
  setUserName();
};

const btnCalcFact = document.querySelector('button.calc_fact');
const fieldAnswer = document.querySelector('p.calc_fact-answer');

const calcFact = () => {
  const operand = parseInt(document.querySelector('input#operand').value);
  fieldAnswer.innerText = factorialFor(operand);
};

btnCalcFact.onclick = () => {
  calcFact();
};

const btnCalFizzBuzz = document.querySelector('button.fizzBuzz');
const fieldAnswerFizzBuzz = document.querySelector('p.fizzBuzzAnswer');

const calcFizzBuzz = () => {
  const fizzOperBegin = parseInt(document.querySelector('input#fizzOperBegin').value);
  const fizzOperEnd = parseInt(document.querySelector('input#fizzOperEnd').value);
  fieldAnswerFizzBuzz.innerHTML = fizzBuzz(fizzOperBegin, fizzOperEnd);
};

btnCalFizzBuzz.onclick = () => {
  calcFizzBuzz();
};

const btnCalDiffAngle = document.querySelector('button.diffAngle');
const fieldAnswerDiffAngle = document.querySelector('p.diffAngleAnswer');

const calcDiffAngle = () => {
  const operAngle1 = parseInt(document.querySelector('input#operAngle1').value);
  const operAngle2 = parseInt(document.querySelector('input#operAngle2').value);
  fieldAnswerDiffAngle.innerHTML = diffAngle(operAngle1, operAngle2);
};

btnCalDiffAngle.onclick = () => {
  calcDiffAngle();
};

const list = document.querySelector('ul.what_do');
const btnAddRow = document.querySelector('button.add-row');

list.querySelectorAll('li').forEach((e) => {
  e.onclick = function (e1) {
    e1.stopPropagation();
    const listContent = prompt('Введи новый текст для строки из списка');
    this.textContent = listContent;
  };
});

/* document.querySelectorAll('li').forEach(e => {e.addEventListener('click', function(e1) {
        e1.stopPropagation();
        let listContent = prompt("Введи новый текст для строки из списка");
        this.textContent = listContent;
    })}); */

/* list.childNodes.forEach(e => {e.addEventListener('click', function(e1) {
        e1.stopPropagation();
        let listContent = prompt("Введи новый текст для строки из списка");
        this.textContent = listContent;
    })}); */

btnAddRow.onclick = () => {
  const listItem = document.createElement('li');
  const listContent = prompt('Какой текст ты хочешь добавить в список?');
  listItem.textContent = listContent;
  list.appendChild(listItem);

  listItem.onclick = function (e) {
    e.stopPropagation();
    // eslint-disable-next-line no-shadow
    const listContent = prompt('Введи новый текст для строки из списка');
    this.textContent = listContent;
  };
};
