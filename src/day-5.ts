import fs from "fs";
const lines = fs.readFileSync("inputs/day-5-tmp.txt", "utf-8").split("\n");
lines.pop();
const stacks = [];
function createStacks(input: String[]) {
    let x = false;
    let i = 0;
    while (x === false) {
        if (input[i].includes("1")) {
            break;
        }
        stacks.push(input[i]);
        input.shift();
        i++;
    }
}
createStacks(lines);
console.log(stacks);
console.log(lines);
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
