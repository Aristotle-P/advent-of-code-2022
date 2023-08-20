import fs from "fs";
const lines = fs.readFileSync("inputs/day-4.txt", "utf-8").split("\n");
lines.pop();
function getTotal(arr: string[]) {
    let total = 0;
    arr.forEach((line) => {
        const x = line.split(",");
        const left = x[0].split("-").map(num => +num);
        const right = x[1].split("-").map(num => +num);

        if (left[0] <= right[0] && left[1] >= right[1] || right[0] <= left[0] && right[1] >= left[1]) {
            total++;
        }
    })
    return total;
}
console.log(getTotal(lines));
