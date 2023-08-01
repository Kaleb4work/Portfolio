function toggleMenu(){
    //Speichert den Bereich menu-links, hamburger-icon in der Variable
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    //Öffnet beim Klicken den jeweiligen Bereich und schließt den anderen
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}