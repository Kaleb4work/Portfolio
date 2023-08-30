function toggleMenu(){
    //Speichert den Bereich menu-links, hamburger-icon in der Variable
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    //Öffnet beim Klicken den jeweiligen Bereich und schließt den anderen
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

//Dark and Light Mode
const btn = document.getElementById("modeToggle");
const btn2 = document.getElementById("modeToggle2");
const themeIcons = document.querySelectorAll(".icon");
const themeIcons2 = document.querySelectorAll(".Icon");
const themeIcons3 = document.querySelectorAll(".arrow",);
const themeIcons4 = document.querySelectorAll(".Vrrow");
const themeIcons5 = document.querySelectorAll(".Arrow");
const currentTheme = localStorage.getItem("theme");
if (currentTheme === "dark"){
    setDarkMode();
}

btn.addEventListener("click", function () {
    setTheme();
});
btn2.addEventListener("click", function () {
    setTheme();
});

function setTheme(){
    let currentTheme= document.body.getAttribute("theme");
    if (currentTheme === "dark"){
        setLightMode();
    }else{
        setDarkMode();
    }
}

function setDarkMode(){
document.body.setAttribute("theme", "dark");
localStorage.setItem("theme", "dark");

themeIcons.forEach( (icons) => {
    icons.src = icons.getAttribute("src-dark");
});
    themeIcons2.forEach( (icons) => {
        icons.src = icons.getAttribute("src-dark");
    });
    themeIcons3.forEach( (icons) => {
        icons.src = icons.getAttribute("src-dark");
    });
    themeIcons4.forEach( (icons) => {
        icons.src = icons.getAttribute("src-dark");
    });
    themeIcons5.forEach( (icons) => {
        icons.src = icons.getAttribute("src-dark");
    });
}

function setLightMode(){
    document.body.removeAttribute("theme");
    localStorage.setItem("theme", "light");

    themeIcons.forEach((icons) => {
        icons.src = icons.getAttribute("src-light");
    });
    themeIcons2.forEach( (icons) => {
        icons.src = icons.getAttribute("src-light");
    });
    themeIcons3.forEach( (icons) => {
        icons.src = icons.getAttribute("src-light");
    });
    themeIcons4.forEach( (icons) => {
        icons.src = icons.getAttribute("src-light");
    });
    themeIcons5.forEach( (icons) => {
        icons.src = icons.getAttribute("src-light");
    });

}