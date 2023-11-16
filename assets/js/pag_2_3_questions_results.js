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

/*RAMONA
/*   timer()  *//* ho richiamato la funzione timer per controllare il suo andamento sulla pagina*/
/*showQuestion() //richiamo la funzione per controllare il suo andamento

let index = 0 //inizializzo indice che gestirà array questions
let contIncorrect = 0 // inizializzo contatore domande errate verrà utilizzato nella funzione checkAnswer/timer
let contCorrect = 0 // inizializzo contatore domande corrette
let answerUser = ''

//funzione crea domande
/* LA FUNZIONE È UN DOPPIONE TRA QUANTO SCRITTO DA RAMONA E DA METHA. NE HO COMMENTATA UNA PER NON AVERE IL CONFLITTO, MA SCEGLIETE QUALE USARE

const showQuestion = function(i){// ogni domanda passo come parametro l'index dichiarato e inizializzato alla riga 108 // dovrà essere incrementato al passare dei 60 secondi o al click del button nextQuestion
    const quest = document.getElementById("quest")  
    const answers = document.getElementsByClassName("answer")
    quest.innerHTML = questions[i].question; //inserisco testo domanda
    answers[0].innerHTML = questions[i].correct_answer // fino a riga 141 inserisco testo risposte in ogni contenitore con classe answer
    answers[1].innerHTML = questions[i].incorrect_answers[0]
    answers[2].innerHTML = questions[i].incorrect_answers[1]
    answers[3].innerHTML = questions[i].incorrect_answers[2]
    const countQuest = document.getElementById("countQuestions") 
    countQuest.innerHTML = i+1 // nel paragrafo a piepagina inserisco l'indice dell'array di oggetti tiene il conto di ogni domanda 
    for (let j1=0; j1 < answers.length; j1++){  // ad ogni bottone assegno la classe di selezione e la rimuovo a gli altri elementi 
        answers[j].addEventListener("click", function(e){
            deselezionaClasse()
            answers[j1].classList.add("select");
        })
      }              
}
*/

//funzione timer countdown 60 secondi
/*const timer = function(){
  let time 
  let count = 60
  let containerTimer = document.getElementById("timer")
  containerTimer.innerHTML = count
  time = setTimeout(update,1000)
  function update(){
      if(count>0){            
          containerTimer.innerHTML = --count;
        time = setTimeout(update,1000)
          showQuestion(index)

      }else{
         // quando terminano i 60 secondi
        answerUser = document.querySelector(".select");
         //prendo la risposta selezionata dall'utente
        if(answerUser){ // verifico che la classe sia stata assegnata almeno ad una risposta
          checkAnswer() //true verifico se la risposta è corretta con la funzione apposita passando come parametro la risposta con la classe selezione 
        }else{
          contIncorrect +=1 //se non ha selezionato nessuna risposta incremento in automatico il contatore delle risposte errate             
        } 
        clearInterval(count);
        index++;
      } // quando terminano i 60 secondi incremento l'indice per mostrare la domanda successiva
  }
}
timer()*/


/*const checkAnswer = () =>{
  let correctAns = questions[i].correct_answer
  if(answerUser == correctAns){
    contCorrect += 1;
  }
  else{
    contIncorrect += 1;
  }
}

// FINE PARTE RAMONA

// METHA

const calcoloPercentuale = (risposte) => {
const correct = risposte / 10 /* percentuale risposte corrette */
/*const wrong = (10 - risposte) / 10 /* percentuale risposte sbagliate */

/*return {
  correct,
  wrong
}
}

const mexNelCerchio = (risposte) => {
if (risposte > 5) { /* se la soglia è maggiore a la metà delle domande allora l'esame è superato */
  /*const messaggio = document.querySelector('#circle h4')
  messaggio.innerHTML = 'Congratulation! <span>You passed the exam.<span>'
} else { /* nel caso contrario il messagio sarà che l'esame non è stato superato */
  /*const messaggio = document.querySelector('#circle h4')
  messaggio.innerHTML = "Test Fail <span>You didn't passed the exam.<span>"
}
}

// GLOBAL VARIABLES
const numberOfQuestions = 10; // Numero domande
let rightAnswersCounter = 0; //  Contatore risposte corrette
let wrongAnswersCounter = 0; //  Contatore risposte sbagliate
let questionsCounter = 0; //  Contatore domande
const timerCounter = 5;   // Tempo per rispondere a ogni domanda
let count = timerCounter; //  Numero del conto alla rovescia
let userAnswer = '';  //  Risposta utente
let rightAnswer = ''; //  Risposta corretta
let timer = 0;  //  Variabile per il timer del conto alla rovescia

// Inietta testo e cambia messaggio e colore del testo a seconda del risultato
const injectOutcomeMessage = (rightAnswersCounter, numberOfQuestions) => {
  const testOutcomeText = document.querySelector(".testOutcomeText p");
  const coloredMessage = document.querySelector(".passedOutcome");
  const outcomeDescription = document.querySelectorAll(".outcomeDescription p");
  const passedMessage = 'Congratulations!';
  const passedSubtitle = 'You passed the exam.';
  const passedDescrOne = "We'll send you the certificate in few minutes.";
  const passedDescrTwo = "Check your email (including promotions / spam folder)";
  const failedMessage = 'You shall not pass!';
  const failedSubtitle = "Go back to the shadow.";
  const failedDescrOne = "Gandalf staggered and fell, grasped vainly at the stone and slid into the abyss";
  const failedDescrTwo = "He whispered sofly: 'Fly, you fools!'";

  if ((rightAnswersCounter * 100 / numberOfQuestions) > 50) {
    // Mostra messaggio passato
    testOutcomeText.textContent = passedMessage;
    coloredMessage.innerText = passedSubtitle;
    outcomeDescription[0].innerText = passedDescrOne;
    outcomeDescription[1].innerText = passedDescrTwo;
} else {
    // Mostra messaggio fallito
    testOutcomeText.innerText = failedMessage;
    coloredMessage.classList.add("failedOutcome");
    coloredMessage.classList.remove("passedOutcome");
    coloredMessage.innerText = failedSubtitle;
    outcomeDescription[0].innerText = failedDescrOne;
    outcomeDescription[1].innerText = failedDescrTwo;

  }
}
// Calcola e inietta le percentuali nella pagina dei risultati
const injectPercentages = (rightAnswersCounter, wrongAnswersCounter) => {
  const percentObjects = document.getElementsByClassName("percent");
  const percentageRight = rightAnswersCounter * 100 / numberOfQuestions;
  const percentageWrong = wrongAnswersCounter * 100 / numberOfQuestions;
  percentObjects[0].innerText = percentageRight.toString();
  percentObjects[1].innerText = percentageWrong.toString();
}

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
  // Nasconde la pagina del questionario
  let toHide = document.getElementById("pageTwo");
  toHide.classList.add("hidePage");
  // Rende visibile la pagina dei risultati
  let toDisplay = document.getElementById("pageThree");
  toDisplay.classList.remove("hidePage");
  // Nasconde il contatore
  let timer = document.querySelector("#timer p");
  timer.classList.add("hideContainer");
  injectPercentages(rightAnswersCounter, wrongAnswersCounter);
  injectToResults(rightAnswersCounter, wrongAnswersCounter, numberOfQuestions);
  injectOutcomeMessage(rightAnswersCounter, numberOfQuestions);
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

// Aggiunge la classe 'select' alla risposta selezionata
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

// Ritorna la risposta corretta della domanda corrente
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

// Resetta le classi 'select'
const resetSelectClasses = (className) => {
  document.getElementsByClassName(className)[0].classList.remove(className);  
}

// Mostra i contenitori con il testo
const displayContainersWithText = () => {
  for (element of document.getElementsByClassName("answer")){
    if (element.innerText === ""){
      element.parentNode.classList.add("hideContainer");
    } else {
      element.parentNode.classList.remove("hideContainer");
    }
  }
}

// Inietta i risultati nell'HTML
const injectToResults = (rightAnswer, wrongAnswer, numberOfQuestions) => {
  let rightAnswers = document.getElementById("rightAnswers");
  let wrongAnswers = document.getElementById("wrongAnswers");
  let outOf = document.getElementsByClassName("outOf");
  rightAnswers.innerText = rightAnswer;
  wrongAnswers.innerText = wrongAnswer;
  for (element of outOf){
    element.innerText = numberOfQuestions;
  }
  // let rightPercentage = document.getEl
}

const pageTwoLoad = () => {
  questionnaire();
}
window.onload = (e) => {
  pageTwoLoad();
}

const prossimaBtn = document.getElementById("nextQuestContainer");
prossimaBtn.addEventListener("click", function(){
  // Verifica che ci sia una risposta selezionata
  if (document.getElementsByClassName('select').length === 0){
    alert("Seleziona una risposta per procedere")
  } else {
    // clearInterval(timerCount);
    // Controlla se le risposta è giusta
    clearTimeout(timer);
    count = timerCounter;
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

// Avvia il timer
const setTimer = () => {
  let containerTimer = document.querySelector('#timer span');
  containerTimer.innerHTML = count;
  timer = setTimeout(update,1000)
  function update(){
    if(count > 0){             
      containerTimer.innerHTML = --count;
      timer = setTimeout(update,1000);
    }else{        
      clearTimeout(timer);
      wrongAnswersCounter++;
      questionsCounter++;
      questionnaire();
    }
  }
}

const questionnaire = () => {
  if (questionsCounter >= numberOfQuestions){
    showResults();
    clearTimeout(timer);
    return;
  }
  // Reset e avvio del timer
  clearTimeout(timer)
  count = timerCounter;
  setTimer()
  
  // Reset delle classi selected
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
}







