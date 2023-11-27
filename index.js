//Constants and Variables

let rulesToggle = document.getElementsByClassName('ruleBox')

//Functions

function showRules(){
    console.log(rulesToggle[0])
    rulesToggle[0].classList.add("open")
    // window.location.href = "./Hurray.html";
}

function hideRules(){
    rulesToggle[0].classList.remove("open")
}