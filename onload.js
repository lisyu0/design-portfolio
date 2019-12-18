// Taken from https://flaviocopes.com/javascript-sleep/
// Promise for sleep timeout
const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

// GIVE ELEMENTS "FADE-IN" ON LOAD
window.onload = function() {
    // SHOW PAGE ONLY AFTER LOAD
    this.document.getElementsByTagName("body")[0].className += " load";

    // GIVE SPECIFIC FADE-IN ELEMENTS ONLOAD ANIMATION
    const elts = document.getElementsByClassName("load-fadein");
    let counter = 0
    this.Array.from(elts).forEach(
        (elt) => {
            elt.style.transitionDelay = String(0.1 * counter) + "s";
            elt.className += " load";
            counter += 1;
        }
    );
}
