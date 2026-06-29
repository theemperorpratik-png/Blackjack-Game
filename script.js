let firstCard = 11
let secondCard = 10
let sum = firstCard + secondCard
let hasBlackjack = false
let isAlive = true
if ( sum <= 20) {
    let message = " Do you want to draw another card?"
} else if (sum === 21) {
    let message = " wooohooo youve got blackjack!!!!!"
    let hasBlackjack = true
} else if (sum < 21) {
    let message = " no youve lost the game"
    let isAlive = false
}