function randomWord(form) {
    var numPlayers = form.numPlayers.value;
    var numCards = form.numCards.value;

    var words = [
        ,'alligator'
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
    var numWords = numPlayers * numCards
    var result = ""
    for (i = 0; i < numWords; i++) {
        var word = words[Math.floor(Math.random()*words.length)];
        result += ' ' + word + ' '
    }
    document.getElementById("result").innerHTML = result;
}

