// Объявление переменных
let userName = "adm";
let userBalance = 6000;

// Проверка имени пользователя
if (userName === "admin") {
    console.log("Администратор");
}
    else if (userName === "") {
      console.log("Гость");
    }
    else {
// Проверка баланса
        if (userBalance > 5000) {
            console.log("Вип-клиент");
        }
            else if (userBalance > 1000) {
                console.log("Постоянный покупатель");
        }
    }
