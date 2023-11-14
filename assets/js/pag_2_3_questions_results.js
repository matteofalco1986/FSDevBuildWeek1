const calcoloPercentuale = (risposte) => {
    const correct = risposte/10
    const wrong = (10-risposte)/10

    return {
        correct,
        wrong
    }
}

const mexNelCerchio = (risposte) => {
    if(risposte > 5){
        const messaggio = document.querySelector('#circle h4')
        messaggio.innerHTML = 'Congratulation! <span>You passed the exam.<span>'
    }
    else{
        const messaggio = document.querySelector('#circle h4')
        messaggio.innerHTML = "Test Fail <span>You didn't passed the exam.<span>"
    }
}