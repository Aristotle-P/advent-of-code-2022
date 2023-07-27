import fs from "fs";

const lines = fs.readFileSync("day-3.txt", "utf-8").split("\n");
lines.pop();


lines.forEach(line => {
    const rLine = []; 
    const lLine = []; 
    const lineArr = line.split("");
    lineArr.forEach((x, i) => {
        if (i < line.length / 2) {
            return lLine.push(x);
        }
        rLine.push(x)
    })
})
