'use strict';

const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');
const score_one = document.getElementById('score--0');
const score_two = document.getElementById('score--1');
const currentscore_1 = document.getElementById('current--0');
const currentscore_2 = document.getElementById('current--1');
const dice = document.getElementById('dice');
const button_new = document.querySelector('.btn--new');
const button_roll = document.querySelector('.btn--roll');
const button_hold = document.querySelector('.btn--hold');

let scores, currentscore, activeplayer, playing;


const init = function(){

    //Storing values
    scores = [0,0];
    currentscore = 0;
    activeplayer = 0;
    playing = true;
    //Starting condition when opening
    score_one.textContent = 0;
    score_two.textContent = 0;
    currentscore_1.textContent = 0;
    currentscore_2.textContent = 0;
    dice.classList.add('hidden');
    player1.classList.remove('player--winner');
    player2.classList.remove('player--winner');
    player1.classList.add('player--active');
    player2.classList.remove('player--active');


}
init();

const switchPlayer = function() {

    document.getElementById(`current--${activeplayer}`).textContent = 0;
    activeplayer = activeplayer === 0 ? 1 : 0;
    currentscore = 0;
    player1.classList.toggle('player--active')
    player2.classList.toggle('player--active')

}



button_roll.addEventListener('click', function() {
    if(playing){
    const dicegen = Math.trunc(Math.random() * 6) + 1;

    dice.classList.remove('hidden');
    dice.src = `dice-${dicegen}.png`;

    if (dicegen !== 1) {
        currentscore += dicegen;
        document.getElementById(`current--${activeplayer}`).textContent = currentscore;
    }
    else {
        switchPlayer();
    }
}
});

button_hold.addEventListener('click', function() {
    if (playing){
    scores[activeplayer] += currentscore;
    document.getElementById(`score--${activeplayer}`).textContent = scores[activeplayer];

    if (scores[activeplayer] >= 20) {
        playing = false;
        document.querySelector(`.player--${activeplayer}`).classList.add('player--winner')
        document.querySelector(`.player--${activeplayer}`).classList.remove('player--active')
    } 
    else {

        switchPlayer();
    }
}
})

button_new.addEventListener('click', init);

