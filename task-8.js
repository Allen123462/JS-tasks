// Доповнити код так, щоб змінні містили часткові копії вихідного масиву fruits.
//  firstTwoEls - масив із перших двох елементів
// nonExtremeEls - масив з усіх елементів крім першого та останнього
// lastThreeEls - масив із трьох останніх елементів

const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

const firstTwoEls = fruits.slice(0,2);
const nonExtremeEls = fruits.slice(1,4);
const lastTreeEls = fruits.slice(2);

console.table(firstTwoEls)
console.table(nonExtremeEls)
console.table(lastTreeEls)