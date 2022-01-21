const textarea = document.querySelector('textarea');
const button = document.querySelector('button');
button.addEventListener('mouseenter', function() {
    document.querySelector('p').classList.remove('hidden');
})
button.addEventListener('click', () => {
    const p = document.createElement('p');
    p.innerHTML = textarea.value;
    document.body.appendChild(p);
    textarea.value = '';
})