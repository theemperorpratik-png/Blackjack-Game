let firstCard = 11
let secondCard = 10
let message
let sum = firstCard + secondCard
let hasBlackjack = false
let isAlive = true
let messegeEl = document.getElementById("messege-el")
let sumEl = document.querySelector("#sum-el")
function startGame() {
    if (sum <= 20) {
        message = " Do you want to draw another card?"
    } else if (sum === 21) {
        message = " wooohooo youve got blackjack!!!!!"
        hasBlackjack = true
    } else if (sum > 21) {
        message = " no youve lost the game"
        isAlive = false
    }
    console.log(message)
    console.log(isAlive)
    console.log(hasBlackjack)
    messegeEl.textContent = message
    sumEl.textContent = "Sum:" + sum
}
