function randomWord(form) {
  $("#cards").html("")
  var numPlayers = form.numPlayers.value;
  var numCards = form.numCards.value;

  var numWords = numPlayers * numCards
  var result = ""
  var words = vegetables.concat(vehicles, fruit, clothes, animals)
  let randomWords = _.sample(words, numWords)
  randomWords.forEach((word, index)=>{
    $("#cards").append("<div class='card'>"+word+"</div>")
  })
}

