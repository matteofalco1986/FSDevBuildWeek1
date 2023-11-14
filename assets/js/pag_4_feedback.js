let numStar = 10
const arrayImg = []


const deselectorStar = function(){
    const selected = document.querySelectorAll(".starSelected")
    for(let i=0; i<selected.length; i++){
        if (selected) selected.classList.add("starNotSelected") 
    }
}

const selectStar = function(indexStar){
    let i = 0
    arrayImg[i].classList.add("starSelected")
    while(arrayImg[i] !== indexStar){
        i++
        arrayImg[i].classList.add("starSelected")
    }
}

const createStar = function(){
    const contRate = document.querySelector("#rateStar")
    for(let i=0; i<numStar; i++){
        const contStar = document.createElement("div")
        let imgStar = document.createElement("img")
        imgStar.src = 'assets/images/star.svg'
        imgStar.classList.add("starNotSelected")
        contRate.appendChild(imgStar)
        arrayImg[i] = imgStar
        imgStar.addEventListener("click", function (e){
            e.preventDefault()
            deselectorStar()
            selectStar(imgStar)
        })
    }

}

createStar()