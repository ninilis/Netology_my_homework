let user = "netologist";
let orderOwner = "leo_tolstoy";

if (user === orderOwner || user === "admin")  {
    console.log("Редактирование разрешено");
}
    else {
        console.log("Заказ нельзя редактировать")
}