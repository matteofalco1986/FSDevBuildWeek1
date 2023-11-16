//funzioni pagina due scritte da Massimo e Ramona 

const print = (...args) => {
  console.log(...args);
}



//array di oggetti di questiti
const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: [
      "Ice Cream Sandwich",
      "Jelly Bean",
      "Marshmallow",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];

// VARIABILI GLOBALI
let rightAnswersCounter = 0; //  Contatore risposte corrette
let wrongAnswersCounter = 0; //  Contatore risposte sbagliate
let questionsCounter = 0; //  Contatore domande
const timerCounter = 10;
let userAnswer = '';  //  Risposta utente
let rightAnswer = ''; //  Risposta corretta
const numberOfQuestions = 4; // Numero domande

// METHA

const calcoloPercentuale = (risposte, domande) => {
  const correct = risposte / 10 /* percentuale risposte corrette */
  const wrong = (domande - risposte) / 10 /* percentuale risposte sbagliate */

  return {
    correct,
    wrong
  }
}

const mexNelCerchio = (risposte) => {
  if (risposte > 5) { /* se la soglia è maggiore a la metà delle domande allora l'esame è superato */
    const messaggio = document.querySelector('#circle h4')
    messaggio.innerHTML = 'Congratulation! <span>You passed the exam.<span>'
  } else { /* nel caso contrario il messagio sarà che l'esame non è stato superato */
    const messaggio = document.querySelector('#circle h4')
    messaggio.innerHTML = "Test Fail <span>You didn't passed the exam.<span>"
  }
}

// Ritorna true fintanto che il timer è maggiore di 0. Altrimenti ritorna falso.


// Ritorna la domanda corrente e la inietta nell'HTML
const showCurrentQuestion = (currentQuestion) => {
  const quest = document.getElementById("quest")
  const countQuest = document.querySelector('#countQuestion span')
  const thisQuestion = questions[currentQuestion].question // questa costante prende il valore della domanda attuale
  quest.innerHTML = thisQuestion // mostro la domanda attuale nell'interfaccia
  return thisQuestion;
}

// Mostra i risultati e nasconde il questionario
const showResults = () => {
  let toHide = document.getElementById("pageTwo");
  toHide.classList.add("hidePage");
  let toDisplay = document.getElementById("pageThree");
  toDisplay.classList.remove("hidePage");
  let timer = document.querySelector("#timer p");
  timer.classList.add("hideContainer");
}

// Inietta le risposte nell'HTML
const injectAnswers = (answersArray) => {
  let answersContainers = document.getElementsByClassName("answer");
  for (let i = 0; i < answersArray.length; i++) {
    answersContainers[i].innerHTML = answersArray[i];  
  }
}

// Inietta le risposte
const injectQuestionNumber = (index) => {
  questionNumber = document.getElementById("questionNumber");
  questionNumber.innerText = index;
}

//funzione che aggiunga la classe select alla risposta selezionata e mi ritorni la risposta selezionata
const addSelectClass = () => {
  // Seleziona tutti gli elementi con la classe "answer"
  //PS: questa costante per un miglio funzionamento puo essere dichiarata fuori dalla funzione ed essere passata come argomento in questa funzione
  const answers = document.querySelectorAll('.answerContainer')

  // Aggiungi un listener di clic a ciascuna risposta
  for (let i = 0; i < answers.length; i++){
      answers[i].addEventListener('click', function () {
      // Rimuovi la classe 'select' da tutte le risposte
      for (let j = 0; j < answers.length; j++) {
          answers[j].classList.remove('select')
      }

      // Aggiungi la classe 'select' solo alla risposta cliccata
      this.classList.add('select');
    })
  }
}

//funzione che ritorni la risposta corretta della domanda corrente
const getCorrectAnswer = (currentQuestion) => {
  // Verifica se l'indice fornito è valido
  if (currentQuestion >= 0 && currentQuestion < questions.length){
      // Estrai la domanda corrispondente all'indice fornito
      const selectedQuestion = questions[currentQuestion]

      // Restituisci la risposta corretta della domanda selezionata
      return selectedQuestion.correct_answer
  }else{
      // Restituisci un messaggio di errore se l'indice non è valido
      return "Indice non valido"
  }
}

const getWrongAnswers = (index) => {
  // Verifica se l'indice fornito è valido
  if (index >= 0 && index < questions.length){
      // Estrai le risposte corrispondenti all'indice fornito
      const wrongAnswers = questions[index];

      // Restituisci le risposte incorrette della domanda selezionata
      return wrongAnswers.incorrect_answers;
  }else{
      // Restituisci un messaggio di errore se l'indice non è valido
      return "Indice non valido"
  }
}

// Ritorna un array con tutte le risposte
const setAllAnswers = (rightAnwser, wrongAnswers) => {
  answersArray = [];
  answersArray.push(rightAnwser);
  for (answer of wrongAnswers){
    answersArray.push(answer);
  }
  return answersArray;
}

const resetSelectClasses = (className) => {
  document.getElementsByClassName(className)[0].classList.remove(className);  
}

const displayContainersWithText = () => {
  for (element of document.getElementsByClassName("answer")){
    if (element.innerText === ""){
      element.parentNode.classList.add("hideContainer");
    } else {
      element.parentNode.classList.remove("hideContainer");
    }
  }
}

const injectToResults = (rightAnswer, wrongAnswer, numberOfQuestions) => {
  let rightAnswers = document.getElementById("rightAnswers");
  let wrongAnswers = document.getElementById("wrongAnswers");
  let outOf = document.getElementsByClassName("outOf");
  rightAnswers.innerText = rightAnswer;
  wrongAnswers.innerText = wrongAnswer;
  for (element of outOf){
    element.innerText = numberOfQuestions;
  }
}

const pageTwoLoad = () => {
  questionnaire();
}
window.onload = (e) => {
  pageTwoLoad();
}



const timerCount = function(count){ // quando si richiama la funzione passare i secondi 
  let containerTimer = document.querySelector('#timer span');
  containerTimer.innerHTML = count;
  let time = setTimeout(update,1000)
  function update(){
      if(count>0){             
        containerTimer.innerHTML = --count;
        time = setTimeout(update,1000);
      }else{        
        clearTimeout(time);
        wrongAnswersCounter++;
        questionsCounter++;
        questionnaire();
    } 
  }
}

const prossimaBtn = document.getElementById("nextQuestContainer");
prossimaBtn.addEventListener("click", function(){
  // Verifica che ci sia una risposta selezionata
  if (document.getElementsByClassName('select').length === 0){
    alert("Seleziona una risposta per procedere")
  } else {
    // clearInterval(timerCount);
    // Controlla se le risposta è giusta
    if (userAnswer === rightAnswer){
      rightAnswersCounter++;
      questionsCounter++;
      questionnaire();
    } else {
      wrongAnswersCounter++;
      questionsCounter++;
      questionnaire();
    }
  }
})





const questionnaire = function(){
  timerCount(15);
  // Resetta le classi selected
  if(document.getElementsByClassName('select').length > 0){
    resetSelectClasses("select");
  }
  // Resetta il testo all'interno delle caselle di risposta
  for (element of document.getElementsByClassName("answer")){
    element.innerText = ''
  }
  // Inietta nell' HTML il numero della domanda
  injectQuestionNumber(questionsCounter + 1);
  let timeCounter = 0; // Secondi rimasti
  let questionContainer = document.getElementById("nextQuestContainer");
  let currentQuestion = showCurrentQuestion(questionsCounter); // Mostra la domanda corrente
  rightAnswer = getCorrectAnswer(questionsCounter); // La risposta corretta
  let wrongAnswers = getWrongAnswers(questionsCounter);
  // Costruisce un array con le riposte giusta e sbagliate
  let answersArray = setAllAnswers(rightAnswer, wrongAnswers);
  injectAnswers(answersArray);  //  Inietta le risposte nei vari contenitori
  // Aggiunge una classe .hideContainer agli elementi senza testo
  displayContainersWithText();

  // Aggiunge la classe select all'elemento selezionato
  const answers = document.querySelectorAll('.answerContainer');

  // Aggiungi un listener di clic a ciascuna risposta
  for (let i = 0; i < answers.length; i++){
      answers[i].addEventListener('click', function () {
      // Rimuovi la classe 'select' da tutte le risposte
      for (let j = 0; j < answers.length; j++) {
          answers[j].classList.remove('select')
      }

      // Aggiungi la classe 'select' solo alla risposta cliccata
      this.classList.add('select');
      const selectedAnswerText = this.innerText;
      userAnswer = selectedAnswerText;
    })
  }
  injectToResults(rightAnswersCounter, wrongAnswersCounter, numberOfQuestions);
  // Controlla che il counter delle domande non sia maggiore di 10
  if (questionsCounter >= numberOfQuestions){
    showResults();
    return;
  }
}



// Timer
// Funzione che prende e ritorna la domanda
// Funzione che prende e ritorna le risposte
// Funzione che inietta nel HTML la domanda e le risposte
// Funzione che prende il valore della risposta, lo confronta con la riposta corretta. Se la risposta è corretta incrementa il counter risposte giuste, altrimenti incrementa il counter risposte sbagliate

// Macrofunzione in cui incorporare il comportamento del questionario. Deve:
// Fare il check del contatore delle risposte. Se il contatore è uguale al numero massimo di domande, la funzione carica pagina 3.
// Una funzione che controlla il passaggio alla domanda successiva. La funzione controlla se o il tempo è scaduto, o se è stato premuto il bottone "prossima".
// Controllare che, se viene premuto il bottone "prossima" almeno una risposta sia selezionata