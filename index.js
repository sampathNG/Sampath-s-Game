var readlineSync = require("readline-sync")
var username = readlineSync.question("whats ur name")
var score = 0

console.log("welcome "+username," to Sampath`s game`")

function play(question,answer) {
  var useranswer = readlineSync.question(question)
  if (useranswer === answer){
    score ++
    console.log("RIGHT",score)
  
  } else {
    score = score - 1;
    console.log("Dumb ass u r WRONG ur score ",score)
  }
}

play("whats Sampath`s fav dish`","aloo kurma")
play("where does Sampath live","dharmasala")
play("whats sampath`s fav game","sprinting")
play("what`s sampath`s fav telugu movie","businessman")
play("what's sampath's fav colour","blue")
play("what's sampath's lover's name","physics")
play("what's sampath's fav book","jnana yogi")
play("who is sampath's fav hero","allu arjun")
play("what is sampath's fav city","kashi")
play("who is sampath's fav cricketer","dhoni")