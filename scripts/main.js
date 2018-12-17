var myImage = document.querySelector('img');

myImage.onclick = function(){
    var mySrc = myImage.getAttribute('src');
    if(mySrc === "images/logo.png"){
        myImage.setAttribute('src', 'images/bull.jpg');
    } else {
        myImage.setAttribute('src', 'images/logo.png');
    }
}

var myButton = document.querySelector('button');
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
}