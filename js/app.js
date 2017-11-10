const $catContainerClass = $('.cat-container');
const $catPickerClass = $('.cat-picker');
const $catClickerClass = $('.cat-clicker');

class Cat {
    constructor(name, image) {
        this.clickCountClass = `.${name}-click-counts`
        this.name = name;
        this.image = image;
        this.clicks = 0;
    }

    incrementClick() {
        return this.clicks++;
    }

    displayCat() {
        var catHTML = '<p>Click the cat: </p>';
        var imgHTML = `<img src="${this.image}" alt="Click on Photo of ${this.name} to Increment Clicks">`;
        var captionHTML = `<figcaption><p>Name: ${this.name}</p>
        <p>Number of Clicks: <span class="${this.name}-click-counts">${this.clicks}</span></p>
        </figcaption>`;
        $catClickerClass.html(catHTML + imgHTML + captionHTML);
    }

    updateClicks() {
        $(this.clickCountClass).html(this.clicks);
    }

}

function model() {
    var cats = []; // array to store all the cats
    // create five cats
    new Cat('bob', 'img/catphoto.jpg').push(cats);
    new Cat('jorge', 'img/catphoto2.jpg').push(cats);
    new Cat('phil', 'img/catphoto3.jpg').push(cats);
    new Cat('mews', 'img/catphoto4.jpg').push(cats);
    new Cat('eric', 'img/catphoto5.jpg').push(cats);
}

function octopus() {
    function catPickerDisplay() {
        var catHTML = '<p>The following are the available cats, click to make one show up: </p>';
        $catPickerClass.append(catHTML);

        cats.forEach(function(cat) {
            $catPickerClass.append(`<div class="${cat.name}">${cat.name}</div>`);
        });

    }

    function init() {
        // display cat list for selecting a cat image to click
        catPickerDisplay();
    }

    function catPickerDisplay() {
        var catHTML = '<p>The following are the available cats, click to make one show up: </p>';
        $catPickerClass.append(catHTML);

        cats.forEach(function(cat) {
            $catPickerClass.append(`<div class="${cat.name}">${cat.name}</div>`);
        });

    }

    // check if a cat name is clicked on
    $catPickerClass.on('click', 'div', function() {
        var currClass = $(this).attr('class');
        cats.forEach(function(cat) {
            if (currClass === cat.name) {
                cat.displayCat();
            }
        })
    });

    // check if cat image is clicked on, increment counter if clicked
    $catContainerClass.on('click', 'img', function() {
        var currCat = this;
        cats.forEach(function(cat) {
            if ($(currCat).attr('src') === cat.image) {
                cat.incrementClick();
                cat.updateClicks();
            }
        });
    });
}

octopus();