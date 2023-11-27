//Constants and Variables

const rulesToggle = document.getElementsByClassName('ruleBox')
let rock = document.getElementsByClassName('rockButton')
let computerScore = document.getElementById('compScore').innerHTML
let userScore = document.getElementById('userScore').innerHTML



//Functions

function showRules(){
    console.log(rulesToggle[0])
    rulesToggle[0].classList.add("open")
    // window.location.href = "./Hurray.html";
}

function hideRules(){
    rulesToggle[0].classList.remove("open")
}

function incrementScore(){
    document.getElementById('compScore').innerHTML = ++computerScore
    document.getElementById('userScore').innerHTML = ++userScore
}

function playerPick(){

}