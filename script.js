let message
let sum = 0
let cards = []
let hasBlackjack = false
let isAlive = false
let messegeEl = document.getElementById("messege-el")
let sumEl = document.querySelector("#sum-el")
let cardEl = document.querySelector("#card-el")

document.getElementById("but2").style.display = "none"

let player = {
    name: "user",
    chips: 67
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips


function renderGame() {
    if (sum <= 20) {
        message = " Do you want to draw another card🤔?"
        document.getElementById("but0").style.display = "flex"
    } else if (sum === 21) {
        message = " wooohooo youve got blackjack!!!!!🤯🥳🥳"
        hasBlackjack = true
        document.getElementById("but2").style.display = "none"
        document.getElementById("but1").style.display = "flex"
        document.querySelector("#but1").innerHTML = '<button id="wan" onclick="startGame()">Lets Goo</button></div>'
        document.getElementById("wan").style.backgroundColor = "blue"
        playerEl.textContent = player.name + ": $" + "99999+"
        document.getElementById("but0").style.display = "none"
    } else if (sum > 21) {
        
        message = " no youve lost the game😶😥"
        isAlive = false
        document.getElementById("but2").style.display = "none"
        document.getElementById("but1").style.display = "flex"
        document.querySelector("#but1").innerHTML = '<button id="wan" onclick="startGame()">Play Again</button></div>'
        document.getElementById("wan").style.backgroundColor = "red"
        playerEl.textContent = player.name + ": $" + 0
        document.getElementById("but0").style.display = "none"
        
    }
    console.log(message)
    console.log(isAlive)
    console.log(hasBlackjack)
    messegeEl.textContent = message
    sumEl.textContent = "Sum:" + sum
    cardEl.textContent = "Cards: "
    for (i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " "
    }
}
function startGame() {
    let dfc = getRandomCard() 
    let dsc = Math.floor(Math.random*9 + 2)

    document.getElementById("dealer").textContent = "Dealers Card: " + "?" + " " + dfc
    playerEl.textContent = player.name + ": $" + 67
    document.getElementById("wan").style.backgroundColor = "goldenrod"
    document.getElementById("but1").textContent = "Start Game"
    isAlive = true
    hasBlackjack = false
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    document.getElementById("but2").style.display = "flex"
    document.getElementById("but1").style.display = "none"
    
    renderGame()
}
function newCard() {
    if (isAlive === true && hasBlackjack === false) {
        let newCard1 = getRandomCard()
        cards.push(newCard1)
        sum = sum + newCard1
        renderGame()
    }
}
function getRandomCard() {
    let randomNumber = Math.floor(1 + Math.random() * 13)
    if (randomNumber === 1) {
        return 11
    }
    if (randomNumber > 10) {
        return 10
    }
    else {
        return randomNumber
    }
}


