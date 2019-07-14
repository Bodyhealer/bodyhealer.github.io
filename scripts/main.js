/* eslint-disable no-alert */
/* eslint-disable strict */
/* eslint-disable func-names */
/* jshint -W117 */

'use strict';

import factorialFor from './modules/bodyMath.js';
import fizzBuzz from './modules/fizzBuzz.js';
import diffAngle from './modules/diffAngle.js';
import reverseInt from './modules/reverseInt.js';
import ackermann from './modules/ackermann.js';
import fib from './modules/fib.js';
import fibBinet from './modules/fibBinet.js';
import fromCharCode from './modules/fromCharCode.js';
import eratosthenesSieve from './modules/eratosthenesSieve.js';

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
  const myName = 'Привет';
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

const btnCalAckermann = document.querySelector('button.ackermann');
const fieldAnswerAckermann = document.querySelector('p.ackermannAnswer');

const calcAckermann = () => {
  const operAckermann1 = parseInt(document.querySelector('input#operAckermann1').value);
  const operAckermann2 = parseInt(document.querySelector('input#operAckermann2').value);
  fieldAnswerAckermann.innerHTML = ackermann(operAckermann1, operAckermann2);
};

btnCalAckermann.onclick = () => {
  calcAckermann();
};

const btnCalcFib = document.querySelector('button.fib');
const fieldAnswerFib = document.querySelector('p.fibAnswer');

const calcFib = () => {
  const operFib = parseInt(document.querySelector('input#operFib').value);
  fieldAnswerFib.innerHTML = fib(operFib);
};

btnCalcFib.onclick = () => {
  calcFib();
};

const btnCalcFibBinet = document.querySelector('button.fibBinet');
const fieldAnswerFibBinet = document.querySelector('p.fibBinetAnswer');

const calcFibBinet = () => {
  const operFibBinet = parseInt(document.querySelector('input#operFibBinet').value);
  fieldAnswerFibBinet.innerHTML = fibBinet(operFibBinet);
};

btnCalcFibBinet.onclick = () => {
  calcFibBinet();
};

const btnCalcFromCharCode = document.querySelector('button.fromCharCode');
const fieldAnswerFromCharCode = document.querySelector('p.fromCharCodeAnswer');

const calcFromCharCode = () => {
  const operFromCharCode1 = parseInt(document.querySelector('input#operFromCharCode1').value);
  const operFromCharCode2 = parseInt(document.querySelector('input#operFromCharCode2').value);
  fieldAnswerFromCharCode.innerHTML = fromCharCode(operFromCharCode1, operFromCharCode2);
};

btnCalcFromCharCode.onclick = () => {
  calcFromCharCode();
};

const btnCalcEratosthenes = document.querySelector('button.eratosthenes');
const fieldAnswerEratosthenes = document.querySelector('p.eratosthenesAnswer');

const calcEratosthenes = () => {
  const operEratosthenes = parseInt(document.querySelector('input#operEratosthenes').value);
  fieldAnswerEratosthenes.innerHTML = eratosthenesSieve(operEratosthenes);
};

btnCalcEratosthenes.onclick = () => {
  calcEratosthenes();
};

const btnCalcReverseInt = document.querySelector('button.reverseInt');
const fieldAnswerReverseInt = document.querySelector('p.reverseIntAnswer');

const calcReverseInt = () => {
  const operReverseInt = parseInt(document.querySelector('input#operReverseInt').value);
  fieldAnswerReverseInt.innerHTML = reverseInt(operReverseInt);
};

btnCalcReverseInt.onclick = () => {
  calcReverseInt();
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

/*
С помощью reduce можно реализовать другие функции: map, filter,
 но они в таком виде они будут не информативны,
  можно написать алиас для них
arr.reduce((acc, cur) => { return [...acc, cur + 1]},[])
arr.reduce((acc, cur) => { acc.push(cur + 1); return acc;},[])
const map = (fn) => arr.reduce((acc, cur) => {acc.push(fn(cur)); return acc;},[]);
map(x => x+1)
arr.filter(x=> x%2)
функция по-умолчанию проходит по всем элементам массива, поэтому можно написать свою
реализацию функции reduce чтобы она могла останавливаться
const REDUCED = "break";
*/
