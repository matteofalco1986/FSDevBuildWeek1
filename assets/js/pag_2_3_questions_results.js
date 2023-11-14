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
}