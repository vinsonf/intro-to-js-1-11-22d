console.dir(document);

console.dir(document.querySelector('h1'));
const myH1 = document.querySelector('h1');
myH1.addEventListener('click', () => {
    console.log('clicked');
    myH1.innerHTML = 'clicked';
    myH1.setAttribute('data-my-attr', 'my-value');

    console.log(document.getElementById('my-crazy-title'))
})


const dom = {
    document: {
        head: {},
        body: {
            querySelector: () => {},
            innerHTML: '',
            children: [
                {
                    tagName: 'h1',
                    innerHTML: 'text',
                    addEventListener(event, callback) {
    
                    },
                },
            ],
            style: {
                color: 'red',
                backgroundColor: 'blue',
            },
            addEventListener() {},
            appendChild(element) {}
        },
    }
}

console.log('for loop')
for(let i = 0; i < 10; i++) {
    const h1 = document.createElement('h1');
    h1.innerHTML = i + 'Hello World';
    document.body.appendChild(h1);
    h1.addEventListener('mouseenter', () => {
       
        h1.style.color = 'hsl(' + i * 40 + ', 100%, 50%)';
      
    })
    
}
