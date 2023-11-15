let numStar = 10                                                    //variabile per il numero delle stelle
const arrayStar = []                                                 //array per le immagini inserite

const selectStar = function(indexStar){                             //funzione che invoco dopo per selezionare le stelle
    let i = 0
    arrayStar[i].classList.add("starSelected")
    arrayStar[i].classList.remove("starNotSelected")                       //aggiungo la classe selected alla prima stella
    while(arrayStar[i] !== indexStar){                               //aggiungo la classe finche' non arrivo al numero cliccato
        i++
        arrayStar[i].classList.add("starSelected")
        arrayStar[i].classList.remove("starNotSelected")
    }
}

function deselectorStar() {
    for (let i in arrayStar){
        if (arrayStar[i].classList.contains("starSelected")){
            arrayStar[i].classList.remove("starSelected")
            arrayStar[i].classList.add("starNotSelected")
        }
    }
}

const createStar = function(){                                      //funzione che crea tutte le immagini delle stelle
    const contRate = document.querySelector("#rateStar")
    for(let i=0; i<numStar; i++){
        const contStar = document.createElement("div")
        let imgStar = document.createElement("img")
        imgStar.src = 'assets/images/star.svg'
        imgStar.classList.add("starNotSelected")
        contRate.appendChild(imgStar)
        arrayStar[i] = imgStar
        imgStar.addEventListener("click", function (e){             //al click invoco funzioni per
            e.preventDefault()
            deselectorStar()                                 //deselezionare tutte le stelle
            selectStar(imgStar)                                     //selezionare un numero di stelle definito
        })
    }

}

createStar()