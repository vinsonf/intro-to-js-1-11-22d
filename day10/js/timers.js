let timer = null;
let shakeT = null;


const button = document.querySelector('button');
const cancelButton = document.querySelectorAll('button')[1];

button.addEventListener('click', () => {
    let i = 0;

 

    shakeT = setTimeout(() => {
        button.classList.add('shaking');
    }, 5000);


    timer = setInterval(() => {
        i += 1;
        console.log(i)
    }, 1000);
});

cancelButton.addEventListener('click', () => {
    clearTimeout(shakeT);
    clearInterval(timer);
})