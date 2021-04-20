(function () {

    var minNumber = 1;
    var maxNumber = 100;
    var aiNumbersLength = 16;

    var aiNumbers = [];
    var userNumbers = []

    function askUserNumbers() {
        var userlengthMax = maxNumber -  minNumber - aiNumbersLength;

        var gameOver = false

        while (userNumbers.length <= userlengthMax && gameOver === false) {
            var userInput = prompt("Inserisci un nemero tra" + minNumber + "e" + maxNumber + ".(" + userNumbers.length + ")");

            if (userNumbers == null) {
                gameOver = true;
            }

            if (userNumbers.length === userlengthMax) {
                gameOver = true

                alert("Hai Vinto!");
            }

            var inputIsValid = checkUserInput(userInput);

            if (!inputIsValid && inputIsValid == "Game Over") {
                alert("Numero inserito non valido")

            } else if (inputIsValid === "Game Over") {
                gameOver = true

                alert("Hai perso dopo aver inserito" + userNumbers.Length + "numeri.");

            } else {
                userNumbers.push(parseInt(userInput));
            } 
        }
    }

    function checkUserInput(inputValue) {
        var result = true
        var numberToCheck = parseInt(inputValue)

        if (isNaN(numberToCheck)) {
            return false;
        }

        if (numberToCheck < minNumber || numberToCheck > maxNumber) {
            return false;
        }

        if (userNumbers.indexOf(numberToCheck) > -1) {
            return false;
        }

        if (aiNumbers.indexOf(numberToCheck) > -1) {
            return "Game Over";
        }


        return result
    }

    function createAiNumbers() {
        while (aiNumbers < aiNumbersLength){
            var numeroRandom = generateRandomNumbers(1, 100);

            if (aiNumbers.indexOf(numeroRandom) === - 1) {
                aiNumbers.push(numeroRandom)
            }

            console.log(aiNumbers);
        }        
    }

    function generateRandomNumbers(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    createAiNumbers();
    askUserNumbers();

})()

