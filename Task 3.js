let bonusBalance = 500;
let countBuyThisMonth =  2;
let buySum = 3000;
let standardPercent = 10; // 10%
let highPercent = 20; // 20%
let addFrequentBuyBonus = 5; // 5% добавка за частую покупку

let resultPercent;

if (bonusBalance > 5000) {
    resultPercent = highPercent;
    }
    else {
        resultPercent = standardPercent;
    }

if (countBuyThisMonth > 1) {
    resultPercent = resultPercent + addFrequentBuyBonus;
}

console.log("Процент от покупки: " + resultPercent);