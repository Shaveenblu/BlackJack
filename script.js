//************************************blackjack game****************************************
//Cards Array
let cards = []
let hasBlackJack = false
let isAlive = false
let msg = ""
let sum = 0
let messageEl = document.getElementById("message-el")

//let sumEl = document.getElementById("sum-el") 
//instead of this we can use this
//'#' was used for showcase its an id
let sumEl = document.querySelector("#sum-el")
let cardEl = document.querySelector("#card-el")

//Object player
let player = {
    nam: "Sha",
    score: 50
}

let playerEl = document.getElementById("player-el")
playerEl.innerText = player.nam + ": $" + player.score

//button onclick
function startgame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard+secondCard
    rendergame()
}

function getRandomCard() {
    //floor function was added to remove decimals
    
    let randomnum = Math.floor(Math.random()*13)+1 //1-13
    if(randomnum === 1) {
        return 11
    }else if (randomnum>=11){
        return 10
    } else {
        return randomnum
    }
    
}

function rendergame() {

    sumEl.textContent = "Sum: " + sum
    cardEl.textContent = "Cards: "
    c = 0
    for( let i=0; i< cards.length; i++){
         c++
         cardEl.textContent += c + ' Card :'+ cards[i] + " " + " "
    }
    if (sum<=20) {
        msg = "Wanna draw a new card"
    } else if (sum===21) {
        msg = "Got the blackjack 🃏"
        hasBlackJack = true
    } else {
        msg = "Ur out of the game"
        isAlive = false
    }
    messageEl.textContent = msg
    //console.log(isAlive)
    //console.log(msg)
}

function newcard() {
    if (isAlive===true && hasBlackJack === false){
        let newcard = getRandomCard()
        sum += newcard
        cards.push(newcard)
        rendergame()
    }
    
}



//******************************************************************************************