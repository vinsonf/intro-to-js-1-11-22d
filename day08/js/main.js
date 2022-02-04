class Player {

    constructor(up, down, left, right, color) {
     
        this.left = 0;
        this.top = 0;

        this.pressed = {
            up: false,
            down: false,
            left: false,
            right: false
        }



        this.element = document.createElement('div');
        this.element.style.width = '50px';
        this.element.style.height = '50px';
        this.element.style.backgroundColor = color;
        this.element.style.borderRadius = '50%';


        document.body.appendChild(this.element);


        this.element.style.position = 'absolute';

        document.addEventListener('keydown', (event) => {
            console.log(event.code);
            switch (event.code) {
                case up:
                    this.pressed.up = true;
                    break;
                case  left:
                    this.pressed.left = true;
                    break;
                case down:
                    this.pressed.down = true;
                    break;
                case right:
                    this.pressed.right = true;
            }
        });

        document.addEventListener('keyup', (event) => {
            switch (event.code) {
                case up:
                    this.pressed.up = false;
                    break;
                case left:
                    this.pressed.left = false;
                    break;
                case down:
                    this.pressed.down = false;
                    break;
                case right:
                    this.pressed.right = false;
            }
        })
        
    }

    move(x, y) { 
        this.left += x;
        this.top += y;
       
        this.element.style.left = this.left + 'px';
        this.element.style.top = this.top + 'px';
    }

    makeMove() {
        if (this.pressed.up) {
            this.move(0, -5);
        }
        if (this.pressed.down) {
            this.move(0, 5);
        }
        if (this.pressed.left) {
            this.move(-5, 0);
        }
        if (this.pressed.right) {
            this.move(5, 0);
        }
    }

}

const myPlayer = new Player('KeyW', 'KeyS', 'KeyA', 'KeyD', 'red');
const player2 = new Player('KeyI', 'KeyK', 'KeyJ', 'KeyL', 'blue');

function gameLoop() {
   myPlayer.makeMove();
   player2.makeMove();
    requestAnimationFrame(gameLoop);
}

gameLoop();


