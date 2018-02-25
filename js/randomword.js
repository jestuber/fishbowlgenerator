function randomWord(form) {
  $("#cards").html("")
  var numPlayers = $('#numPlayers').val();
  var numCards = $('#numCards').val();
  var diff = $('#diff').find(":selected").text();

  var numWords = numPlayers * numCards
  let remainder = 0
  if(numWords % 2 != 0){
    remainder = numWords % 2
  }
  numWordsHalf = Math.floor(numWords / 2)

  if (diff == "Easy") {
      var randomWords = _.sample(easy, numWords + remainder)
  } else if (diff == "Medium"){
      var randomWords = _.shuffle((_.sample(easy, numWordsHalf + remainder)).concat(_.sample(hard, numWordsHalf)))
  } else {
      var randomWords = _.sample(hard, numWords + remainder)
  }

  randomWords.forEach((word, index)=>{
  $("#cards").append("<div class='card'>"+word+"</div>")
  })
}

