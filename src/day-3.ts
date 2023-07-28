import fs from "fs";

const lines = fs.readFileSync("day-3.txt", "utf-8").split("\n");
lines.pop();


const lLine = []; 
const rLine = []; 
const dupes = [];
const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 
    'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
lines.forEach(line => {
    const lineArr = line.split("");
    lineArr.forEach((x, i) => {
        if (i < line.length / 2) {
            return lLine.push(x);
        }
        return rLine.push(x)
    })
    const lLineDupes = [];
    lLine.forEach(char => {
        if (lLineDupes.includes(char)) {
            return;
        }
        if (rLine.includes(char)) {
            dupes.push(char);
            return lLineDupes.push(char);
        }
    })
    lLine.length = 0;
    rLine.length = 0;
})
let sum = 0;
console.log(dupes);
dupes.forEach(dupe => {
    alphabet.forEach((char, i) => {
        if (dupe === char.toUpperCase()) {
            return sum = sum + i + 27;
        } 

        if (dupe === char.toLowerCase()) {
            return sum = sum + i + 1;
        } 
        return;
    })
})
console.log(sum);
