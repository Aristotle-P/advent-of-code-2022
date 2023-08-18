import fs from "fs";
const lines = fs.readFileSync("inputs/day-4.txt", "utf-8").split("\n");
function getTotal(arr) {
    for (let i = 0; i<arr.length / 2; i++) {
        const x = lines[i].split(",");
        const y = x[0].split("-");
        const z = x[1].split("-");
        if (z[0] <= y[0] && z[1] >= y[1]) {
            total++
        }
        if (y[0] <= z[0] && y[1] >= z[1]) {
            total++
        }
    }
}
let total = 0;
console.log(total);
getTotal(lines);
// let total = 0;
// const x = lines[0].split(",");
// const y = x[0].split("-");
// const z = x[1].split("-");
// let total = 0;
// if (x[0] <= y[0] && x[1] >= y[1]) {
//     total++
// }
// if (y[0] <= x[0] && y[1] >= x[1]) {
//     total++
// }
