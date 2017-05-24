app.controller('MainController',
  ['$scope', function($scope){
    $scope.jedi = [{
      quote: 'May the force be with you.',
      master: 'Yoda',
      image: 'img/yoda.png'
    },
    {
      quote: 'Use the force!',
      master: 'Windu',
      image: 'img/mace-windu.png'
    },
    {
      quote: 'The force lives in everywhere!',
      master: 'Qui Gon Jin',
      image: 'img/qui-gon-jin.png'
    },
    {
      quote: 'Have faith in the force!',
      master: 'Obi Wan Kenobi',
      image: 'img/obi-wan-kenobi.png'
    }
  ];
  }]);
