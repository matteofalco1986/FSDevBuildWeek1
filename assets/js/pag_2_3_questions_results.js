const calcoloPercentuale = (risposte) => {
    const correct = risposte/10
    const wrong = (10-risposte)/10

    return {
        correct,
        wrong
    }
}