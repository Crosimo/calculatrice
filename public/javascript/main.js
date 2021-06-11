import  {mySection, myBody, i, myDiv, myButton, myDivs, myInput} from "./elementCreation.js"


myDivs[1].addEventListener('click', (e) => {
    if (e.target == myDivs[1]) {
        
    } else if(e.target.className == "focus"){
        e.target.classList.remove("focus");
    } else {
        for (let i = 0; i < 20; i++) {
          myDivs[1].children[i].classList.remove('focus')
        }
        e.target.classList.add("focus");
        
    }
})

// mettre le egal

let myEgal = myDivs[2].appendChild(document.createElement('button'));
myEgal.textContent = "=";
myEgal.style = "background-color: purple; width : 100%; height: 100%; border-radius: 1rem;"


myBody.append(mySection)


let myOperators = [ '+', '-', '/', '*', '%']
myDivs[1].addEventListener('click', (e) => {
    myDivs[2].children[0].style.backgroundColor = "purple"
    if (e.target == myDivs[1]) {
        
    } 
    else if    (e.target.textContent == "c") {
        myInput.value = 0;

    } else if (myOperators.includes(e.target.textContent)){
        if ((myInput.value.split(e.target.textContent)).length >= 1) {
            myFonc(e)
            myInput.value += e.target.textContent
        }
    } else if (e.target == myDivs[1].children[1]) {
        myInput.value = myInput.value.slice(0,myInput.value.length -1)
    } 
    else {
        if (myInput.value == 0) {
            myInput.value = ''
            myInput.value += e.target.textContent; 
     }  else if (myInput.value.length >8) {
        
        } else {
            myInput.value += e.target.textContent; 
    }
    
    }
    
    
})


let myFonc = function (e) {
    let splitterPlus = myInput.value.split('+')
    let splitterMoins = myInput.value.split('-')
    let splitterFois = myInput.value.split('*')
    let splitterDivise = myInput.value.split('/')
    let splitterModulo = myInput.value.split('%')
    let test = myInput.value.split('')
    console.log(splitterMoins);
    if (e.target == myDivs[2].children[0]) {
        myDivs[2].children[0].style.backgroundColor = "#FFB1BB"
    }
   
    if (splitterMoins[0] !== myInput.value) {  
       
       
        (parseInt(splitterMoins[0]) - parseInt(splitterMoins[1])).toFixed(2).split('.')[0] == 0 &&  parseInt(myInput.value).toFixed(2).split('.')[1]== 0 ? myInput.value = (parseInt(splitterMoins[0]) - parseInt(splitterMoins[1])).toFixed(0): myInput.value =(parseInt(splitterMoins[0]) - parseInt(splitterMoins[1])).toFixed(2);
    } else if (splitterPlus[0] !== myInput.value) {  
        myInput.value =( parseInt(splitterPlus[0]) + parseInt(splitterPlus[1] )).toFixed(2)
    } else if (splitterFois[0] !== myInput.value) {  
        myInput.value = (splitterFois[0] * splitterFois[1] ).toFixed(2)
    } else if (splitterDivise[0] !== myInput.value) {  
        myInput.value = (splitterDivise[0] / splitterDivise[1] ).toFixed(2)
    }else if (splitterModulo[0] !== myInput.value) {  
        myInput.value = (parseInt(splitterModulo[0]) % parseInt(splitterModulo[1] ))
    }


    
}


document.addEventListener('keydown', (e) => {
    myDivs[2].children[0].style.backgroundColor = "purple";
     if (e.key == ",") {
        
     } else if (myOperators.includes(e.key)) {
            if ((myInput.value.split(e.key)).length >= 2) {
                myFonc(e)
                myInput.value = `${Math.round(parseInt((myInput.value)))}${e.key}`
            } else {
                myInput.value +=  e.key
         }
         
            
     }else if (e) {
         for (let z = 0; z < 10; z++){
             if (z == parseInt(e.key)) {
                myInput.value += e.key 
             } 
         } 
     } else if (e.key == myDivs[2].children[0].textContent) {
         myFonc(e)
    }
    console.log((e.key));
})    


  



myDivs[2].children[0].addEventListener('click', myFonc)




