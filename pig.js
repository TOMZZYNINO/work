var score , activeplayer, roundscore,dice , gameplaying;
      
    int();

      document.querySelector('.btn-dice').addEventListener('click',function(){
            if(gameplaying){
                   //random number
      dice = Math.floor(Math.random()* 6 + 1);
      //Dom manipulation
      var Domstrig = document.querySelector('.dice');
      Domstrig.style = 'display:block';
      Domstrig.src = 'dice-' + dice + '.png';

      //adding the roundscore if dice is equal to one 

           if(dice === 1){
                 Nextplayer();
           }else{
            
               roundscore += dice;
                document.querySelector('#current-'+ activeplayer).textContent = roundscore;
                
           }  
     }
});
 
document.querySelector('.btn-hold').addEventListener('click', function(){
       if(gameplaying){
              score[activeplayer] += roundscore;
      document.querySelector('#score-' + activeplayer).textContent = score[activeplayer];
     // if the player wins the game
     if(score[activeplayer] >= 100 ){
      document.querySelector('#name-' + activeplayer).textContent = 'winner!';
      document.querySelector('.player-' + activeplayer + '-panel').classList.add('winner');
      document.querySelector('.player-' + activeplayer + '-panel').classList.toggle('active');
      document.querySelector('.dice').style = 'display:none';
      roundscore = 0;
      document.querySelector('#current-'+ activeplayer).textContent ='0';
      activeplayer === 0 ? activeplayer = 1 : activeplayer = 0;
       gameplaying = false;
     } else{
            //nextplayer
      Nextplayer();
     }
    
       }
     
})


function Nextplayer(){
      roundscore = 0;
      document.querySelector('#current-'+ activeplayer).textContent ='0';
      activeplayer === 0 ? activeplayer = 1 : activeplayer = 0;
      document.querySelector('.player-0-panel').classList.toggle('active');
      document.querySelector('.player-1-panel').classList.toggle('active');
      document.querySelector('.dice').style = 'display:none';
}



document.querySelector('.btn-new').addEventListener('click', int)

function int(){
      score = [0,0];
      roundscore = 0;
      activeplayer = 0;
      gameplaying = true;

      document.querySelector('.player-0-panel').classList.add('active');
      document.querySelector('.player-1-panel').classList.remove('active');
      document.querySelector('.player-0-panel').classList.remove('winner');
      document.querySelector('.player-1-panel').classList.remove('winner');
      document.querySelector('#name-0').textContent = 'player 1';
      document.querySelector('#name-1').textContent = 'player 2';
      document.querySelector('#score-0').textContent = '0';
      document.querySelector('#score-1').textContent = '0';
      document.querySelector('#current-0').textContent = '0';
      document.querySelector('#current-1').textContent = '0';
      document.querySelector('.dice').style = 'display:none';

}

//document.querySelector('#current-' + activeplayer).textContent = dice;



  //document.querySelector('.player-0-panel').classList.remove('active');
            //document.querySelector('.player-1-panel').classList.add('active');
   
        


