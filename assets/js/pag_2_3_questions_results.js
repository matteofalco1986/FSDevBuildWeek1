const calcoloPercentuale = (risposte) => {
  const correct = risposte/10 /* percentuale risposte corrette */
  const wrong = (10-risposte)/10 /* percentuale risposte sbagliate */

  return {
      correct,
      wrong
  }
}

const mexNelCerchio = (risposte) => {
  if(risposte > 5){ /* se la soglia è maggiore a la metà delle domande allora l'esame è superato */
      const messaggio = document.querySelector('#circle h4')
      messaggio.innerHTML = 'Congratulation! <span>You passed the exam.<span>'
  }
  else{ /* nel caso contrario il messagio sarà che l'esame non è stato superato */
      const messaggio = document.querySelector('#circle h4')
      messaggio.innerHTML = "Test Fail <span>You didn't passed the exam.<span>"
  }
}//funzioni pagina due scritte da Massimo e Ramona 

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
const timer = function(indexCount){ /* aggiunta di un argomento nella funzione timer per poter risettare facilmente il count */
  let time 
  let end
  let count = indexCount
  let containerTimer = document.querySelector('#timer span')
  containerTimer.innerHTML = count
  time = setTimeout(update,1000)
  function update(){
      if(count>0){
          containerTimer.innerHTML = --count
          time = setTimeout(update,1000)            
      }else{
          end = "fine"
            // Fine del timer, passa automaticamente alla prossima domanda
            end = "fine";
            currentQuestion++;

            if (currentQuestion < questions.length) {
                // Se ci sono ancora domande, mostra la prossima domanda
                showCurrentQuestion();
            } else {
                // Se hai completato tutte le domande, puoi fare qualcos'altro qui
                console.log("Hai completato tutte le domande!");
            }
      }
  }
  return count /* importante aggiungere il return per tracciare il count */
}

//funzione che deseleziona 
  const deselezionaClasse = function (){
    const selezionati = document.querySelector(".select");
    if (selezionati){
        selezionati.classList.remove("select");
    } 
  } 
  
//funzione crea domande 
/*   const showQuestion = function(){
    
    for(let i=0; i < questions.length; i++){ // ogni domanda
        let count = timer(60)
        const quest = document.getElementById("quest")  
        const answer = document.getElementsByClassName("answer")
        quest.innerHTML = questions[i].question; //inserisco testo domanda
        answer[0].innerHTML = questions[i].correct_answer // fino a riga 141 inserisco testo risposte in ogni contenitore con classe answer
        answer[1].innerHTML = questions[i].incorrect_answers[0]
        answer[2].innerHTML = questions[i].incorrect_answers[1]
        answer[3].innerHTML = questions[i].incorrect_answers[2]
        const countQuest = document.querySelector('#countQuestion span') 
        countQuest.innerHTML = i+1 // nel paragrafo a piepagina inserisco l'indice dell'array di oggetti tiene il conto di ogni domanda 
        for (let i=0; i < answer.length; i++){  // ad ogni bottone assegno la classe di selezione e la rimuovo a gli altri elementi 
            answer.addEventListener("click", function(e){
                deselezionaClasse()
                answer.classList.add("select");
            })
        }
        if(count>0){ 
            //l'utente ha ancora tempo di rispondere
        }
        else{
            //passiamo alla prossima domanda
        }               
    }
  } */

/*   const showQuestion = function () {
    for (let i = 0; i < questions.length; i++) {
      let count = timer(60);
      const quest = document.getElementById("quest");
      const answer = document.getElementsByClassName("answer");
  
      quest.innerHTML = questions[i].question;
  
      for (let j = 0; j < answer.length; j++) {
        answer[j].innerHTML =
          j === 0 ? questions[i].correct_answer : questions[i].incorrect_answers[j - 1];
  
        // Rimuovi la classe select da tutti i bottoni di risposta
        answer[j].classList.remove("select");
  
        // Aggiungi un evento di ascolto per ciascun bottone di risposta
        answer[j].addEventListener("click", function (e) {
          // Deseleziona la classe da tutti i bottoni di risposta
          deselezionaClasse();
  
          // Aggiungi la classe solo al bottone cliccato
          e.currentTarget.classList.add("select");
        });
      }
  
      const countQuest = document.querySelector('#countQuestion span');
      countQuest.innerHTML = i + 1;
  
     
    }
  }; */
  
  const showQuestion = function () {
    let currentQuestion = 0;
    let count = timer(60)
  
    const quest = document.getElementById("quest");
    const answer = document.getElementsByClassName("answer");
    const countQuest = document.querySelector('#countQuestion span');
  
    const showCurrentQuestion = () => {
      quest.innerHTML = questions[currentQuestion].question;
  
      for (let j = 0; j < answer.length; j++) {
        answer[j].innerHTML =
          j === 0 ? questions[currentQuestion].correct_answer : questions[currentQuestion].incorrect_answers[j - 1];
  
        /* answer[j].classList.remove("select"); */
  
        answer[j].addEventListener("click", function (e) {
          deselezionaClasse();
          e.currentTarget.classList.add("select");
          //currentQuestion++;
  
          if (currentQuestion < questions.length) {
            showCurrentQuestion()
          } else {
            // Se hai completato tutte le domande, puoi fare qualcos'altro qui
            console.log("Hai completato tutte le domande!");
          }
        });
      }
  
      countQuest.innerHTML = currentQuestion + 1;
    };
  
    showCurrentQuestion();
  };
 
 
/*   timer()  *//* ho richiamato la funzione timer per controllare il suo andamento sulla pagina*/
showQuestion() //richiamo la funzione per controllare il suo andamento