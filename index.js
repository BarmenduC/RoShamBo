//Constants and Variables

const rulesToggle = document.getElementsByClassName('ruleBox')
let rock = document.querySelector('.rockButton')
let comprock = document.querySelector('.compRockButton')
let paper = document.querySelector('.paperButton')
let comppaper = document.querySelector('.compPaperButton')
let scissor = document.querySelector('.scissorsButton')
let compscissor = document.querySelector('.compScissorsButton')
let computerScore = document.getElementById('compScore').innerHTML
let userScore = document.getElementById('userScore').innerHTML
let gameButton = document.querySelectorAll('.gameButton')
let playerWinText = document.querySelector('.playerWin')
let compWinText = document.querySelector('.compWin')
let noWinText = document.querySelector('.noWin')
let line1 = document.querySelector('.line1')
let line2 = document.querySelector('.line2')
let line3 = document.querySelector('.line3')
let playAgainButton = document.querySelector('.playAgain')
let replayButton = document.querySelector('.replay')
let nextButton = document.querySelector('.nextButton')
let playerSelect = document.querySelector('.playerSelect')
let pcSelect = document.querySelector('.pcSelect')


//Functions

function showRules(){
    console.log(rulesToggle[0])
    rulesToggle[0].classList.add("open")
    // window.location.href = "./Hurray.html";
}

function showNext(){
     window.location.href = "./Hurray.html";
}

function showPrev(){
    window.location.href = "./index.html";
}

function hideRules(){
    rulesToggle[0].classList.remove("open")
}

function incrementScore(winner){
    if(winner === 'user'){
        document.getElementById('userScore').innerHTML = ++userScore
        playerWinText.style.visibility = 'visible'
        playAgainButton.style.visibility = 'visible'
        nextButton.style.visibility = 'visible'
    }
    else if(winner === 'computer'){
        document.getElementById('compScore').innerHTML = ++computerScore
        compWinText.style.visibility = 'visible'
        playAgainButton.style.visibility = 'visible'
    }
    else if(winner === 'none'){
        noWinText.style.visibility = 'visible'
        replayButton.style.visibility = 'visible'
    }
}

function playerPick(e){
    // e.currentTarget.classList.remove('rockButton')
    playerSelect.style.visibility = 'visible'
    if(e.target.id === 'Rock' || e.target.id === 'rockDiv')
    {
        paper.style.visibility = 'hidden'
        scissor.style.visibility = 'hidden'
        rock.classList.remove('rockButton')
        rock.classList.add('playerRockButton')
    }
    if(e.target.id === 'Paper' || e.target.id === 'paperDiv')
    {
        rock.style.visibility = 'hidden'
        scissor.style.visibility = 'hidden'
        paper.classList.remove('paperButton')
        paper.classList.add('playerPaperButton')
    }
    if(e.target.id === 'Scissor' || e.target.id === 'scissorDiv')
    {
        paper.style.visibility = 'hidden'
        rock.style.visibility = 'hidden'
        scissor.classList.remove('scissorButton')
        scissor.classList.add('playerScissorButton')
    }
    line1.style.visibility = "hidden"
    line2.style.visibility = "hidden"
    line3.style.visibility = "hidden"
    line1.classList.add('tempClass')
    // console.log(line1.classList)
    let playpick = e.target.id
    console.log(playpick)
    let compRes = compPick(playpick)
    if(compRes === 'Rock'){
        comprock.style.visibility = 'visible'
    }
    else if(compRes === 'Scissor'){
        compscissor.style.visibility = 'visible'
    }
    else if(compRes === 'Paper'){
        comppaper.style.visibility = 'visible'
    }
}

function compPick(playpick){
    pcSelect.style.visibility = 'visible'
    var rand = Math.random() * 3;
    rand = Math.floor(rand)
    var computpick = gameButton[rand].firstElementChild.id
    // console.log(computpick)

    if(playpick === 'Rock' && computpick === 'Scissor' || playpick === 'Scissor' && computpick === 'Paper' || playpick === 'Paper' && computpick === 'Rock'){
        console.log('Player Wins')
        incrementScore('user')
        if(playpick === 'Rock'){
            rock.classList.add('winner-shadow')
        }
        else if(playpick === 'Scissor'){
            scissor.classList.add('winner-shadow')
        }
        else if(playpick === 'Paper'){
            paper.classList.add('winner-shadow')
        }
    }
    else if(playpick === 'Rock' && computpick === 'Paper' || playpick === 'Paper' && computpick === 'Scissor' || playpick === 'Scissor' && computpick === 'Rock'){
        incrementScore('computer')
        console.log('Computer Wins')
        if(computpick === 'Rock'){
            comprock.classList.add('winner-shadow')
        }
        else if(computpick === 'Scissor'){
            compscissor.classList.add('winner-shadow')
        }
        else if(computpick === 'Paper'){
            comppaper.classList.add('winner-shadow')
        }
    }
    else if(playpick === 'Rock' && computpick === 'Rock' || playpick === 'Paper' && computpick === 'Paper' || playpick === 'Scissor' && computpick === 'Scissor'){
        console.log('Game Tied')
        incrementScore('none')
    }
        
    return computpick
}

// console.log(line1.classList)
// console.log(line2)
// console.log(line3)