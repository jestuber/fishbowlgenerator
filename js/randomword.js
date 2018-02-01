function randomWord(form) {
  $("#cards").html("")
  var numPlayers = $('#numPlayers').val();
  var numCards = $('#numCards').val();

  var numWords = numPlayers * numCards
  let remainder = 0
  if(numWords % 3 != 0){

    remainder = numWords % 3 
  }
  numWords = Math.floor(numWords / 3)

  let randomThings = _.sample(things, numWords + remainder)
  


  let randomWords = _.shuffle((_.sample(things, numWords + remainder)).concat(_.sample(places, numWords), _.sample(people, numWords)))
  
  randomWords.forEach((word, index)=>{
  $("#cards").append("<div class='card'>"+word+"</div>")
  })
}

