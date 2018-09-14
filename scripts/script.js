var activeSet={};
var availableSets=[
{question:["How to create an array?", "What will the code comsole.log('Hello world') do when run on console?","What is the difference between a const and a let?"],
answer:["You use [ ] to create an array.", "It will give a Reference error because console was spelt as 'comsole'", "You can't set a new value to const"]},
{question:["FILL HERE WITH DUTCH STUFF"],
answer:["FILL HERE WITH DUTCH ANSWERS"]},{question:["What's the capital of Luxemborg?","What's the capital of Spain?", "What's the capital of China?"], answer:["Luxembor!","Madrid!","Pequim!"]}
]




var counter = 0
var objCounter = function(){
if(qCounter = Math.floor(Math.random() * objCounter) === qCounter = Math.floor(Math.random() * objCounter)){
  qCounter = Math.floor(Math.random() * objCounter);
} else {
  qCounter = Math.floor(Math.random() * objCounter)}
}
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

function prefillSet(){
  if(event.target.id === "set-item-1"){
    activeSet = availableSets[0];
} else if(event.target.id === "set-item-2") {
  activeSet = availableSets[1];
} else if (event.target.id ==="set-item-3"){
  activeSet = availableSets[2];
}

}

function getQuestion(){
cardHeader.innerHTML ="Question"
cardContent.innerHTML = activeSet.question[qCounter]

}

function getAnswer(){
  cardHeader.innerHTML ="Answer "
  cardContent.innerHTML =`The Answer i: ${activeSet.anwser[qCounter]}.`;
  qCounter = Math.floor(Math.random() * objCounter)
}

function prefill() {
  if(event)


  activeSet = set
}
