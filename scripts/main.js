let myImage = document.querySelector('img');
let myButton1 = document.querySelector('#button1');
let myButton2 = document.querySelector('#button2');
let myHeading = document.querySelector('h1');
const img1 = "images/bojack.png";
const img2 = "images/bojack2.jpg";

function switchImage(image_el, img1, img2) {
    let mySrc = image_el.getAttribute("src");
    myImage.setAttribute("src", mySrc===img1 ? img2 : img1);
    myImage.setAttribute("style", 'width:350px;height:350px;');
}

myImage.onclick = function() {
    switchImage(myImage, img1, img2);
}

function greet(name) {
    return `Hi ${name}, I'm Andrii! 👋`
}

function setUserName() {
    let myName = prompt("What's your name?");
    if(!myName) {
        myHeading.textContent = greet("there");    
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = greet(myName);
    }
  }

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = greet(storedName);
}

myButton1.onclick = function() {
    setUserName();
}

myButton2.onclick = function() {
    if(localStorage.getItem('name')) {
        localStorage.removeItem('name');
        myHeading.textContent = greet("there")
    }
}