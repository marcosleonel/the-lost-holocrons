app.controller('MainController',
  ['$scope', function($scope){
       $scope.msg = {
         quote: '',
         master: '',
         image: ''
       };


  //Here is the data stored in the holocron
  const jedi = [{
    quote: ['Train yourself to let go of everything you fear to lose.',
            'Fear is the path to the dark side. Fear leads to anger. Anger leads to hate. Hate leads to suffering.',
            'Death is a natural part of life. Rejoice for those around you who transform into the Force. Mourn them do not. Miss them do not. Attachment leads to jealously. The shadow of greed, that is.',
            'Always pass on what you have learned.',
            'You will know (the good from the bad) when you are calm, at peace. Passive. A Jedi uses the Force for knowledge and defense, never for attack.',
            'Yes, a Jedi’s strength flows from the Force. But beware of the dark side. Anger, fear, aggression; the dark side of the Force are they. Easily they flow, quick to join you in a fight. If once you start down the dark path, forever will it dominate your destiny, consume you it will, as it did Obi-Wan’s apprentice.',
            'PATIENCE YOU MUST HAVE my young padawan.',
            'Feel the force!',
            'You must unlearn what you have learned.',
            'In a dark place we find ourselves, and a little more knowledge lights our way.',
            'When you look at the dark side, careful you must be. For the dark side looks back.',
            'Through the Force, things you will see. Other places. The future…the past. Old friends long gone.',
            'Truly wonderful the mind of a child is.',
            'The fear of loss is a path to the Dark Side.',
            'A Jedi must have the deepest commitment, the most serious mind.',
            'Do or do not. There is no try.',
            'You will find only what you bring in.',
            'May the Force be with you.',
            'Size matters not. Look at me. Judge me by my size, do you? Hmm? Hmm. And well you should not. For my ally is the Force, and a powerful ally it is. Life creates it, makes it grow. Its energy surrounds us and binds us. Luminous beings are we, not this crude matter. You must feel the Force around you; here, between you, me, the tree, the rock, everywhere, yes. Even between the land and the ship.',
            'Ohhh. Great warrior. Wars not make one great.',
            'Difficult to see. Always in motion is the future..',
            'Named must your fear be before banish it you can.',
            'Much to learn you still have, my old padawan... This is just the beginning!',
            'To answer power with power, the Jedi way this is not. In this war, a danger there is, of losing who we are.',
            'The dark side clouds everything. Impossible to see the light, the future is.',
            'To be Jedi is to face the truth, and choose. Give off light or darkness, Padawan. Be a candle or the night.',
            'On many long journeys have I gone. And waited, too, for others to return from journeys of their own. Some return; some are broken; some come back so different only their names remain.',
            'Hmm. In the end, cowards are those who follow the dark side.'],
    master: 'Yoda',
    image: 'img/holocron-yoda.png'
  },
  {
    quote: ['Be mindful of your feelings.',
            'May the force be with you.',
            'May the force be with us all.',
            'The oppression of the Sith will never return!',
            ' We\'re keepers of the peace, not soldiers.',
            'This disturbance in the Force is making it hard to get a sense of things.',
            'I respect your traditions and your ancestors, but... we cannot allow the destruction of an innocent life form.'],
    master: 'Windu',
    image: 'img/holocron-mace-windu.png'
  },
  {
    quote: ['The force lives in everywhere!',
            'The ability to speak does not make you intelligent.',
            'Your focus determines your reality.',
            'Remember, concentrate on the moment. Feel, don\'t think, use your instincts.',
            'Your eyes can deceive you; don\'t trust them.',
            'There\'s always a bigger fish.'],
    master: 'Qui Gon Jin',
    image: 'img/holocron-qui-gon-jin.png'
  },
  {
    quote: ['Only a Sith Lord deals in absolutes.',
            'Many of the truths that we cling to depend on our point of view.',
            'Who\'s more foolish? The fool or the fool who follows him?',
            'In my experience, there is no such thing as luck.',
            'The Force will be with you always.',
            'Strike me down and I will become more powerful than you could possibly imagine.',
            'Be mindful of your thoughts. They can betray you.'],
    master: 'Obi Wan Kenobi',
    image: 'img/holocron-obi-wan-kenobi.png'
  }
  ];

  const viewMsg = $scope.msg;
  const quoteContainer = document.querySelector(".holocron--msg-quote");
  const masterContainer = document.querySelector(".holocron--msg-master");
  const hologramContainer = document.querySelector(".holocron-projection");

  var jediCouncil = jedi.length;

  //Fucntion to sort the holocron message and change the view
  $scope.changeQuote = function() {

    var choosenMaster = Math.floor(Math.random() * (jediCouncil - 1));
    var wisdom = jedi[choosenMaster].quote.length;
    var choosenQuote = Math.floor(Math.random() * (wisdom -1));
    var revealQuote = jedi[choosenMaster].quote[choosenQuote];
    var revealMaster = jedi[choosenMaster].master;
    var revealImage = jedi[choosenMaster].image;

    viewMsg.quote = revealQuote;
    viewMsg.master = revealMaster;
    viewMsg.image = revealImage;

    return;

  }

  }]);
