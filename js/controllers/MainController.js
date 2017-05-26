app.controller('MainController',
  ['$scope', function($scope){
    $scope.jedi = [{
      quote: ['Train yourself to let go of everything you fear to lose.',
              'Fear is the path to the dark side. Fear leads to anger. Anger leads to hate. Hate leads to suffering.',
              'Death is a natural part of life. Rejoice for those around you who transform into the Force. Mourn them do not. Miss them do not. Attachment leads to jealously. The shadow of greed, that is.',
              'Always pass on what you have learned.',
              'You will know (the good from the bad) when you are calm, at peace. Passive. A Jedi uses the Force for knowledge and defense, never for attack.',
              'Yes, a Jedi’s strength flows from the Force. But beware of the dark side. Anger, fear, aggression; the dark side of the Force are they. Easily they flow, quick to join you in a fight. If once you start down the dark path, forever will it dominate your destiny, consume you it will, as it did Obi-Wan’s apprentice.',
              'PATIENCE YOU MUST HAVE my young padawan.',
              'Feel the force!'],
      master: 'Yoda',
      image: 'img/yoda.png'
    },
    {
      quote:
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
      quote: 'Only a Sith Lord deals in absolutes.',
      master: 'Obi Wan Kenobi',
      image: 'img/obi-wan-kenobi.png'
    }
  ];
  }]);
