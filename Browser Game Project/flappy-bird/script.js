document.addEventListener('DOMContentLoaded' , () => {
    const bird = document.querySelector('.bird')
    const gameDisplay = document.querySelector('.container')
    const ground = document.querySelector('.ground-moving')

    let birdLeft = 220
    let birdBottom = 100
    let gravity = 2
    let isGameOver = false
    let gap = 430
    let score = 0

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
        //EXECUTE POINT HERE?
        pipe.classList.add('pipe')
        northPipe.classList.add('northPipe')
    }
    gameDisplay.appendChild(pipe)
    gameDisplay.appendChild(northPipe)
    pipe.style.left = moveLeft + 'px'
    northPipe.style.left = moveLeft + 'px'
    pipe.style.bottom = southPipe + 'px'
    northPipe.style.bottom = southPipe + gap + 'px'

