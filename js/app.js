const $catContainerClass = $('.cat-container');
var cats = []; // array to store all the cats

class Cat {
    constructor(name, image) {
        var $clickCountClass = $(`'.${this.name}-click-counts'`);
        this.name = name;
        this.image = image;
        this.clicks = 0;
    }

    incrementClick() {
        return clicks++;
    }

    displayCat() {
        let catHTML = '';
        let imgHTML = `<img src="${this.image}" alt="Click on Photo of ${this.name} to Increment Clicks">`;
        let captionHTML = `<figcaption><p>Name: ${this.name}</p>
        <p>Number of Clicks: <span class="${this.name}-click-counts">${this.clicks}</span></p>
        </figcaption>`;
    }

    updateClicks() {
        $clickCountClass.html(clicks);
    }
}

cats.push(new Cat('bob', 'img/catphoto1.jpg'));

$catContainerClass.on('click', 'img', function() {


});