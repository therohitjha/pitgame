var scores,roundScores,activePlayer,twoSix; 

init();


document.querySelector('.roll-dice').addEventListener('click',function(){

    var dice=Math.floor(Math.random()*6)+1;
var diceDOM=document.querySelector('.dice');
diceDOM.style.display='block';
diceDOM.src= 'dice-' + dice + '.png';

if(dice===6 && twoSix===6)
{
    scores[activePlayer]=0;
    document.getElementById('score-'+activePlayer).textContent='0';
    nextPlayer();
}
else if(dice !== 1)
{
   
roundScores +=dice;
document.querySelector('#current-'+ activePlayer).textContent=roundScores;
}
else{
   
   nextPlayer();
}
twoSix=dice;
});

document.querySelector('.hold').addEventListener('click' , function()
{
scores[activePlayer]+=roundScores;
document.getElementById('score-' +activePlayer).textContent=scores[activePlayer];

var input=document.querySelector('.input-value').value;
var winningScore;
if(input){
    winningScore=input;   
}
else{
winningScore=100;
}

if(scores[activePlayer]>=winningScore)
{
    document.getElementById('name-'+activePlayer).textContent='Winner!';
    document.querySelector('.player-'+activePlayer).classList.remove('active');
    document.querySelector('.dice').style.display='none';
    document.querySelector('.roll-dice').style.display='none';
    document.querySelector('.hold').style.display='none';
    document.querySelector('.input-value').style.display='none';
}
else{
    nextPlayer();
}

});


document.querySelector('.new-game').addEventListener('click',init);

function init()
{

    scores=[0,0];
    roundScores=0;
    activePlayer=0;    
    document.getElementById('score-0').textContent='0';
    document.getElementById('current-0').textContent='0';
    document.getElementById('score-1').textContent='0';
    document.getElementById('current-1').textContent='0';
    document.getElementById('name-0').textContent='player 1'
    document.getElementById('name-1').textContent='Player 2';
    document.querySelector('.dice').style.display='none';
    document.querySelector('.player-0').classList.remove('active');
    document.querySelector('.player-1').classList.remove('active');
    document.querySelector('.player-0').classList.add('active');
    document.querySelector('.roll-dice').style.display='block';
    document.querySelector('.hold').style.display='block';
    document.querySelector('.input-value').style.display='block';
    document.querySelector('.input-value').value='';
}


function nextPlayer()
{
    activePlayer===0 ? activePlayer=1 : activePlayer=0;
    roundScores=0;
    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';
document.querySelector('.player-0').classList.toggle('active');
document.querySelector('.player-1').classList.toggle('active');
}


