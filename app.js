const nameDisplay = document.getElementById('name');
console.log('nameDisplay', nameDisplay);

nameDisplay.textContent = 'Spider';

const button = document.getElementById('button');
button.addEventListener('click', () => {
    console.log('button clicked');
    const inputBox = document.getElementById('input-box');
    nameDisplay.textContent = inputBox.value;
});

const colorDropdown = document.getElementById('color-select');
colorDropdown.addEventListener('change', () => {
    console.log('color selected: ' + colorDropdown.value);

    nameDisplay.classList.remove('rebeccapurple');
    nameDisplay.classList.remove('blue');
    nameDisplay.classList.remove('goldenrod');

    nameDisplay.classList.add(colorDropdown.value);
});
