//funzioni pagina due scritte da Massimo e Ramona 

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
  
 //funzione timer countdown 60 secondi
  const timer = function(){
    let time 
    let end
    let count = 60
    let containerTimer = document.getElementById("timer")
    containerTimer.innerHTML = count
    time = setTimeout(update,1000)
    function update(){
        if(count>0){
            containerTimer.innerHTML = --count
            time = setTimeout(update,1000)            
        }else{
            end = "fine"
        }
    }
}

//funzione che deseleziona 
  const deselezionaClasse = function (){
    const selezionati = document.querySelector(".select");
    if (selezionati) selezionati.classList.remove("select");
  } 
  
//funzione crea domande 
  const showQuestion = function(){
    for(let i=0; i < questions.length; i++){ // ogni domanda
        const quest = document.getElementById("quest")  
        const answer = document.getElementsByClassName("answer")
        quest.innerHTML = questions[i].question; //inserisco testo domanda
        answer[0].innerHTML = questions[i].correct_answer // fino a riga 141 inserisco testo risposte in ogni contenitore con classe answer
        answer[1].innerHTML = questions[i].incorrect_answers[0]
        answer[2].innerHTML = questions[i].incorrect_answers[1]
        answer[3].innerHTML = questions[i].incorrect_answers[2]
        const countQuest = document.getElementById("countQuestions") 
        countQuest.innerHTML = i+1 // nel paragrafo a piepagina inserisco l'indice dell'array di oggetti tiene il conto di ogni domanda 
        for (let i=0; i < answer.length; i++){  // ad ogni bottone assegno la classe di selezione e la rimuovo a gli altri elementi 
            answer[i].addEventListener("click", function(e){
                deselezionaClasse()
                answer[i].classList.add("select");
            })
        }                
    }
  }
 