// selects the element for the color picker
const colorPicker = document.querySelectorAll('input[type="color"]')[0];
// selects the element for the text color picker
const textPicker = document.querySelectorAll('input[type="color"]')[1];
// selects the element for the save button
const saveButton = document.querySelector('button');

// add an event listener to the save button
saveButton.addEventListener('click', () => {
    // call the applyColors function with the color picker values
    applyColors(colorPicker.value,  textPicker.value);

    // save the color picker values to local storage
    localStorage.setItem('color', colorPicker.value);
    // save the text color picker values to local storage
    localStorage.setItem('text', textPicker.value);
});

// get the color picker values from local storage
const bgColorValue = localStorage.getItem('color');
// get the text color picker values from local storage
const textColorValue = localStorage.getItem('text');

// calls the applyColors function with the color picker values
applyColors(bgColorValue, textColorValue);

// function to apply the color picker values to the page
function applyColors(bgColor, textColor) {
    // set the background color to the color picker value
    document.body.style.backgroundColor = bgColor;
    // set the text color to the text color picker value
    document.body.style.color = textColor;
    // set the color picker value to the background color
    colorPicker.value = bgColor;
    // set the text color picker value to the text color
    textPicker.value = textColor;
}