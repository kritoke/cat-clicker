var model = {
    currCat: null,
    cats: [{
            name: 'bob',
            image: 'img/catphoto.jpg',
            clicks: 0
        },
        {
            name: 'jorge',
            image: 'img/catphoto2.jpg',
            clicks: 0
        },
        {
            name: 'phil',
            image: 'img/catphoto3.jpg',
            clicks: 0
        },
        {
            name: 'mews',
            image: 'img/catphoto4.jpg',
            clicks: 0
        },
        {
            name: 'eric',
            image: 'img/catphoto5.jpg',
            clicks: 0
        }
    ]
};

var catView = {
    init: function() {
        var currCat = octopus.getCurrCat();
        const $catContainerClass = $('.cat-container');
        const $catClickerClass = $('.cat-clicker');
        const $clickCountClass = `.${currCat.name}-click-counts`;

        // check if cat image is clicked on, increment counter if clicked
        $catContainerClass.on('click', 'img', function() {
            cats.forEach(function(cat) {
                if (currCat.image === cat.image) {
                    octopus.incrementClick();
                    $($clickCountClass).html(currCat.clicks);
                }
            });
        });
    },

    updateClicks: function() {
        $($clickCountClass).html(currCat.clicks);
    },

    render: function() {
        var catHTML = '<p>Click the cat: </p>';
        var imgHTML = `<img src="${this.image}" alt="Click on Photo of ${this.name} to Increment Clicks">`;
        var captionHTML = `<figcaption><p>Name: ${this.name}</p>
        <p>Number of Clicks: <span class="${this.name}-click-counts">${this.clicks}</span></p>
        </figcaption>`;
        $catClickerClass.html(catHTML + imgHTML + captionHTML);
    }
};

var catPickerView = {
    init: function() {
        $catPickerClass = $('.cat-picker');
        this.catPickerDisplay();
    },

    catPickerDisplay: function() {
        var catHTML = '<p>The following are the available cats, click to make one show up: </p>';
        $catPickerClass.append(catHTML);

        octopus.getCats().forEach(function(cat) {
            this.$catPickerClass.append(`<div class="${cat.name}">${cat.name}</div>`);
        });
    },

    render: function() {
        var cats = octopus.getCats();

        // check if a cat name is clicked on
        $catPickerClass.on('click', 'div', function() {
            var currClass = $(this).attr('class');
            cats.forEach(function(cat) {
                if (currClass === cat.name) {
                    octopus.setCurrCat(cat);
                    catView.render();
                }
            })
        });
    }
};

var octopus = {
    init: function() {
        // set current cat to first in the list
        model.currCat = model.cats[0];

        // display cat list for selecting a cat image to click
        catPickerView.init();
        catView.init();
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
};

octopus.init();