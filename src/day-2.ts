import fs from "fs";

const results = fs.readFileSync("day-2.txt", "utf-8");
const matches = results.split("\n");
matches.pop();
function getInputPoints(input: string) {
    if (input === 'X') {
        return 1
    }
    if (input === 'Y') {
        return 2
    }
    if (input === 'Z') {
        return 3
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
    if (inputOne === 'A' && inputTwo === 'Y') {
        return getInputPoints(inputTwo) + 6;
    }
    if (inputOne === 'A' && inputTwo === 'X') {
        return getInputPoints(inputTwo) + 3;
    }
    if (inputOne === 'A' && inputTwo === 'Z') {
        return getInputPoints(inputTwo) + 0;
    }
    if (inputOne === 'B' && inputTwo === 'Z') {
        return getInputPoints(inputTwo) + 6;
    }
    if (inputOne === 'B' && inputTwo === 'Y') {
        return getInputPoints(inputTwo) + 3;
    }
    if (inputOne === 'B' && inputTwo === 'X') {
        return getInputPoints(inputTwo) + 0;
    }
    if (inputOne === 'C' && inputTwo === 'Y') {
        return getInputPoints(inputTwo) + 0;
    }
    if (inputOne === 'C' && inputTwo === 'Z') {
        return getInputPoints(inputTwo) + 3;
    }
    if (inputOne === 'C' && inputTwo === 'X') {
        return getInputPoints(inputTwo) + 6;
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
