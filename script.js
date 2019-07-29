let bd = document.querySelector('body').classList;
let nv = document.querySelector('nav').classList;
let boutonL = document.getElementById('togglebtn').classList;
const bouton = document.getElementById('togglebtn');
let header = document.querySelector('header').classList;
let services = document.getElementById('services').classList;
let contact = document.getElementById('contact').classList;

let togglebtn = 0;

bouton.addEventListener('click', () => {
    togglebtn == 0 ? togglebtn = 1: togglebtn = 0;
    callDark();
});

const callDark = () => {
    togglebtn == 1? localStorage.setItem('dark', togglebtn): localStorage.clear();
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
}

if(localStorage.getItem('dark') != undefined){
    togglebtn = localStorage.getItem('dark');
    if(togglebtn == 1){callDark();};
}