const nameDisplay = document.getElementById('name');
console.log('nameDisplay', nameDisplay);

nameDisplay.textContent = 'Spider';

const button = document.getElementById('button');
button.addEventListener('click', () => {
    console.log('button clicked');
});
