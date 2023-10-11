import fs from "fs";
const lines = fs.readFileSync("inputs/day-4.txt", "utf-8").split("\n");
lines.pop();
function getContains(arr: string[]) {
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
function getOverlap(arr: string[]) {
    let total = 0;
    arr.forEach((line) => {
        const x = line.split(",");
        const left = x[0].split("-").map(num => +num);
        const right = x[1].split("-").map(num => +num);

        if (left[0] >= right[0] || left[1] >= right[0]) {
            if (right[1] >= left[1] || right[1] >= left[0]) {
                return total++;
            }
        }
    })
    return total;
}
// 5-7,7-9 
// 7-9,5-7 
// 3-7,2-8
// 4-6,6-6
// 2-6,4-8
console.log(getContains(lines));
console.log(getOverlap(lines));
