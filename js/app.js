const $catContainerClass = $('.cat-container');
var cats = []; // array to store all the cats

class Cat {
    constructor(name, image) {
        var clickCountClass = `.${name}-click-counts`
        this.name = name;
        this.image = image;
        this.clicks = 0;
        cats.push(this);
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
        $catContainerClass.append(imgHTML + captionHTML);
    }

    updateClicks() {
        $(clickCountClass).html(clicks);
    }
}

new Cat('bob', 'img/catphoto.jpg');
cats.forEach(function(cat) {
    cat.displayCat();
});

$catContainerClass.on('click', 'img', function() {
    currCat = this;
    currCat.incrementClick;
    currCat.updateClicks();
});