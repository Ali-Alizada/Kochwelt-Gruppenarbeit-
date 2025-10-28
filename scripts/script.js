let links = [
    './recipe_Marc.html',
    './recipe_Aliaqa.html',
    './recipe_zuerich.html'
]

// toggle Responsiv menu 

function toggleRespMenu() {
    document.getElementById('resp-menu').classList.toggle('menu-mobile-closed');
}

// Randomised link opener

function rndLinks() {
    let i = parseInt(Math.random() * links.length);
    location.href = links[i];
}