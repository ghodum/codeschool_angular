(function() {
    var app = angular.module('store', []);

    app.controller('StoreController', function() {
        this.products = gems;
    });

    app.controller('PanelController', function() {
        this.tab = 1;

        this.selectTab = function(setTab) {
            this.tab = setTab;
        }

        this.isSelected = function(checkTab) {
            return this.tab === checkTab;
        }
    });

    app.controller('GalleryController', function() {
        this.current = 0;
        this.setCurrent = function(value) {
            this.current = value || 0;
        };
    });

    app.controller('ReviewController', function() {
        this.review = {};
        this.addReview = function(product) {
            this.review.createdOn = Date.now();
            product.reviews.push(this.review);
            this.review = {};
        };
    });

    var gems = [{
      name : 'Dodecahedron',
      price : 2.00,
      description : 'Lorem Ipsum...',
      canPurchase : true,
      soldOut : false,
      images : [
          'http://fc04.deviantart.net/fs70/f/2012/199/0/f/gem_png_by_doloresdevelde-d57p0lm.png',
          'http://fc07.deviantart.net/fs70/f/2012/199/2/a/gem_png_by_doloresdevelde-d57p0oz.png',
          'http://fc00.deviantart.net/fs70/f/2012/199/6/8/gem_png_by_doloresdevelde-d57p10s.png'
      ],
      reviews : [ {
        stars : 5,
        body : 'I love this product!',
        author : 'joe@thomas.com',
        createdOn : 1409530247200
      }, {
          stars : 1,
          body : 'This product sucks',
          author : 'tim@hater.com',
          createdOn : 1409530637200
      } ]
    }, {
      name : 'Pentagonal Gem',
      price : 5.95,
      description : 'Another Lorem Ipsum...',
      canPurchase : true,
      soldOut : false,
      images : [
          'http://fc00.deviantart.net/fs71/f/2012/199/3/0/gem_png_by_doloresdevelde-d57p0v4.png',
          'http://fc06.deviantart.net/fs71/f/2012/199/5/f/gem_png_by_doloresdevelde-d57oz0e.png',
          'http://fc07.deviantart.net/fs70/f/2012/199/6/8/gem_png_by_doloresdevelde-d57oz6u.png'
      ],
      reviews : [ {
            stars : 3,
            body : 'It\'s OK',
            author : 'frank@anyone.com',
          createdOn : 1409540647200
        }, {
            stars : 5,
            body : 'Great!!!!',
            author : 'john@doe.com',
          createdOn : 1409630647200
        } ]
    }];
})();
