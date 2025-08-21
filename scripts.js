let yrScore = 0;
let opntScore = 0;
const imgCharacter = document.createElement("img")

/*
    yrScore -> Camel Case
    GAME_OPTIONS -> Snake Case
*/

// ENUMS
const GAME_OPTIONS = {
    PEDRA: "pedra",
    PAPEL: "papel",
    TESOURA: "tesoura"
}

const play = (playerChoice) => {
    const matchResult = document.querySelector(".match-result");
    const yourScore = document.getElementById("your-scores");
    const oponentScore = document.getElementById("oponent-scores");
    const containerImgCharacter = document.querySelector(".container-img-character");

    const options = [GAME_OPTIONS.PEDRA, GAME_OPTIONS.PAPEL, GAME_OPTIONS.TESOURA];
    const oponentChoice = options[Math.floor(Math.random() * 3)];

    let result = "";

    if(playerChoice === oponentChoice) {
        result = "Empate!"
    } else if(
        (playerChoice === GAME_OPTIONS.PEDRA && oponentChoice === GAME_OPTIONS.TESOURA) ||
        (playerChoice === GAME_OPTIONS.PAPEL && oponentChoice === GAME_OPTIONS.PEDRA) ||
        (playerChoice === GAME_OPTIONS.TESOURA && oponentChoice === GAME_OPTIONS.PAPEL)
    ) {
        result = "Você venceu!"
        yrScore++
    } else {
        result = "Você perdeu!"
        opntScore++
    };

    if(result === "Você venceu!") {
        containerImgCharacter.appendChild(imgCharacter);
        imgCharacter.src = "img/happy-face.png"
        imgCharacter.width = "50"
    } else if(result === "Você perdeu!") {
        containerImgCharacter.appendChild(imgCharacter);
        imgCharacter.src = "img/sad-face.png"
        imgCharacter.width = "50"
    } else {
        containerImgCharacter.removeChild(imgCharacter);
    };

    // Atualiza o resultado da disputa
    matchResult.innerHTML = `Você escolheu ${playerChoice} e 
    o Oponente escolheu ${oponentChoice}. ${result}`;

    // Atualiza os valores na tela
    yourScore.innerHTML = yrScore;
    oponentScore.innerHTML = opntScore;
};