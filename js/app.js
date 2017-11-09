const $catContainerClass = $('.cat-container');
const $catPickerClass = $('.cat-picker');
var cats = []; // array to store all the cats

class Cat {
    constructor(name, image) {
        this.clickCountClass = `.${name}-click-counts`
        this.name = name;
        this.image = image;
        this.clicks = 0;
        cats.push(this);
    }

    incrementClick() {
        return this.clicks++;
    }

    displayCat() {
        var catHTML = '';
        var imgHTML = `<img src="${this.image}" alt="Click on Photo of ${this.name} to Increment Clicks">`;
        var captionHTML = `<figcaption><p>Name: ${this.name}</p>
        <p>Number of Clicks: <span class="${this.name}-click-counts">${this.clicks}</span></p>
        </figcaption>`;
        $catContainerClass.append(imgHTML + captionHTML);
    }

    updateClicks() {
        $(this.clickCountClass).html(this.clicks);
    }

}

new Cat('bob', 'img/catphoto.jpg');
new Cat('jorge', 'img/catphoto2.jpg');
new Cat('phil', 'img/catphoto3.jpg');
new Cat('mews', 'img/catphoto4.jpg');
new Cat('eric', 'img/catphoto5.jpg');

// cats.forEach(function(cat) {
//     cat.displayCat();
// });


function catPickerDisplay() {
    cats.forEach(function(cat) {
        $catPickerClass.append(`<div class="${cat.name}">${cat.name}</div>`);
    });
}

catPickerDisplay();

$catPickerClass.on('click', 'div', function() {
    var currClass = $(this).attr('class');
    cats.forEach(function(cat) {
        if (currClass === cat.name) {
            console.log(cat.name + ' is found');
        }
    })
});

$catContainerClass.on('click', 'img', function() {
    var currCat = this;
    cats.forEach(function(cat) {
        if ($(currCat).attr('src') === cat.image) {
            cat.incrementClick();
            cat.updateClicks();
        }
    });
});