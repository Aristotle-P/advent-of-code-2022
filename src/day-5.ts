import fs from "fs";
const lines = fs.readFileSync("inputs/day-5-tmp.txt", "utf-8").split("\n");
lines.pop();
const stacks = [[], [], []];
const instructions = [];

// Needs to be refactored
function createStacks(input: string[]) {
    const regex = /[A-Z]/
    input.forEach(x => {
        if (!regex.test(x)) {
            return;
        }
        
        if (regex.test(x[1])) {
                stacks[0].push(x[1]);
        }

        if (regex.test(x[5])) {
                stacks[1].push(x[5])
        }

        if (regex.test(x[9])) {
                stacks[2].push(x[9])
        }
    });
}

function filterInstructions(input: string[]) {
    const regex = /[1-9]/
    const unfiltered = [];
    input.forEach(line => {
        if (regex.test(line)) {
            unfiltered.push(line);
        }
    })
    unfiltered.shift();
    unfiltered.forEach(line => {
        const filteredLine = line.replace(/[^\d]/g, '')
        instructions.push(filteredLine);
    })
}

createStacks(lines);
filterInstructions(lines);

function sortStacks(stacks: Array<String[]>, commands: number[]) {
    commands.forEach(command => {
        for (let i = 1; i <= command[0]; i++) {
            const node = stacks[command[1] -1].shift();
            stacks[command[2] -1].unshift(node);
        }
    })
}

sortStacks(stacks, instructions);
console.log(stacks);
// Test input visualized
//     [D]    
// [N] [C]    
// [Z] [M] [P]
//  1   2   3 
//
// move 1 from 2 to 1
// move 3 from 1 to 3
// move 2 from 2 to 1
// move 1 from 1 to 2
