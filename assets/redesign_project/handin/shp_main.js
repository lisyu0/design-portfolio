window.addEventListener('resize', resetMenu);

let isMobileVers = false;

function toggleMenu() {
    const menuLinks = document.getElementsByTagName("nav")[0];
    const toggleButton = document.getElementById("toggle-menu-button");
    if (menuLinks.style.display != "flex") {
        console.log("showing menu");
        menuLinks.style.display = "flex";
        toggleButton.innerHTML = '<i class="fas fa-times"></i>';
    } else {
        menuLinks.style.display = "none";
        toggleButton.innerHTML = '<i class="fas fa-bars"></i>';
    }
}

/* Used to reset hamburger menu on page resize */
function resetMenu() {
    if (window.innerWidth >= 800 && isMobileVers == true) {
        isMobileVers = false;
        document.getElementsByTagName("nav")[0].style.display = "flex";
    } else if (isMobileVerse == false) {
        isMobileVers = true;
        document.getElementById("toggle-menu-button").innerHTML = '<i class="fas fa-bars"></i>';
    }
}