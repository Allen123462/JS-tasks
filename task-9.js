// Написати функцію logItems(array), яка отримує масив і використовує цикл for,
// який для кожного елемента масиву буде виводити до консолі повідомлення 
// у форматі[номер елемента]-[значення елемента].Нумерація повинна починатися з 1.
// Наприклад, для першого елемента масиву['Alex', 'Poly', 'Robert'] з індексом 0 
// буде виведено '1 - Alex', а для індексу 2 виведе '3 - Robert'.

const logItems = function (array) {
    for (let i = 0; i < array.length ;i+=1)
        console.log(`${i+1} - ${array[i]}`)
 };
   /*
  * Викличте функції для перевірки працездатності вашої реалізації.
  */
  logItems(['Alex', 'Poly', 'Robert', 'Lada', 'Jay', 'Kiril']);
 logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
