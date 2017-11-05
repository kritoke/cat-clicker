const $catContainerClass = $('.cat-container');
const $clickCountClass = $('.click-counts');

var catClicks = 0;

function clickCount() {
    return catClicks++;
}

function displayClicks() {
    $clickCountClass.html(catClicks);
}

$catContainerClass.on('click', 'img', function() {
    clickCount();
    displayClicks();
});