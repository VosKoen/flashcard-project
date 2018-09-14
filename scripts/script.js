var card = document.querySelector('.card');
card.addEventListener( 'click', function() {
  card.classList.toggle('is-flipped');
})

var activeSet={};

var availableSets = [];

var javascriptSet = {
question: ["How to create an array?",
 "What will the code comsole.log('Hello world') do when run on console?",
 "What is the difference between a const and a let?",
 "How many hands does a event listener have?",
 "Which browser was the first to support Javascript?",
 "Which browser was the second to support Javascript?"
 ],
 answer: ["You use [ ] to create an array.",
 "It will give a Reference error because console was spelt as 'comsole'",
 "You can't reassign a const",
 "0",
 "Netscape",
 "Internet Explorer"
 ]
};

var dutch ={
 question: ["Translate to dutch<br>Good morning",
 "Translate to dutch:<br>Thank you",
 "Translate to dutch:<br>Cross-eyed mother-in-law in Scheveningen",
 "Translate to dutch:<br>Laptop",
 "Translate to dutch:<br>Calculator",
 "Translate to dutch:<br>Airplane",
 "Translate to dutch:<br>One coffee please",
 ],
 answer: ["Goede morgen",
 "Dank je wel",
 "Schele schoonmoeder in Scheveningen",
 "Laptop",
 "Rekenmachine",
 "Vliegtuig",
 "Eén koffie alsjeblieft"
 ]
};

var capitals = {
 question: ["Capital of Portugal",
 "Capital of Belgium",
 "Capital of the province North-Holland",
 "Capital of France",
 "Capital of Saudi-Arabia",
 "Capital of Serbia",
 "Capital of Australia"
 ],
 answer: ["Lisbon",
 "Brussels",
 "Haarlem",
 "Paris",
 "Riyadh",
 "Belgrade",
 "Canberra",
 ]
};

availableSets.push(javascriptSet);
availableSets.push(dutch);
availableSets.push(capitals)

activeSet = availableSets[0];

var cardHeader = document.getElementById('flaschard-header')
var cardContent = document.getElementById('flashcard-content')
var qCounter;

function prefillSet(){

  cardHeader.innerHTML = '';
  cardContent.innerHTML = '>> Now click me! <<';
  counter=0;

  if(event.target.id === "set-item-0"){
    activeSet = availableSets[0];
    console.log(activeSet)

} else if(event.target.id === "set-item-1") {
  activeSet = availableSets[1];
  console.log("set 1")

} else if (event.target.id ==="set-item-2"){
  activeSet = availableSets[2];
  console.log("set 2")
}

}

var counter = 0

function divClick(){
  if(counter === 0){
    getQuestion()
    return counter++
} else if (counter === 1){
  getAnswer();
  return counter=0;
}
}


function getQuestion(){
  var oldCount = qCounter;
  var objCounter = activeSet.question.length
  qCounter = Math.floor(Math.random() * objCounter);

  while(qCounter === oldCount) {
    qCounter = Math.floor(Math.random() * objCounter);
  }
cardHeader.innerHTML ="Question"
cardContent.innerHTML = activeSet.question[qCounter]

}

function getAnswer(){
  cardHeader.innerHTML ="Answer "
  cardContent.innerHTML =`The Answer: ${activeSet.answer[qCounter]}.`;
}

function prefill() {
  if(event)


  activeSet = set
}
