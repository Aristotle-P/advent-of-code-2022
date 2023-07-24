import * as fs from "fs";

const results = fs.readFileSync('input-1.txt', 'utf8');

const items = results.split("\n");
let i = 0;
const filteredItems = [[]];
items.forEach(item => {
    if (item !== '') {
        return filteredItems[i].push(item);
    }
    i++
    return filteredItems.push([]);
})

let sum = 0;
for (i=0;i<3;i++) {
    let tempSum = 0;
    filteredItems.forEach((itemArr, index) => {
        let currentSum = 0;
        itemArr.forEach(item => {
            const x = Number(item);
            currentSum = currentSum + x;
        })
        if (currentSum > tempSum) {
            tempSum = currentSum;
            filteredItems.splice(index, 1);
        }
    })
    sum = tempSum + sum;
}
console.log(sum);
