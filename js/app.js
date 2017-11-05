const $catContainerClass = $('#cat-container');
const $clickCountClass = $('#click-counts');

var catClicks = 0;

function clickCount() {
    catClicks++;
}

function displayClicks() {
    $clickCountClass.innerHTML = catClicks;
}

$catContainerClass.on('click', 'img', function() {
    clickCount();
    displayClicks();
}, false);