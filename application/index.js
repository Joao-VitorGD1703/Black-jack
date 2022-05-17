// ---------------------------BlackJack----------------------------------
let firstCard = getRandomCard();
let secondCard = getRandomCard();
let cards = [firstCard, secondCard]
let hasBlackJack = false
let isAlive = true
let sumEl = document.getElementById("sum-el")
sum = firstCard + secondCard;
let message = "" 
let messageEl = document.getElementById("message-el")
let cardEl = document.querySelector("#card-el")

function getRandomCard(){
    let randomNumber = Math.floor( Math.random() * 13) + 1
   
    if(randomNumber > 10){
        return 10
    } else if (randomNumber ===1){
        return 11
    }else{
       return randomNumber
    }
}




function startGame(){

    renderGame()
}


function renderGame(){
    cardEl.textContent = "Cards: "
    for( let i = 0; i < cards.length; i ++){
    cardEl.textContent +=  cards[i] + " "
    // "Cards: " +

    }


    sumEl.textContent = "Sum: " + sum;

    if( sum < 21){
        message = "Do you want to draw anew card? "
        
    }else if(sum === 21){
        message = "You've got BlackJack "
        hasBlackJack = true
       
    }else if(sum > 21){
        message = "You're out of the game! "
        isAlive = false
       
    }
     messageEl.textContent = message;
}


function newCard(){

    let card = getRandomCard()

     sum += card;
     cards.push(card)
     console.log(cards)

     renderGame()
}