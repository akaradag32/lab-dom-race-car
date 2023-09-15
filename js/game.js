class Game {
  constructor() {
    this.startScreen = document.getElementById("game-intro");
    this.gameScreen = document.getElementById("game-screen");
    this.gameEndScreen = document.getElementById("game-end");

    this.player = null;

    this.height = 600;
    this.width = 500;

    this.player = new Player(
      this.gameScreen,
      this.width / 2,
      this.top / 2,
      40,
      80,
      "./images/car.png"
    );

    this.obstacles = [];

    this.score = 0;
    this.lives = 3;

    this.gameIsOver = false;
  }

  start() {
    this.startScreen.style.display = "none";

    this.gameScreen.style.display = "block";
    this.gameScreen.style.height = "${this.height}px";
    this.gameScreen.style.width = "${this.width}px";

    this.gameLoop();
  }

  gameLoop() {
    console.log("Game is on loop");

    if (this.gameIsOver) {
      return;
    }

    this.update();

    window.requestAnimationFrame(() => this.gameLoop());
  }

  update() {}
}
