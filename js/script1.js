//1.Дана строка 'ddd@bbb@ccc'. Замените все @ на '!'
let string = "ddd@bbb@ccc";
console.log(string.replaceAll("@", "!"));

//2.Дана строка 'js'. Сделайте из нее строку 'JS'.
// let string1 = "js";
// alert(string1.toUpperCase());

//3.Дана строка 'JS'. Сделайте из нее строку 'js'.
// let string2 = "JS";
// document.write(string2.toLowerCase());

//4.Дана строка'I am a hero!'. Выведите в консоль количество символов в этой строке.
// let string = "I am a hero!";
// document.write(string.length);

//5.Составить скрипт, который запрашивает у пользователя ввести номер кредитной карты. Скрипт должен обработать полученный номер и показать на странице последние 4 цифры а остальные цифры карты должны заменены на *.

// let cardNum = prompt("Введите номер вашей карты?");
// document.write(
//   "<h1>Номер вашей карты: </h1>" +
//     cardNum.replace(cardNum.slice(0, -4), "********")
// );
