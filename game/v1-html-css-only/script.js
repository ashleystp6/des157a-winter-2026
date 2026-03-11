(function(){
  'use strict';
  console.log('reading js');

  const startGame = document.querySelector('#button');
	const gameControl = document.querySelector('#gamecontrol');
	const game = document.querySelector('#game');
	const score = document.querySelector('#score');
	const actionArea = document.querySelector('#actions');
  const addscore = document.querySelector('#dice1');
  const subractscore = document.querySelector('#dice2');

	const gameData = {
		dice: ['images/canon.jpg', 'images/shark.jpg', 'images/sword.jpg', 
			   'images/gold.jpg', 'images/jewel.jpg', 'images/treasure.jpg'],
		players: ['player 1', 'player 2'],
		score: [0, 0],
		roll1: 0,
		roll2: 0,
		rollSum: 0,
		index: 0,
		gameEnd: 14
	};

	startGame.addEventListener('click', function () {
		gameData.index = Math.round(Math.random());
		console.log(gameData.index);

		gameControl.innerHTML = '<h2>The Game Has Started</h2>';
		gameControl.innerHTML += '<button id="quit">Wanna Quit?</button>';

		document
			.querySelector('#quit').addEventListener('click', function () {
				location.reload();
			});

		setUpTurn();
	});

	function setUpTurn() {
		game.innerHTML = `<p>Roll the dice for the ${gameData.players[gameData.index]}</p>`;
		actionArea.innerHTML = '<button id="roll">Roll the Dice</button>';
		document.querySelector('#roll').addEventListener('click', function(){

			throwDice();

		});
	}

	function throwDice(){
		actionArea.innerHTML = '';
		gameData.roll1 = Math.floor(Math.random() * 6) + 1; //using ceil could result in a zero
		gameData.roll2 = Math.floor(Math.random() * 6) + 1;
		game.innerHTML = `<p>Roll the dice for the ${gameData.players[gameData.index]}</p>`;
		game.innerHTML += `<img src="${gameData.dice[gameData.roll1-1]}"> 
							<img src="${gameData.dice[gameData.roll2-1]}">`;
		gameData.rollSum = gameData.roll1 + gameData.roll2;

    let turnScore = 0;

		// if two 1's are rolled...
		// if( gameData.rollSum === 1 && 2 && 3 ){ 
		// 	game.innerHTML += '<p>Oh snap! You subtract your score.</p>';
		// 	gameData.score[gameData.index] = -1;
		// 	gameData.index ? (gameData.index = 0) : (gameData.index = 1);
		// 	showCurrentScore();
		// 	setTimeout(setUpTurn, 2000);
		// }

    if (gameData.roll1 <= 3) {
      turnScore-= gameData.roll1;
      game.innerHTML += '<p>Oh snap! You subtract your score.</p>';
      showCurrentScore();
		  setTimeout(setUpTurn, 5000);
    }
    else {
      turnScore += gameData.roll1;
    }

    if (gameData.roll2 <= 3) {
      turnScore-= gameData.roll2;
      game.innerHTML += '<p>Oh snap! You subtract your score.</p>';
      showCurrentScore();
		  setTimeout(setUpTurn, 5000);
    }
    else {
      turnScore += gameData.roll2;
    }

    gameData.score[gameData.index] += turnScore;


		// if either die is a 1...
		if(gameData.roll1 === 1 || gameData.roll2 === 1){ 
			gameData.index ? (gameData.index = 0) : (gameData.index = 1);
			game.innerHTML += `<p>Sorry, one of your rolls was bad, switching to  ${
				gameData.players[gameData.index]
			}</p>`;
			setTimeout(setUpTurn, 5000);
		}

		// if neither die is a 1...
		else { 
			gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;
			// actionArea.innerHTML = '<button id="rollagain">Roll again</button> or <button id="pass">Pass</button>';

			document.querySelector('#rollagain').addEventListener('click', function () {
				//setUpTurn();
				throwDice();
			});

			// document.querySelector('#pass').addEventListener('click', function () {
			// 	gameData.index ? (gameData.index = 0) : (gameData.index = 1);
			// 	setUpTurn();
			// });

			checkWinningCondition();
		}

	}

	function checkWinningCondition() {
		if (gameData.score[gameData.index] > gameData.gameEnd) {
			score.innerHTML = `<h2>${gameData.players[gameData.index]} 
			wins with ${gameData.score[gameData.index]} points!</h2>`;

			actionArea.innerHTML = '';
			document.getElementById('quit').innerHTML = 'Start a New Game?';
		} else {
			// show current score...
			showCurrentScore();
		}
	}

	function showCurrentScore() {
		score.innerHTML = `<p>The score is currently <strong>${gameData.players[0]}
		${gameData.score[0]}</strong> and <strong>${gameData.players[1]} 
		${gameData.score[1]}</strong></p>`;
	}
})();