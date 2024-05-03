app.controller('MainController', ['$scope', function($scope) { 
    $scope.title = 'Top Sellers in Books to Buy';
    $scope.promo = 'You dont want to miss these deals'; 
    $scope.product = [ 
        { 
          name: 'The Book of Trees', 
          price: 19, 
          pubdate: new Date('2014', '03', '08'), 
          cover: 'img/the-book-of-trees.jpg',
          likes: 0,
          dislikes: 0
        }, 
        { 
          name: 'Program or be Programmed', 
          price: 8, 
          pubdate: new Date('2013', '08', '01'), 
          cover: 'img/program-or-be-programmed.jpg', 
          likes: 0,
          dislikes: 0
        },
        {
            name: "Sapiens: A Brief History of Humankind",
            price: 15,
            pubdate: new Date('2015', '02', '10'),
            cover: "https://images-na.ssl-images-amazon.com/images/I/51Eg2Kri%2BpL._SX329_BO1,204,203,200_.jpg",
            likes: 0,
            dislikes: 0 
          },
          {
            name: "The Subtle Art of Not Giving a F*ck: A Counterintuitive Approach to Living a Good Life",
            price: 17,
            pubdate: new Date('2016', '09', '13'),
            cover: "https://images-na.ssl-images-amazon.com/images/I/51ejXdN3lxL._SX331_BO1,204,203,200_.jpg",
            likes: 0,
            dislikes: 0
          }
      ] ;
    $scope.plusOne = function(index) { 
        $scope.products[index].likes += 1; 
      }; 
    $scope.minusOne = function(index) { 
        $scope.products[index].dislikes += 1; 
      };
  }]);
  