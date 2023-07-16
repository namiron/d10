
//Задача. Дано історію цін на цінні папери за деякий період (згенерувати від 1 до 10000)




let randomResults = (max, min) => min + Math.floor(Math.random() * max);


function generateRandomPriceAction(arrLength, max, min) {
	const arrayPrice = [];
	for (let i = 0; i < arrLength; i++) {
		arrayPrice.push(randomResults(max, min))
	}
	return arrayPrice
}

let arrayPrice = generateRandomPriceAction(10, 10000, 1)
console.log(arrayPrice);


console.log(arrayPrice);

//  1)Сформувати новий масив, у якому є тільки ті, що більші за 1000 грн.

let arrayPriceNew = arrayPrice.filter(e => e > 1000)

console.log(arrayPriceNew);

// 2)Сформувати новий масив, у якому є номери тільки тих, що більші за 1000 грн.

let arrayPriceNew1000 = arrayPriceNew.map((e, i, arr) => i);
console.log(arrayPriceNew1000);

//  6)Визначити, чи є ціна, що менше 1000
/* let max = arr.reduce((prevMax, el) => (el > prevMax ? el : prevMax))// let max = Math.max(...arr) */
let arrayNewMinPrice = arrayPrice.reduce((prevMin, e) => (e < 1000 ? e : prevMin));

console.log(arrayNewMinPrice);


// 7)Визначати, чи усі ціни більше за 1000

let arrayNewMaxPrice = arrayPrice.reduce((previousValue, e) => (e > 1000 ? e : previousValue));

console.log(arrayNewMaxPrice);


// 9)Підрахувати суму цін, що більше за 1000

let arraySumPrice = arrayPrice.reduce((previousValue, e, i, arr) => (e > 1000 ? previousValue + e : previousValue), 0)

console.log(arraySumPrice);

//      10)Знайти першу ціну, що більше за 1000

let firstArrBiggest = arrayPrice.find((e, i, arr) => e > 1000 ? e : arr)
console.log(firstArrBiggest);

//      11)Знайти індекс першої ціни, що більше за 1000

let firstIndexBigger = arrayPrice.findIndex((e, i, arr) => e > 1000 ? i : arr)

console.log(firstIndexBigger);

//   13)Знайти останню ціну, що більше за 1000

let lastIndexArr = arrayPrice.findLastIndex((e, i, prevArr) => e > 1000 ? i : prevArr)

console.log(lastIndexArr);

//      12)Знайти останню ціну, що більше за 1000

let lastElArr = arrayPrice.findLast((e, i, prevArr) => e > 1000 ? e : prevArr)

console.log(lastElArr);


//14.Заполнить массив нулями, кроме первого и последнего элементов, которые должны быть равны единице.
let arr1 = new Array(7).fill(0, 0);
arr1.push(1);
arr1.unshift(1)

console.log(arr1);
//15.Заполнить массив нулями и единицами, при этом данные значения чередуются, начиная с нуля.

for (let i = 0; i < arr1.length; i++) {
	if (arr1[i] === 0) {
		arr1.splice(i + 1, 0, 1)
		i++
	}
}
console.log(arr1);


