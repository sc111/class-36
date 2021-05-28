class Form{
    constructor(){

    }
    display(){
var title = createElement('h2')
title.html("aventaRace")
title.position(500,150);
var input = createInput("name");
input.position(500,250);
var button = createButton("play")
button.position(600,400)
var greeting =createElement('h3');

button.mousePressed(function(){
    input.hide()
    button.hide()
    var name = input.value()
    playerCount+=1;
    player.update(name);
   player.updateCount(playerCount);
   greeting.html("Hi!!!!!!!!!!!!! "+name)
   greeting.position(500,300);
})
    }
}