const $catContainerClass = $('.cat-container');
const $clickCountClass = $('.click-counts');

class Cat {
    constructor(name, image, clicks) {
        this.name = name;
        this.image = image;
        this.clicks = clicks;
    }

    incrementClick() {
        return clicks++;
    }

    displayCat() {

    }

    updateClicks() {
        $clickCountClass.html(catClicks);
    }
}

$catContainerClass.on('click', 'img', function() {

});