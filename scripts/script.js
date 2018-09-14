const defaultSet ={
  question:["How much is 2+2",
  "what's the capital of Spain?"],
  anwser:["4","Madrid"]
}
var counter = 0
var objCounter = defaultSet.question.length
var qCounter = Math.floor(Math.random() * objCounter)
function divClick(){
  if(counter === 0){
    getQuestion()
    return counter++
} else if (counter === 1){
  getAnswer();
  return counter=0;
}
}
var cardHeader = document.getElementById('flaschard-header')
var cardContent = document.getElementById('flashcard-content')

function getQuestion(){
cardHeader.innerHTML ="Question"
cardContent.innerHTML = defaultSet.question[qCounter]

}

function getAnswer(){
  cardHeader.innerHTML ="Answer "
  cardContent.innerHTML =`The Answer i: ${defaultSet.anwser[qCounter]}.`;
}
