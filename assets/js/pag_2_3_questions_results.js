//array di oggetti di questiti
let contIncorrect = 0 
let contCorrect = 0 
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
    },  {
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
      type: "multiple",
      difficulty: "easy",
      question:
        "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
      correct_answer: "Final",
      incorrect_answers: ["Static", "Private", "Public"],
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
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];

//funzione per controlare se la risposta dell'utente e' corretta o sbagliata
const checkAnswer = function(userAnswer,correctAnswer){     //prendo come argomenti la risposta dell'utente e la risposta esatts       
  if(userAnswer===correctAnswer){                           //faccio un confronto tra le due
    contCorrect++                                           //se coincidono faccio aumentare di 1 il contatore delle risposte esatte
  }else{
    contIncorrect++                                         //altrimenti se non coincidono faccio aumentare di 1 il contatore delle risposte errate
  }
}



function percentuale(){                                                                 //funzione che prende la percentuale e stampaq se sei stato promnosso o bocciato
  let numeroPercentuale = document.getElementById("numero").value
  let number = document.getElementById("number")
  let counter = 0
  let risultato = document.createElement("p")
  risultato.style.textAlign = "center"
          if(numeroPercentuale > 59){
              risultato.innerHTML = "promosso <br> blablabla <br> blabalbalbla"
          }else{
              risultato.innerHTML = "bocciato blabla <br> blablabal <br> balbla"
          }
  number.appendChild(risultato)
  setStyle()
}

function setStyle(){                                                        //funzione per creare il raggio del cerchio
  let numeroPercentuale = document.getElementById("numero").value
  let cerchio =document.getElementById("cerchio")
  let numeroXStroke = (1300-1300*(numeroPercentuale/100))
  cerchio.style.strokeDashoffset = numeroXStroke
}
