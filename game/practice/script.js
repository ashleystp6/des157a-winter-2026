(function(){
    'use strict'
    console.log('reading JS');

    const startGame = document.querySelector('#startgame');
    const gameControl = document.querySelector('#gamecontrol');
    const game = document.querySelector('#game');
    const score = document.querySelector('#score');
    const actionArea = document.querySelector('#actions');

    const gameData = {
	dice: ['shark.jpg', 'canon.jpg', 'sword.jpg', 
		'gold.jpg', 'jewel.jpg', 'treasure.jpg'],
	players: ['player 1', 'player 2'],
	score: [0, 0],
	roll1: 0,
	roll2: 0,
	rollSum: 0,
	index: 0,
	gameEnd: 29
    };  

    startGame.addEventListener('click', function(){
        gameControl.innerHTML = '<h2>The game has started</h2>';
        gameControl.innerHTML += '<button id="quit">Wanna quit?</button>';
        document.querySelector('#quit').addEventListener('click', function (){
            location.reload();
        });

        gameData.index = Math.round(Math.random());
        console.log(gameData.index);

        setUpTurn();

    }); //end start game event listener

    function setUpTurn(){
        game.innerHTML = `<p>Roll the dice for the ${gameData.players[gameData.index]}</p>`;
        actionArea.innerHTML = '<button id="roll">Roll the dice</button>';
        document.querySelector('#roll').addEventListener('click', function(){
            throwDice();
        });
    } //end setup turn

    function throwDice(){
        actionArea.innerHTML = '';
        gameData.roll1 = Math.floor(Math.random()*6) + 1;
        gameData.roll2 = Math.floor(Math.random()*6) + 1;
        game.innerHTML = `<p>Roll the dice for the ${gameData.players[gameData.index]}</p>`
        game.innerHTML += `<img src="images/${gameData.dice[gameData.roll1-1]}"> <img src="images/${gameData.dice[gameData.roll2-1]}">`;
        gameData.rollSum = gameData.roll1 + gameData.roll2;

        if(gameData.rollSum === 2){
            game.innerHTML += '<p>Oh snap! Bad dice!</p>';

            gameData.index ? (gameData.index = 0) : (gameData.index = 1); //switches player

            setTimeout(setUpTurn, 2000);

        } else if(gameData.roll1 === 1 || gameData.roll2 === 1){
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            
            game.innerHTML += `<p>Sorry, one of your rolls was bad, switching to ${gameData.players[gameData.index]}</p>`;

            setTimeout(setUpTurn, 2000);
        } else{
            gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;
            actionArea.innerHTML = '<button id="rollagain">Roll again</button> or <button id="pass">Pass</button>';
            document.querySelector('#rollagain').addEventListener('click', function(){
                throwDice();
            });

            document.querySelector('#pass').addEventListener('click', function(){
                gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                setUpTurn();
                checkWinningCondition();
            });
        }
        
        showCurrentScore();
    } //end throw dice function

    function checkWinningCondition(){
        if(gameData.score[gameData.index] > gameData.gameEnd){
            score.innerHTML = `<h2>${gameData.players[gameData.index]} wins with ${gameData.score[gameData.index]} points</h2>`;
            actionArea.innerHTML = '';
            document.querySelector('quit').innerHTML = 'start a new game?';
        } else {
            //show current score
            showCurrentScore();
        }
    } //check winning condition end 

    function showCurrentScore(){
        score.innerHTML = `<p>The score is currently <strong>${gameData.players[0]}</strong>: <strong>${gameData.score[0]}</strong> and <strong>${gameData.players[1]}</strong>: <strong>${gameData.score[1]}</strong></p>`;
    }
    

})();