import fs from "fs";

const lines = fs.readFileSync("day-3.txt", "utf-8").split("\n");
lines.pop();


const dupes = [];
const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 
    'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const groups = [[]]; 
let groupIndex = 0;
lines.forEach((line, i) => {
    const lineArr = line.split("");
    if (groups[groupIndex].length === 3) {
        groups.push([]);
        groupIndex++
        groups[groupIndex].push(lineArr);
        return;
    }
    groups[groupIndex].push(lineArr);
})
groups.forEach(group => {
    const lineDupes = [];
    group[0].forEach(char => {
        if (lineDupes.includes(char)) {
            return;
        }
        if (group[1].includes(char) && group[2].includes(char)) {
            dupes.push(char);
            lineDupes.push(char);
            return;
        }
    })
})
let sum = 0;
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
