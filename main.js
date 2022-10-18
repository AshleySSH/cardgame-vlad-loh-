const cards = document.querySelectorAll('.memory-card');
let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false;
let allcards = 0;
let count = 0;
let rightsteps = 0;
let Leftdiv = document.getElementById('schet1')
let RightDiv =  document.getElementById('schet2')
RightDiv.innerHTML = rightsteps;
Leftdiv.innerHTML = count;


function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

function flipCard() {
        
    if (lockBoard) return;
    if (this === firstCard) return;
        this.classList.add('flip');
    if (!hasFlippedCard) {
        hasFlippedCard = true; 
        firstCard = this;
        return;

    } 
        secondCard = this;
        hasFlippedCard = false;

        checkForMatch();
    }
function restart() {
    

}

function checkForMatch() { 
    count++;
    Leftdiv.innerHTML = count;
    if (firstCard.dataset.framework === secondCard.dataset.framework) {
         disableCards();
         rightsteps++;
         RightDiv.innerHTML = rightsteps;
         if (rightsteps === 6) {
            let a = prompt('Вы выйграли, желаете сыграть еще раз щщс?', 'ДА!')
             if (a == 'ДА!') {
                location.reload();
             } 
             else {
                
             }
         }
     
        return;
 }
    unflipCards();
}

function disableCards() {
firstCard.removeEventListener('click' , flipCard);
secondCard.removeEventListener('click' , flipCard);


resetBoard();
}

function unflipCards() {
    lockBoard = true;

setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        
        // lockBoard = false;
        resetBoard();
}, 500);
}
 

(function shuffle() {
        cards.forEach (card => {
            let ramdomPos = Math.floor(Math.random() * 12);
            card.style.order = ramdomPos;
        })

})();


cards.forEach(card =>  card.addEventListener('click' , flipCard));


// const reset = () => {

//     [hasFlippedCard, lockBoard] = [false, false];
//     [firstCard, secondCard] = [null, null];

//     cards.forEach(returncards =>  {
//         returncards.classList.remove('flip')
//     });

//     cards.forEach (card => {
//         let ramdomPos = Math.floor(Math.random() * 12);
//         card.style.order = ramdomPos;
//     })
// }
//for (let i=0; i >= rightSteps i++){}