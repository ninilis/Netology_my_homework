let accountStatus = 'vip'; //'extended', 'premium', 'vip'
let username = 'Mila';
let cashbackPercentage; // regular получают 10 % от суммы покупок, extended — 15 %, premium — 20 %, vip — 30 %.
let displayStatus;

//switch для проверки значений accountStatus
switch (accountStatus) {
    case 'extended':
        cashbackPercentage = 15;
        displayStatus = 'extended'; //статус для отображения (совпадает с accountStatus или regular (default))
        break;
    case 'premium':
        cashbackPercentage = 20;
        displayStatus = 'premium';
        break;
    case 'vip':
        cashbackPercentage = 30;
        displayStatus = 'vip';
        break;
    default:
        cashbackPercentage = 10;
        displayStatus = 'regular';
}

console.log(`${username} | ${displayStatus} аккаунт`);
console.log(`Вы получаете ${cashbackPercentage} % с покупок на бонусный счёт`);
