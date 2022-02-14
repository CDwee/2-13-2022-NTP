# Started at 4:59 2-13-2022
// My Javascript 
'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 6) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);    
    console.log(guess, typeof guess);

    // When there is no input
    if(!guess) {
        // document.querySelector('.message').textContent = '⛔️ No number!';
        displayMessage('⛔️ No number!');

        // When player wins
    } else if (guess === secretNumber) {
        // document.querySelector('.message').textContent = '🎉 Correct Number';
        displayMessage('🎉 Correct Park');
        document.querySelector('.number').textContent = secretNumber; 

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if(score > highscore) {
            highscore = score; 
            document.querySelector('.highscore').textContent = highscore;
        }

    // When guess is wrong
    } else if(guess !== secretNumber) {
        if(score > 1) {
            // document.querySelector('.message').textContent =
            //  guess > secretNumber ? '📈 Too high!' : '📈 Too low!';
            document.querySelector('.score').textContent = score;
        } else {
            // document.querySelector('.message').textContent = '💥 You lost the game!';
            displayMessage('💥 You lost the game!');
            document.querySelector('.score').textContent = 0;
        }
    }

    // When guess is too high
    // } else if (guess > secretNumber) {
    //     if(score > 1) {
    //         document.querySelector('.message').textContent = '📈 Too high!';
    //         score--;
    //         document.querySelector('.sco re').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = '💥 You lost the game!';
    //         document.querySelector('.score').textContent = 0;
    //     }

    // // When guess is too low
    // } else if (guess < secretNumber) { 
    //      if(score > 1) {
    //         document.querySelector('.message').textContent = '📈 Too low!';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = '💥 You lost the game!';
    //         document.querySelector('.score').textContent = 0;
    //     }
    // }
});

// When Again! button is pressed
document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 6) + 1;

    // document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage( 'Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});

// My HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="NTP style.css" />
    <title>Guess The National Park!</title>
  </head>
  <body>
    <header>
      <h1>Guess The Park!</h1>
      <button class="btn btn--again">Play Again!</button>
      <div class="number">?</div>
    </header>
    <main>
      <section class="left">
      </section>
      <section class="right">
        <button class="batn batn--park1">Arches National Park</button>
        <button class="batn batn--park2"> National Park</button>
        <button class="batn batn--park3">Hawaii Volcanos National Park</button>
        <button class="batn batn--park4">Katmai National Park</button>
        <button class="batn batn--park5">Big Bend National Park</button>
        <button class="batn batn--park6">Yellowstone National Park</button>
        <p class="message">Start guessing...</p>
        <p class="label-score">💯 Score: <span class="score">20</span></p>
        <p class="label-highscore">
          🥇 Highscore: <span class="highscore">0</span>
        </p>
        <picture></picture>
      </section>
    </main>
    <script src="NTP script.js"></script>
  </body>
</html>


// My CSS

@import url("https://fonts.googleapis.com/css?family=Press+Start+2P&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  font-size: 62.5%;
  box-sizing: border-box;
}

body {
  font-family: "Press Start 2P", sans-serif;
  background-image: linear-gradient(to top left, #753682 0%, #bf2e34 100%);
}

/* LAYOUT */
header {
  position: relative;
  height: 35vh;
  border-bottom: 7px solid #eee;
}

main {
  height: 65vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.left {
  position: relative;
  left: 50%;
  right: 50%;
  bottom: 80%;
}

.right {
  width: 52rem;
  font-size: 2rem;
}

/* ELEMENTS STYLE */
h1 {
  font-size: 4rem;
  text-align: center;
  position: absolute;
  width: 100%;
  top: 52%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.number {
  background: #eee;
  color: #333;
  font-size: 6rem;
  width: 15rem;
  padding: 3rem 0rem;
  text-align: center;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 50%);
}

.between {
  font-size: 1.4rem;
  position: absolute;
  top: 2rem;
  right: 2rem;
}

.again {
  position: absolute;
  top: 2rem;
  left: 2rem;
}

.guess {
  background: none;
  border: 4px solid #eee;
  font-family: inherit;
  color: inherit;
  font-size: 5rem;
  padding: 2.5rem;
  width: 25rem;
  text-align: center;
  display: block;
  margin-bottom: 3rem;
}

.btn {
  border: none;
  background-color: #eee;
  color: #222;
  font-size: 2rem;
  font-family: inherit;
  padding: 2rem 3rem;
  cursor: pointer;
}

.btn:hover {
  background-color: #ccc;
}

.message {
  margin-bottom: 8rem;
  height: 3rem;
}

.label-score {
  margin-bottom: 2rem;
}

.batn {
  border: none;
  background-color: #eee;
  color: #222;
  font-size: 2rem;
  font-family: inherit;
  padding: 2rem 3rem;
  cursor: pointer;
}
// Ended at 10:15 2-13-2022
