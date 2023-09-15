window.addEventListener('load', function () {
  const startButton = document.getElementById('start-button');
  const restartButton = document.getElementById('restart-button');

  startButton.addEventListener('click', function () {
    startGame();
  });

  function startGame() {
    console.log('start game');
    game = new Game();

    game.start();
  }

  function handleInput(event) {
    const key = event.key;

    console.log(key);

    let keyOptions = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];

    if (keyOptions.includes(key)) {
      event.preventDefault();

      switch (key) {
        case 'ArrowUp':
          game.player.directionY = -1;
          break;
        case 'ArrowDown':
          game.player.directionY = 1;
          break;
        case 'ArrowRight':
          game.player.directionX = 1;
          break;
        case 'ArrowLeft':
          game.player.directionX = -1;
          break;

        default:
          break;
      }
    }
  }

  window.addEventListener('keydown', handleInput);
  window.addEventListener('keyup', (event) => {
    //debugger;
    const key = event.key;

    console.log(key);

    let keyOptions = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];

    if (keyOptions.includes(key)) {
      event.preventDefault();

      switch (key) {
        case 'ArrowUp':
        case 'ArrowDown':
          game.player.directionY = 0;
          break;
        case 'ArrowRight':
        case 'ArrowLeft':
          game.player.directionX = 0;
          break;

        default:
          break;
      }
    }
  });

  restartButton.addEventListener('click', function () {
    // Call the restartGame function when the button is clicked
    restartGame();
  });

  // The function that reloads the page to start a new game
  function restartGame() {
    location.reload();
  }
});

//window.onload = function () {};
