

function totalNumberSold(applesSoldList) {
	let applesSold = 0;
	for(let i = 0; i < applesSoldList.length; i++) {
		let currentItem = applesSoldList[i];
		applesSold += currentItem.qty;
	}
	return applesSold;
}

function totalIncome(applesSoldList) {
	let totalIncome = 0;
	for(let i = 0; i < applesSoldList.length; i++) {
		let currentItem = applesSoldList[i];
		totalIncome += currentItem.price;
	}
	return totalIncome.toFixed(2);
}

function totalIncomeGreenApples(applesSoldList){
	let totalIncomeGreenApples = 0;
	let greenApplesAdded = {};
	for(let i = 0; i < applesSoldList.length; i++) {
		let currentItem = applesSoldList[i];
		let color = currentItem.color;
		if(color === 'green') {
			totalIncomeGreenApples += currentItem.price;
		}
	}

	return totalIncomeGreenApples.toFixed(2);
}

function totalProfit(applesSoldList, applePriceMap){
	let totalProfit = 0;

	for(let i = 0; i < applesSoldList.length; i++) {
		let currentItem = applesSoldList[i];

		if(currentItem.color === 'red') {
			totalProfit += applePriceMap.red;
		} if(currentItem.color === 'yellow') {
			totalProfit += applePriceMap.yellow;
		} if(currentItem.color === 'green') {
			totalProfit += applePriceMap.green;
		}
	}
	return totalProfit.toFixed(2);
}

// -- extra functions...

// function totalPerColorSold(apples, color) {
// 	let colorsAdded = {};
// 	let colorCount = 0;

// 	for(let i = 0; i < apples.length; i++) {
// 		let currentApple = apples[i];
// 		let color = currentApple.color;

// 		if(colorsAdded[color] == undefined) {
// 			colorsAdded[color] = 0;
// 		} else {
// 			colorsAdded[color] = 0;
// 		}

// 	}

// 	for(let key in colorsAdded) {
// 		console.log(colorsAdded[color]);
// 	}
// 	return colorCount;
// }

function totalIncomePerColor(apples, color) {
	return 0;
}

function totalProfitPerColor(apples, color, costMap) {
	return 0;
}

function mostProfitableColor(apples, color, costMap) {
	return 0;
}