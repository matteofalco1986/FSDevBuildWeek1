let numStar = 10                                                    //variabile per il numero delle stelle
const arrayImg = []                                                 //array per le immagini inserite 


const deselectorStar = function(){                                  //funzione che invoco dopo per deselezionare le stelle
    const selected = document.querySelectorAll(".starSelected")     //seleziono tutte le stelle con classe star selected
    for(let i=0; i<selected.length; i++){
        if (selected) {
            selected.classList.add("starNotSelected")               //aggiungo alle classi la classe non selected
        }     
    }
}

const selectStar = function(indexStar){                             //funzione che invoco dopo per selezionare le stelle
    let i = 0
    arrayImg[i].classList.add("starSelected")                       //aggiungo la classe selected alla prima stella
    while(arrayImg[i] !== indexStar){                               //aggiungo la classe finche' non arrivo al numero cliccato
        i++
        arrayImg[i].classList.add("starSelected")                   
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
        arrayImg[i] = imgStar
        imgStar.addEventListener("click", function (e){             //al click invoco funzioni per
            e.preventDefault()
            deselectorStar()                                        //deselezionare tutte le stelle
            selectStar(imgStar)                                     //selezionare un numero di stelle definito
        })
    }

}

createStar()