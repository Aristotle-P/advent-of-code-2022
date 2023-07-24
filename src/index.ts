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
filteredItems.forEach(itemArr => {
    let currentSum = 0;
    itemArr.forEach(item => {
        const x = Number(item);
        currentSum = currentSum + x;
    })
    if (currentSum > sum) {
        sum = currentSum;
    }
})
console.log(sum);
