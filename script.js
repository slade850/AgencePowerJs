const bd = document.querySelector('body').classList;
const nv = document.querySelector('nav').classList;
const boutonL = document.getElementById('togglebtn').classList;
const bouton = document.getElementById('togglebtn');
const header = document.querySelector('header').classList;
const services = document.getElementById('services').classList;
const contact = document.getElementById('contact').classList;
const card = document.querySelectorAll('.card');
const profil = document.querySelectorAll('.profil');



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
    header.toggle("colored");
    services.toggle("colored");
    contact.toggle("colored");
    header.toggle("darkColored");
    services.toggle("darkColored");
    contact.toggle("darkColored");
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