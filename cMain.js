const addButton = document.querySelector('#nav-dropdown-add-icon');
const profileButton = document.querySelector('#nav-dropdown-profile');

addButton.addEventListener("click", function(e) {
    e.stopPropagation();
    let dropdown = addButton.parentElement.querySelector('.dropdown-menu');
    dropdown.classList.add('show');
});

profileButton.addEventListener("click", function(e) {
    e.stopPropagation();
    let dropdown = profileButton.parentElement.querySelector('.dropdown-menu');
    dropdown.classList.add('show');
});

window.onclick = function(event) {
    let dropdown = addButton.parentElement.querySelector('.dropdown-menu');
    let dropdown2 = profileButton.parentElement.querySelector('.dropdown-menu');

    dropdown.classList.remove('show');
    dropdown2.classList.remove('show');
}

//activity boxes
const contBoxes = document.querySelector('.cont-boxes');
const colors = [
    '#ebedf0','#c6e48b','#7bc96f','#239a3b','#196127'
];

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let i = 0; i < 300; i++) {
    let box = document.createElement('div');
    box.style.width = '12px';
    box.style.height = '12px';
    box.style.margin = '3px';
    box.style.backgroundColor = colors[getRandomInt(0,4)];

    contBoxes.appendChild(box);
}

const navbar = document.querySelector('#section-nav');
let sticky = navbar.offsetTop;

window.onscroll = function() {
    if (window.pageYOffset >= 88) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
};


const hamMenu = document.querySelector('#ham-menu');
const leftNav = document.querySelector('.left-nav ul');

let counter = 0;

hamMenu.addEventListener('click', function() {
    if (counter === 0) {
        counter = 1;
        leftNav.style.display = 'block';
    } else {
        leftNav.style.display = 'none';        
        counter = 0;
    }
});