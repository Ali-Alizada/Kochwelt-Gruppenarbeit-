function toggleMenu() {
    document.getElementById("menuMobile").classList.toggle("nav-bar-mobile-slide");
}


function sendMail(event){
    event.preventDefault();

    fetch("https://formspree.io/f/xzzaryjp", {
        method: "POST",
        body: new FormData(event.target),
        headers: {
            'Accept': 'application/json'
        }
    }).then((response) => {
        if(response.ok){
            window.location.href = "./send_mail.html";
            event.target.reset();
        } else {
            alert("❌ Fehler beim Senden, bitte erneut versuchen.");
        }
    }).catch((error) => {
        console.error(error);
        alert("⚠️ Netzwerkfehler – keine Verbindung möglich.");
    });
}