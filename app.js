const nameDisplay = document.getElementById('name');
const nametag = document.getElementById('name-box');
console.log('nameDisplay', nameDisplay);

nameDisplay.textContent = 'John Doe';

const button = document.getElementById('button');
button.addEventListener('click', () => {
    console.log('button clicked');
    const inputBox = document.getElementById('input-box');
    nameDisplay.textContent = inputBox.value;
    inputBox.value = '';
});

const colorDropdown = document.getElementById('color-select');
colorDropdown.addEventListener('change', () => {
    console.log('color selected: ' + colorDropdown.value);

    nameDisplay.classList.remove('rebeccapurple');
    nameDisplay.classList.remove('blue');
    nameDisplay.classList.remove('goldenrod');

    nameDisplay.classList.add(colorDropdown.value);
});

const backgroundDropdown = document.getElementById('background-select');
backgroundDropdown.addEventListener('change', () => {
    console.log('color selected: ' + backgroundDropdown.value);

    nametag.classList.remove('rebeccapurpleBG');
    nametag.classList.remove('blueBG');
    nametag.classList.remove('goldenrodBG');

    nametag.classList.add(backgroundDropdown.value);
});
