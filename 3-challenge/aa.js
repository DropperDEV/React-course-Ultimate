let sum = 0
const percentage = [10,10]
const bill = 100

for (let i = 0; i < percentage.length; i++) {  sum += percentage[i];}

console.log(sum)
const media = sum / percentage.length;
const total = (bill / 100) * media ;
console.log(media)
console.log(total)