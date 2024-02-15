


function calculateParallelogramArea (){
    const base = getInputById('parallelogram-base');
    // console.log(base);
    const height = getInputById('parallelogram-height');
    // console.log(height); 

    const paraArea = base*height ;

    setInnerTextById('para-area-span',area);
   
}


function getInputById (inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const inputValue = parseFloat(inputValueText);
    // console.log(inputValue); 
    return inputValue; 
}

// set area 

function setInnerTextById (elementId , area){
    const element = document.getElementById(elementId);
    element.innerText= area;
}