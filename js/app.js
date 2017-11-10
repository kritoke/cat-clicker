function model() {
    var cats = [], // array to store all the cats
        currCat = null;

    class Cat {
        constructor(name, image) {

            this.name = name;
            this.image = image;
            this.clicks = 0;
        }
    }

    // create five cats
    new Cat('bob', 'img/catphoto.jpg').push(cats);
    new Cat('jorge', 'img/catphoto2.jpg').push(cats);
    new Cat('phil', 'img/catphoto3.jpg').push(cats);
    new Cat('mews', 'img/catphoto4.jpg').push(cats);
    new Cat('eric', 'img/catphoto5.jpg').push(cats);
}

var catView = {
    init: function() {
        const $catContainerClass = $('.cat-container');
        const $clickCountClass = `.${currCat.name}-click-counts`;
        var currCat = octopus.getCurrCat();
    },

    updateClicks: function() {
        $(this.clickCountClass).html(this.clicks);
    },

    render: function() {
        var catHTML = '<p>Click the cat: </p>';
        var imgHTML = `<img src="${this.image}" alt="Click on Photo of ${this.name} to Increment Clicks">`;
        var captionHTML = `<figcaption><p>Name: ${this.name}</p>
        <p>Number of Clicks: <span class="${this.name}-click-counts">${this.clicks}</span></p>
        </figcaption>`;
        $catClickerClass.html(catHTML + imgHTML + captionHTML);

        // check if cat image is clicked on, increment counter if clicked
        $catContainerClass.on('click', 'img', function() {
            cats.forEach(function(cat) {
                if (currCat.image === cat.image) {
                    octopus.incrementClick();
                    this.updateClicks();
                }
            });
        });
    }
}

var catPickerView = {
    init: function() {
        const $catPickerClass = $('.cat-picker');
        const $catClickerClass = $('.cat-clicker');

    },

    catPickerDisplay: function() {
        var catHTML = '<p>The following are the available cats, click to make one show up: </p>';
        $catPickerClass.append(catHTML);

        cats.forEach(function(cat) {
            $catPickerClass.append(`<div class="${cat.name}">${cat.name}</div>`);
        });

    },

    render: function() {
        var cats = octopus.getCats();

        // check if a cat name is clicked on
        $catPickerClass.on('click', 'div', function() {
            var currClass = $(this).attr('class');
            cats.forEach(function(cat) {
                if (currClass === cat.name) {
                    cat.displayCat();
                }
            })
        });


    }
}

var octopus = {
    init: function() {
        model.currCat = model.cats[0];

        // display cat list for selecting a cat image to click
        catPickerView.catPickerDisplay();
    },

    getCurrCat: function() {
        return model.currCat;
    },

    getCats: function() {
        return model.cats;
    },

    setCurrCat: function(cat) {
        model.currCat = cat;
    },

    incrementClick: function() {
        model.currCat.clicks++;
        catView.render();
    }
}


octopus();