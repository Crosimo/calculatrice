let mySection = document.createElement("section");
mySection.style = `background-color: green; width:40%; height:30rem; border-radius: 1rem; display: flex; flex-direction: column; justify-content: space-evenly; `
let myBody = document.querySelector("body");
myBody.style = "display:flex; justify-content: center; background-color: pink "
let i;
let myDiv;
let myButton;
for ( i = 0; i < 3; i++){
    myDiv = mySection.appendChild(document.createElement('div'));
    myDiv.style = "width: 80%; padding: 0.5rem; height: 10%; box-sizing: border-box; margin-top:0.1rem; border-radius: 1rem; color: white; display:flex; justify-content: center; align-items : center;  margin-left: 10%; background-color: transparent";
}

let myDivs = mySection.children;
myDivs[0].style = "width: 80%; height: 20%; box-sizing: border-box; background-color: transparent; margin-left: 9.5%";
let myInput = myDivs[0].appendChild(document.createElement('input'));
myInput.style = "height:100%; width: 100%; font-size: 4rem; border-radius : 1rem; background-size: cover; color: white; background-position-y:80%"
myInput.style.backgroundImage = "url('./public/images/okay.jpg')";
myDivs[1].style = "height: 65%; display:flex; flex-wrap: wrap;justify-content: space-evenly";

for (i = 0; i < 20; i++){
    myButton = myDivs[1].appendChild(document.createElement("button"));
    myButton.style = `background-color: white; color: black; padding: 2px; height: 15%; width: 20%; margin: 2%; border-radius: 0.5rem`;
    let arr = ['c', 'x', '%', '/', 7, 8, 9, '*', 4, 5, 6, '-', 1, 2, 3, '+', 0, 0, '.', '()']
    
    myDivs[1].children[i].textContent =`${arr[i]}`
}
console.log(myDivs[1].children)
myDivs[1].children[1].textContent = '';

myDivs[1].children[1].className = "back";

export {mySection, myBody, i, myDiv, myButton, myDivs, myInput}