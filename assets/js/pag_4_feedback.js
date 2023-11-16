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

function deselectorStar() {                                        //funzione per deselezionare un numero di stelle definito                                      
    for (let i in arrayStar){                                       //ciclo for per ciclare tutto l'array di stelle
        if (arrayStar[i].classList.contains("starSelected")){       //confronto se la stella cliccata continene la classe selected
            arrayStar[i].classList.remove("starSelected")           //allora rimuovo la classe selected
            arrayStar[i].classList.add("starNotSelected")           //e gli aggiungo la classe non selected
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
            deselectorStar()                                 //deseleziono un numero di stelle definito
            selectStar(imgStar)                                     //selezionare un numero di stelle definito
        })
    }

}

window.onload = (e) => {
    createStar()
}