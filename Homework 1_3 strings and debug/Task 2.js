let accountStatus = 'vip'; //'extended', 'premium', 'vip'
let username = 'Mila';
let cashbackPercentage; // regular получают 10 % от суммы покупок, extended — 15 %, premium — 20 %, vip — 30 %.


//switch для проверки значений accountStatus
switch (accountStatus) {
    case 'extended':
        cashbackPercentage = 15;
        break;
    case 'premium':
        cashbackPercentage = 20;
        break;
    case 'vip':
        cashbackPercentage = 30;
        break;
    default:
        cashbackPercentage = 10;
        displayStatus = 'regular';
}

console.log(`${username} | ${accountStatus} аккаунт`);
console.log(`Вы получаете ${cashbackPercentage} % с покупок на бонусный счёт`);
