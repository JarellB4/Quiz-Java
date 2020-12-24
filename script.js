const Submiit = document.querySelector("#start-btn");
const questioionContainerElement = document. querySelector("question-container");
const Next = document.querySelector("#next-btn");
const time = document.querySelector("#time");
Submiit.addEventListener("click" , startQuiz);
var questions1 = document.getElementById("#question");
var answers1 = document.getElementById("answer-btn");
var secsLeft = 60;



var questions= [ {

 
    name: "What is 1+1?",
    answer:[
        
            {text:"2" , correct:true},
            {text:"32", correct:false}
         ]





}, 
{
 
 
    name: "What is 2=2?",
    answer:[
        
            {text:"4" , correct:true},
            {text:"33", correct:false}
         ]




} ,
{
 
 
    name: "What is 3+1?",
    answer:[
        
            {text:"5" , correct:true},
            {text:"32", correct:false}
         ]




}, 
]

setTime();


function setTime() {

var timerInterval = setInterval(function(){
    secsLeft--;
time.textContent=secsLeft;
if(secsLeft===0){
    clearInterval(timerInterval);
}
},1000);
}


function startQuiz() {
setTime();
Submiit.classList.add("hide");
questionContainerElement.classList.remove("hide");
if (Submiit.style.display === "none") {
    Submiit.style.display = "block";
  } else {
    Submiit.style.display = "none";
setNextQuestion();
}




}
function setNextQuestion() {
questions1.innerText=questions.name
questions.answer.forEach(answer => {
    var btn=document.createElement("button");
    btn.innerText=answer.text;
    btn.classList.add("btn");
if(answer.correct){
    btn.dataset.correct=answer.correct
}
btn.addEventListener("click", selectAnswer);
answerbtnelement
});
}

function showQuestions() {
questiomElement.innerText = questions.questions

}


function selectAnswer() {

}