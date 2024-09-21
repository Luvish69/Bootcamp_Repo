//Exercise 1
let favouritefood = "Chicken";
let favouritemeal = "Dinner";

console.log(`I eat ${favouritefood} at every ${favouritemeal}`);

//Exercise 2
//Part 1
const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
const myWatchedSeriesLength = myWatchedSeries.length;
const myWatchedSeriesSentence = myWatchedSeries.join(", ").replace(/, ([^,]*)$/, ' and $1');
console.log(`I watched ${myWatchedSeriesLength} series: ${myWatchedSeriesSentence}`);

//Part 2
let index = myWatchedSeries.indexOf("the big bang theory");
myWatchedSeries[index] = "Friends";
console.log(myWatchedSeries);

myWatchedSeries.push("Midnight Mass");
myWatchedSeries.unshift("How I met your Mother");
console.log(myWatchedSeries);
let spliced = myWatchedSeries.splice(1, 1);
console.log("Remaining elements: ", myWatchedSeries);
console.log(myWatchedSeries[1][2]);

console.log(myWatchedSeries);

//Exercise 3
const CelTemperature = 25;

const FarTemperature = CelTemperature / 5 * 9 + 32;
console.log(FarTemperature);