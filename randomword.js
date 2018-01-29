var words = [
    'alligator'
    ,'ant'
    ,'bear'
    ,'bee'
    ,'bird'
    ,'camel'
    ,'cat'
    ,'cheetah'
    ,'chicken'
    ,'chimpanzee'
    ,'cow'
    ,'crocodile'
    ,'deer'
    ,'dog'
    ,'dolphin'
    ,'duck'
    ,'eagle'
    ,'elephant'
    ,'fish'
    ,'fly'
    ,'fox'
    ,'frog'
    ,'giraffe'
    ,'goat'
    ,'goldfish'
    ,'hamster'
    ,'hippopotamus'
    ,'horse'
    ,'kangaroo'
    ,'kitten'
    ,'lion'
    ,'lobster'
    ,'monkey'
    ,'octopus'
    ,'owl'
    ,'panda'
    ,'pig'
    ,'puppy'
    ,'rabbit'
]
function randomWord(form) {
  $("#cards").html("")
  var numPlayers = form.numPlayers.value;
  var numCards = form.numCards.value;

  var numWords = numPlayers * numCards
  var result = ""
  let randomWords = _.sample(words, numWords)
  randomWords.forEach((word, index)=>{
    $("#cards").append("<div class='card'>"+word+"</div>")
  })
}

