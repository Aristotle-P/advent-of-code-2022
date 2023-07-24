import fs from "fs";

const results = fs.readFileSync("day-2.txt", "utf-8");
const matches = results.split("\n");
matches.pop();
function getInputPoints(input: string) {
    if (input === 'A') {
        return 1
    }
    if (input === 'B') {
        return 2
    }
    if (input === 'C') {
        return 3
    }
}

function matchResultCalculator(input: string) {
    if (input === 'X') {
       return 0; 
    }
    if (input === 'Y') {
       return 3; 
    }
    if (input === 'Z') {
        return 6;
    }
} 
// win = 6 points, draw = 3 points, loss = 0 points
// A = Rock
// B = Paper 
// C = Scissors 
//
// X = Rock
// Y = Paper
// Z = Scissors
function determineScore(inputOne: string, inputTwo: string) {
    if (inputTwo === 'Y') {
        return getInputPoints(inputOne) + 3;
    }

    if (inputTwo === 'X') {
        if (inputOne === 'A') {
            return getInputPoints('C');
        }
        if (inputOne === 'B') {
            return getInputPoints('A');
        }
        return getInputPoints('B');
    }

    if (inputTwo === 'Z') {
        if (inputOne === 'A') {
            return getInputPoints('B') + 6;
        }
        if (inputOne === 'B') {
            return getInputPoints('C') + 6;
        }
        return getInputPoints('A') + 6;
    }
}
function caclculateWins() {
    let totalScore = 0;
    matches.forEach(match => {
        const inputs = match.split(" ");
        const score = determineScore(inputs[0], inputs[1]);
        totalScore = totalScore + score;
    })
    console.log(totalScore);
}
caclculateWins();
