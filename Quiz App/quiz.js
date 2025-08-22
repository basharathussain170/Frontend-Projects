const questions = [
  {
    question: "Which tag is used to give caption to a figure?",
    answers: [
      { text: "<caption>", correct: false },
      { text: "<figcaption>", correct: true },
      { text: "<legend>", correct: false },
      { text: "<label>", correct: false }
    ]
  },
  {
    question: "Which attribute is used to load images only when needed?",
    answers: [
      { text: "async", correct: false },
      { text: "loading", correct: true },
      { text: "defer", correct: false },
      { text: "lazyload", correct: false }
    ]
  },
  {
    question: "Which tag is used for the largest heading in HTML?",
    answers: [
      { text: "<h1>", correct: true },
      { text: "<h6>", correct: false },
      { text: "<head>", correct: false },
      { text: "<title>", correct: false }
    ]
  },
  {
    question: "Which CSS property is used to change text color?",
    answers: [
      { text: "background-color", correct: false },
      { text: "font-color", correct: false },
      { text: "color", correct: true },
      { text: "text-color", correct: false }
    ]
  },
  {
    question: "Which HTML tag is used to create a line break?",
    answers: [
      { text: "<break>", correct: false },
      { text: "<lb>", correct: false },
      { text: "<br>", correct: true },
      { text: "<hr>", correct: false }
    ]
  }, {
    question: "Which protocol is used for secure communication over the web?",
    answers: [
      { text: "HTTP", correct: false },
      { text: "HTTPS", correct: true },
      { text: "FTP", correct: false },
      { text: "SMTP", correct: false }
    ]
  },
  {
    question: "Which tag is used to create a hyperlink in HTML?",
    answers: [
      { text: "<link>", correct: false },
      { text: "<a>", correct: true },
      { text: "<href>", correct: false },
      { text: "<hyper>", correct: false }
    ]
  },
  {
    question: "Which attribute is used in HTML to open a link in a new tab?",
    answers: [
      { text: "href='_blank'", correct: false },
      { text: "target='_blank'", correct: true },
      { text: "newtab='true'", correct: false },
      { text: "tab='new'", correct: false }
    ]
  },
  {
    question: "Which CSS property is used to change text color?",
    answers: [
      { text: "font-color", correct: false },
      { text: "text-color", correct: false },
      { text: "color", correct: true },
      { text: "background-color", correct: false }
    ]
  },
  {
    question: "Which company developed JavaScript?",
    answers: [
      { text: "Microsoft", correct: false },
      { text: "Netscape", correct: true },
      { text: "Oracle", correct: false },
      { text: "Sun Microsystems", correct: false }
    ]
  }
];

const questionElement=document.getElementById("question")
const answerButton=document.getElementById("answer-button")
const nextButton=document.getElementById("next-btn")


let currentQuestionIndex=0;
let score=0;

function startQuiz(){
  currentQuestionIndex=0;
  score=0;
  nextButton.innerHTML="Next"
  showQuestion();
}

function showQuestion(){

  //for remove previous question 
  resetState();

  let currentQuestion=questions[currentQuestionIndex]
  let questionNo=currentQuestionIndex+1;
  // console.log(questionNo)

  questionElement.innerHTML=questionNo + ". " + currentQuestion.question


  currentQuestion.answers.forEach((answer)=>{
    const button=document.createElement('button');
    button.classList.add("btn");
    button.textContent=answer.text
    // console.log(answer.text)
    answerButton.append(button)


    //use to set only true value inside the button in HTML
    if(answer.correct){
      button.dataset.correct=answer.correct
      // console.log(button)
    }
  
    button.addEventListener("click",selectAnswer);
  })
}


//function defined for remove previous question
function resetState(){
  nextButton.style.display="none"
  while(answerButton.firstChild){
    answerButton.firstChild.remove()
  }
}

function selectAnswer(e){
  const selectedBtn=e.target;
  const isCorrect=selectedBtn.dataset.correct==="true";
  if(isCorrect){
    selectedBtn.classList.add("correct")
    score++
  }else{
    selectedBtn.classList.add("incorrect")
  }

  for(let button of answerButton.children){
    if(button.dataset.correct==="true"){
      button.classList.add("correct")
    }
    button.disabled=true;
  }
  nextButton.style.display="block"
}


function showScore(){
  resetState()
  questionElement.innerHTML=`You scored ${score} out of ${questions.length}!`
  nextButton.innerHTML="Restart"
  nextButton.style.display="block"
}

function handleNextButton(){
  currentQuestionIndex++;
  if(currentQuestionIndex<questions.length){
    showQuestion();
  }else{
    showScore();
  }
}

nextButton.addEventListener("click",()=>{
  if(currentQuestionIndex<questions.length){
    handleNextButton();
  }else{
    startQuiz();
  }
})


startQuiz()


