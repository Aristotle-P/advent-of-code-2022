import fs from "fs";
const lines = fs.readFileSync("inputs/day-5-tmp.txt", "utf-8").split("\n");
lines.pop();
const stacks = [[], [], [], [], [], [], [], [], []];
const instructions = [];

function createStacks(input: string[]) {
    const regex = /[A-Z]/
    const indices = [1, 5, 9, 13, 17, 21, 25, 29, 33];
    input.forEach(x => {
        if (!regex.test(x)) {
            return;
        }
        indices.forEach(index => {
            const stackIndex = indices.indexOf(index);
            if (regex.test(x[index])) {
                stacks[stackIndex].push(x[index]);
            }
        })
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
        const x = line.split(" ");
        const nodeOne = parseInt(x[1], 10);
        const nodeTwo = parseInt(x[3], 10);
        const nodeThree = parseInt(x[5], 10);
        instructions.push([nodeOne, nodeTwo, nodeThree]);
    })
}

createStacks(lines);
filterInstructions(lines);

function sortStacks(stacks: Array<String[]>, commands: Array<number[]>) {
    commands.forEach(command => {
        for (let i = 1; i <= command[0]; i++) {
            const node = stacks[command[1] -1].shift();
            stacks[command[2] -1].unshift(node);
        }
    })
}

function sortStacksAlt(stacks: Array<String[]>, commands: Array<number[]>) {
    commands.forEach(command => {
        const nodes = [];
        for (let i = 1; i <= command[0]; i++) {
            const node = stacks[command[1] -1].shift();
            nodes.push(node);
        }
        console.log(`nodes length is: ${nodes.length}`);
        for (let i = 0; i < nodes.length +1; i++) {
            console.log(nodes, i);
            const node = nodes.pop();
            stacks[command[2] -1].unshift(node);
            console.log(nodes, i);
        }
    })
}
sortStacksAlt(stacks, instructions);
console.log(stacks);
//     [D]    
// [N] [C]    
// [Z] [M] [P]
//  1   2   3 
//
// move 1 from 2 to 1
// move 3 from 1 to 3
// move 2 from 2 to 1
// move 1 from 1 to 2
