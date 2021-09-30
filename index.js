var readLineSync = require('readline-sync');
const chalk = require("chalk");

// hex code :- #66CDAA for mediumaquamarine
// hex code :- #00BFFF for deepskyblue
// red is the same chalk.red("text")

//input (take a value and store it in userName)
var userName=readLineSync.question("What is your name ?");

console.log(chalk.hex("#00BFFF")("Hello",userName+",","Welcome to the Star Wars quiz !"));

console.log(chalk.hex("#00BFFF")("Let's Begin with the Quiz shall we?"))

//global variable score
var score = 0;

//questions (objects) (key:value) and 
//questions list
var questions=[{
  question:"1) In The Force Awakens, which character has Darth Vader’s damaged mask? :-",
  answer:"Kylo Ren",
},{
  question:"2) While the Jedi use a number of crystal colors for their lightsabers, what color is preferred by the Sith? :-",
  answer:"Red",
},{
  question:"3) Where does Yoda live when he first trains Luke Skywalker? :-",
  answer:"Dagobah",
},{
  question:"4) While fighting his own father in the Cloud City, which hand does Luke Skywalker lose? :-",
  answer:"Right",
},{
  question:"5) What is Chewbacca’s weapon of choice? :-",
  answer:"Bowcaster",
},{
  question:"6) How many lightsaber blades does Darth Maul use? (answer in words):-",
  answer:"two",
},{
  question:"7) What color is the first light saber Rey uses? :-",
  answer:"Blue",
}]

//high scores
var highScores=[{
  name:"Mehul",
  score:7,
},{
  name:"Sumit",
  score:5,
}]
//play function
function play(question,answer) {
  userAns=readLineSync.question(question);
  if (userAns.toUpperCase()===answer.toUpperCase()){
    console.log(chalk.hex("#66CDAA")("Correct !"));
    score=score+1
  }else{
    console.log(chalk.red("Wrong !"));
    score=score-1
  }
  console.log("Score:",score)
  console.log(chalk.hex("#00BFFF")("==========================================="))
}

//for loop
for (i=0;i<questions.length;i=i+1) {
  var ques = questions[i].question
  var ans =  questions[i].answer
  play(ques,ans)
}

console.log(chalk.hex("#00BFFF")(userName,"your final score is :-",score));
if (score===highScores[0].score){
  console.log(chalk.hex("#00BFFF")("Congrats you have tied for the first place "));
  console.log(chalk.hex("#00BFFF")("Send me a screenshot of your replies on discord and I will update the highscores"));
}else if (score===highScores[1].score){
  console.log(chalk.hex("#00BFFF")("Congrats you have tied for the second place "));
  console.log(chalk.hex("#00BFFF")("Send me a screenshot of your replies on discord and I will update the highscores"));
}else{
  
}
console.log(chalk.hex("#00BFFF")("Thank you for playing :)"));