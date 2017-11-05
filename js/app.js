const catContainer = document.querySelector('#cat-container');
var catClicks = 0;

function clickCount() {
    catClicks++;
}

function displayClicks() {

}

var elem = document.getElementById('catPhoto');
elem.addEventListener('click', function() {
    clickCount();
    displayClicks();
}, false);