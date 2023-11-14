let numStar = 10

const createStar = function(){
    const contRate = document.querySelector("#rateStar")
    for(let i=0; i<numStar; i++){
        const contStar = document.createElement("div")
        let img = document.createElement("img")
        img.src = 'assets/images/star.svg'
        contRate.appendChild(img)
        contStar.addEventListener("click", function (e){
            e.preventDefault()
            
        })
    }
}

createStar()