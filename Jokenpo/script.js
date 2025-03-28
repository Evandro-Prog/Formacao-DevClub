const result = document.querySelector(".result")
const humanScore = document.querySelector("#human-score")
const machineScore = document.querySelector("#jarvis-score")


let humanScoreNumber = 0
let machineScoreNunber = 0




const playHuman = (humanChoice) => {

    playTheGame(humanChoice, playMachine())

}


const playMachine = () => {
    const choices = ['rock', 'paper', 'scissor']

    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]
}

const playTheGame = (human, machine) => {

    console.log(`Humano: ${human} Maquina: ${machine}`)

    if (human === machine) {
        result.innerHTML = "Empate!"

    } else if (human === 'paper' && machine === 'rock' ||
        human === 'rock' && machine === 'scissor' ||
        human === 'scissor' && machine === 'paper') {
        
        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber    
        result.innerHTML = "Você ganhou!"

    } else {
        
        machineScoreNunber++
        machineScore.innerHTML = machineScoreNunber
        result.innerHTML = "Jarvis ganhou"
    }

}