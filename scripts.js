let yrScore = 0;
let opntScore = 0;

function play(playerChoice) {
    const finalResult = document.querySelector(".final-result");
    const yourScore = document.getElementById("your-scores");
    const oponentScore = document.getElementById("oponent-scores");

    const options = ["pedra", "papel", "tesoura"];
    const oponentChoice = options[Math.floor(Math.random() * 3)];

    let result = "";

    if(playerChoice === oponentChoice) {
        result = "Empate!"
    } else if(
        (playerChoice === "pedra" && oponentChoice === "tesoura") ||
        (playerChoice === "papel" && oponentChoice === "pedra") ||
        (playerChoice === "tesoura" && oponentChoice === "papel")
    ) {
        result = "Você venceu!"
        yrScore++
    } else {
        result = "Você perdeu!"
        opntScore++
    }

    // Atualiza o resultado da disputa
    finalResult.innerHTML = `Você escolheu ${playerChoice} e 
    o Oponente escolheu ${oponentChoice}. ${result}`

    // Atualiza os valores na tela
    yourScore.innerHTML = yrScore;
    oponentScore.innerHTML = opntScore;
}