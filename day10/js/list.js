const listInput = document.querySelector('input[type=text]');
const listButton = document.querySelectorAll('button')[1];
const list = document.querySelector('ul');

console.log(listInput, listButton, list);

let items = [];


let storageItems = localStorage.getItem('items');
console.log('items', storageItems);
if (storageItems){
    items = JSON.parse(storageItems);
    console.log('items', items);
    items.forEach(item => {
        addItemToView(item);
    })
}

// add an event listener to the list button
listButton.addEventListener('click', () => {
    // get the value of the list input
    addItemToView(listInput.value);
    // add the list item to the items array
    items.push(listInput.value);
    console.log(items);

    localStorage.setItem('items', JSON.stringify(items));
});


function addItemToView(value) {
    // create a new list item
    const listItem = document.createElement('li');
    list.append(listItem);
    // set the text content of the list item to the list input value
    listItem.innerHTML = value;
}