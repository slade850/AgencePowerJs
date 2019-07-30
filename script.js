const bd = document.querySelector('body').classList;
const nv = document.querySelector('nav').classList;
const boutonL = document.getElementById('togglebtn').classList;
const bouton = document.getElementById('togglebtn');
const header = document.querySelector('header').classList;
const services = document.getElementById('services').classList;
const contact = document.getElementById('contact').classList;
const card = document.querySelectorAll('.card');
const profil = document.querySelectorAll('.profil');
const input = document.querySelectorAll('input');
const textarea = document.querySelector('textarea').classList;
const burger = document.getElementById('burger');
const ul = document.querySelector('ul');
const lien = document.querySelectorAll('a');

let togglebtn = 0;

bouton.addEventListener('click', () => {
    togglebtn == 0 ? togglebtn = 1: togglebtn = 0;
    callDark();
});

const callDark = () => {
    togglebtn == 1 ? localStorage.setItem('dark', togglebtn): localStorage.clear();
    bd.toggle("darkBody");
    nv.toggle('colored');
    nv.toggle("navDark");
    boutonL.toggle("bottonColored");
    ul.classList.toggle('darkUl');
    header.toggle("colored");
    services.toggle("colored");
    contact.toggle("colored");
    header.toggle("darkColored");
    services.toggle("darkColored");
    contact.toggle("darkColored");
    input.forEach(val => {
        val.classList.toggle('darkBody');
    });

    textarea.toggle('darkBody');
    card.forEach(val => {
        val.classList.toggle('card');
        val.classList.toggle('darkCard');
    });
    profil.forEach(val => {
        val.classList.toggle('profil');
        val.classList.toggle('darkProfil');
    });
    if(togglebtn == 1){
        document.getElementById('come').innerText = "Come to the light side";
        document.getElementById('ping').setAttribute('src', './ico/pingRed.png');
        document.getElementById('note').setAttribute('src', './ico/noteRed.png');
        document.getElementById('screen').setAttribute('src', './ico/screenRed.png');
        document.getElementById('wave').setAttribute('src', './ico/waveRed.png');
        document.getElementById('shield').setAttribute('src', './ico/shieldRed.png');
        document.getElementById('circle').setAttribute('src', './ico/circleRed.png');
        document.getElementById('pad').setAttribute('src', './ico/padRed.png');
        document.getElementById('check').setAttribute('src', './ico/checkRed.png');
    }else{
        document.getElementById('come').innerText = "Come to the dark side";
        document.getElementById('ping').setAttribute('src', './ico/ping.png');
        document.getElementById('note').setAttribute('src', './ico/note.png');
        document.getElementById('screen').setAttribute('src', './ico/screen.png');
        document.getElementById('wave').setAttribute('src', './ico/wave.png');
        document.getElementById('shield').setAttribute('src', './ico/shield.png');
        document.getElementById('circle').setAttribute('src', './ico/circle.png');
        document.getElementById('pad').setAttribute('src', './ico/pad.png');
        document.getElementById('check').setAttribute('src', './ico/check.png');
    }
}

if(localStorage.getItem('dark') != undefined){
    togglebtn = localStorage.getItem('dark');
    if(togglebtn == 1){callDark();};
}
let bOn = 0;

ul.addEventListener( 'mouseleave' , () => {
    bOn = 0;
    burger.style.transform = "rotate(0deg)";
    burger.setAttribute('class', "fas fa-bars fa-2x");
    ul.style.opacity = '';
    ul.style.width = '';
    ul.style.height = '';
});

lien.forEach( a => {
        a.addEventListener( 'click' , () => {
        bOn = 0;
        burger.style.transform = "rotate(0deg)";
        burger.setAttribute('class', "fas fa-bars fa-2x");
        ul.style.opacity = '';
        ul.style.width = '';
        ul.style.height = '';
    });
})

burger.addEventListener('click', () => {
    if(bOn == 0){
        bOn = 1;
        burger.style.transition = "0.2s";
        burger.style.transform = "rotate(90deg)";
        burger.setAttribute('class', "fas fa-times fa-2x");
        ul.style.transition = "0.2s";
        ul.style.width = '159px';
        ul.style.height = '220px';
        ul.style.opacity = 1;
    } else {
        bOn = 0;
        burger.style.transform = "rotate(0deg)";
        burger.setAttribute('class', "fas fa-bars fa-2x");
        ul.style.opacity = '';
        ul.style.width = '';
        ul.style.height = '';
    }
});

window.addEventListener('scroll', () => {
    card.forEach( val => {
        val.style.opacity = '0';
        val.style.transition = '1s';
        val.style.opacity = '1';
    })
})