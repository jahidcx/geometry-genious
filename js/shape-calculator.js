// Objective : get base and height value of triangle , Calculate the area by using the provided formula, 
//  then display the area 
//  
/***
 * step-1: get base value
 * substep-1: added an id in the base input field
 * substep-2: use getElementById to access the input field 
 * substep-3: get value from the input field ( string type )
 * substep-4: convert the value into float means number type 
 * 
 * step-2: get height value (same as get base value process)
 */


function calculateTriangle(){
    // get triangle base value
     const triangleBaseInput = document.getElementById('triangle-base');
     const triangleBaseValue = triangleBaseInput.value; 
     const base = parseFloat(triangleBaseValue);
    //  console.log( base); 

    //  get triangle height value
    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeightValue = triangleHeightInput.value;
    const height = parseFloat(triangleHeightValue );
    // console.log( height); 

    // calculate triangle area
     const area = 0.5 * base * height ;
     console.log('Area of triangle: ', area); 

    //  display triangle area 
    const areaSpan = document.getElementById('tri-area-span');
    areaSpan.innerText = area ; 
}

// for Rectangle 

function calculateRectangle(){
    // get rectangle width value
    const rectangleWidthInput = document.getElementById('rectangle-width');
    const rectangleWidthValue = rectangleWidthInput.value;
    const width = parseFloat(rectangleWidthValue);

    // get rectangle length value 
    const rectangleLengthInput = document.getElementById('rectangle-length');
    const rectangleLengthValue = rectangleLengthInput.value;
    const length = parseFloat(rectangleLengthValue);
    // console.log(typeof length);

    // calculate rectangle area 
    const recArea = length *  width ;
    console.log('Area of Rectangle: ',recArea);

    // display rectangle area 
    const recAreaSpan = document.getElementById('rec-area-span');
    recAreaSpan.innerText = recArea; 
}