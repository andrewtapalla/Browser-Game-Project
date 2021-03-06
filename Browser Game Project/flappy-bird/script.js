document.addEventListener('DOMContentLoaded' , () => {
    const bird = document.querySelector('.bird')
    const gameDisplay = document.querySelector('.container')
    const ground = document.querySelector('.ground-moving')

    let birdLeft = 220
    let birdBottom = 100
    let gravity = 2
    let isGameOver = false
    let gap = 430
    let score = -1
    let flyUp = new Audio;
    let point = new Audio

flyUp.src = "/Users/andrewtapalla/Desktop/Browser Game Project/wing.mp3";
point.src = "/Users/andrewtapalla/Desktop/Browser Game Project/point.mp3";


// START GAME
function startGame() {
    birdBottom -= gravity
    bird.style.bottom = birdBottom + 'px'
    bird.style.left = birdLeft + 'px'
}
let gameTimerId = setInterval(startGame, 20)

// JUMP
function jump() {
    flyUp.play()
    if (birdBottom < 500) birdBottom += 50
    bird.style.bottom = birdBottom + 'px'
}
document.addEventListener('click', jump)

// PIPES
function generatePipes() {
    let moveLeft = 500
    let randomHeight = Math.random() * 60
    let southPipe = randomHeight
    const pipe = document.createElement('div')
    const northPipe = document.createElement('div')
    if (!isGameOver) {
        point.play()
        if (!isGameOver === true) {
            score++;
        }
        pipe.classList.add('pipe')
        northPipe.classList.add('northPipe')
    }
    gameDisplay.appendChild(pipe)
    gameDisplay.appendChild(northPipe)
    pipe.style.left = moveLeft + 'px'
    northPipe.style.left = moveLeft + 'px'
    pipe.style.bottom = southPipe + 'px'
    northPipe.style.bottom = southPipe + gap + 'px'

// PIPES MOVING
function movePipes() {
    moveLeft -=4
    pipe.style.left = moveLeft + 'px'
    northPipe.style.left = moveLeft + 'px'

    if (moveLeft === -80) {
        clearInterval(timerId)
        gameDisplay.removeChild(pipe)
        gameDisplay.removeChild(northPipe)
    }
 
// COLLISION
        if (
            moveLeft > 200 && moveLeft < 280 && moveLeft === 220 &&
            (birdBottom < southPipe + 153 || birdBottom > southPipe + gap -200)||
            birdBottom === 0 
            ) {
            gameOver()
            clearInterval(timerId)
        }
    }
    // point.play()
    let timerId = setInterval(movePipes, 20) 
    if (!isGameOver) setTimeout(generatePipes, 2000)

}

generatePipes()
    
// END OF GAME
function gameOver() {
    clearInterval(gameTimerId);
    alert("Game over! Your score is: " + score);
    isGameOver = true
    document.removeEventListener('click', jump);
    ground.classList.add('ground');
    ground.classList.remove('flappy-ground');
}

})

