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
// -------- constantes pour recupération des éléments du DOM -----|  

let togglebtn = 0; //variable pour verifier l'etat du le toggle---|

bouton.addEventListener('click', () => { //ecoute sur le click du toggle.
    togglebtn == 0 ? togglebtn = 1: togglebtn = 0; //condition pour changer la valeur de notre variable togglebtn. 
    callDark(); // Appel de la fonction callDark pour passé du mode clair au mode sombre et inversement
});

const callDark = () => {
    togglebtn == 1 ? localStorage.setItem('dark', togglebtn): localStorage.clear(); // si ont active le mode sombre ont l'enregistre la variable dans le localStorage.
    bd.toggle("darkBody"); //avec la méthode toggle ont implémente la classe si elle n'est pas présente dans le cas contraire ont la supprime.
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
    if(togglebtn == 1){ // Condition pour basculer les images de services et changer le texte qui apparait à côté du toggle.
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

// verification si une valeur est présente dans le localStorage 
// Ont la place après la fonction toggle pour s'assurer qu'au démarrage la fonction soit correctement charger 
if(localStorage.getItem('dark') != undefined){
    togglebtn = localStorage.getItem('dark');
    if(togglebtn == 1){callDark();};
}

let burgerOn = 0; //On crée une variable burgerOn qui servira à vérifier l’état du menu burger 

function closeMenu(){ //Fonction pour fermer le menu burger
    burgerOn = 0;
    burger.style.transform = "rotate(0deg)";
    burger.setAttribute('class', "fas fa-bars fa-2x");
    ul.style.opacity = '';
    ul.style.width = '';
    ul.style.height = '';
};

ul.addEventListener( 'mouseleave' , () => { // Si nous sortons de la liste du menu on appelle la fermeture.
    closeMenu()
});

lien.forEach( a => {
        a.addEventListener( 'click' , () => { //Si nous cliquons sur un lien on appelle la fermeture 
            closeMenu()
    });
})

burger.addEventListener('click', () => { //Ecoute du click sur le burger pour ouvrir ou fermer le menu.
    if(burgerOn == 0){
        burgerOn = 1;
        burger.style.transition = "0.2s";
        burger.style.transform = "rotate(90deg)";
        burger.setAttribute('class', "fas fa-times fa-2x");
        ul.style.transition = "0.2s";
        ul.style.width = '159px';
        ul.style.height = '220px';
        ul.style.opacity = 1;
    } else {
        closeMenu()
    }
});
