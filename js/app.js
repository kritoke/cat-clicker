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
        $catContainerClass = $('.cat-container');
        $catClickerClass = $('.cat-clicker');

        // check if cat image is clicked on, increment counter if clicked
        $catContainerClass.on('click', 'img', function() {
            octopus.incrementClick();
        });

        this.render();
    },

    updateClicks: function() {

        $($clickCountClass).html(currCat.clicks);
    },

    render: function() {
        currCat = octopus.getCurrCat();
        $clickCountClass = `.${currCat.name}-click-counts`;
        this.updateClicks();
        var catHTML = '<p>Click the cat: </p>';
        var imgHTML = `<img src="${currCat.image}" alt="Click on Photo of ${currCat.name} to Increment Clicks">`;
        var captionHTML = `<figcaption><p>Name: ${currCat.name}</p>
        <p>Number of Clicks: <span class="${currCat.name}-click-counts">${currCat.clicks}</span></p>
        </figcaption>`;
        $catClickerClass.html(catHTML + imgHTML + captionHTML);
    }
};

var catPickerView = {
    init: function() {
        $catPickerClass = $('.cat-picker');
        this.render();
    },

    catPickerDisplay: function() {
        var catHTML = '<p>The following are the available cats, click to make one show up: </p>';
        $catPickerClass.html(catHTML);

        octopus.getCats().forEach(function(cat) {
            this.$catPickerClass.append(`<div class="${cat.name}">${cat.name}</div>`);
        });
    },

    render: function() {
        var cats = octopus.getCats();
        this.catPickerDisplay();

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

var catAdminView = {
    init: function() {
        currCat = octopus.getCurrCat();
        currAdminView = this;
        $catAdminClass = $('.cat-admin');
        $catAdminClass.on('click', '.admin-button', function() {
            $('.cat-admin-editor').toggleClass('hidden');
            $('input[name=cat-name]').val(currCat.name);
            $('input[name=cat-url]').val(currCat.image);
            $('input[name=cat-clicks').val(currCat.clicks);
        });
        $('.cat-admin-editor').on('click', '.save-button', function() {
            currAdminView.render();
            $('.cat-admin-editor').toggleClass('hidden');
        })
        $('.cat-admin-editor').on('click', '.cancel-button', function() {
            $('.cat-admin-editor').toggleClass('hidden');
        })
    },

    render: function() {
        currCat = octopus.getCurrCat();
        octopus.setCurrCat(currCat);
        currCat.name = $('input[name=cat-name]').val();
        currCat.image = $('input[name=cat-url]').val();
        currCat.clicks = $('input[name=cat-clicks').val();
        catPickerView.render();
        catView.render();
    }
}

var octopus = {
    init: function() {
        // set current cat to first in the list
        model.currCat = model.cats[0];

        // display cat list for selecting a cat image to click
        catPickerView.init();
        catAdminView.init();
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