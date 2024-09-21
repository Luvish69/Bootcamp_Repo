const fruits = ["Banana", "Apples", "Oranges", "Blueberries"];

fruits.shift()
fruits.sort()
fruits.push("Kiwi")

let deletedItem = fruits.splice(0, 1);
console.log(deletedItem)
fruits.reverse()

console.log(fruits)

