var number = 5;
// alert (number);

let num = 10;
num = 7;

const pi = 3.14;
// pi = 5;
// alert(5);
[].push('a');

// Обозначение строковых перменных - они должны быть заключены в кавычки
// Каждый из вариантов ниже допустим.
let someName1 = "Name1";
let someName2 = 'Name2';
let someName3 = `Name3`;

// Логический тип данных может принимать одно из двух значений - true или false
let boolYes = true;
let boolNo = false;

// Типы данных null и undefined
// Присваеваем переменной modal значение string
let modal = 'string';
// Пытаемся вывести во всплыывающем сообщение значение переменной a
// Но переменной с таким именем не существует, поэтому ожидаемо получаем ошибку
// В данном случае a - это тип null - не существует
// alert(a);

// Опраеделяем переменную modal
// Переменная без значения, является типом undefined -
// существует, но не найдена.
let modal2;

// Создадим объект obj
let obj = {
    dog: 'Barbos',
    cat: 'Murka'
};

// Создадим массив arr
let arr = [1, 'str', false];
//Возьмем первый элемент массива arr и запишем туда значение 2:
arr[0] = 2;

// Для работы с консолью используется функция console.log(), например
console.log(someName1);

console.log(2 + 2 == 4); //true
console.log(2 + '2' == 4); //false

// Пример конкатинации
console.log (2 + '2'); // В итоге даст нам 44, т.к. произошла конкатинация

// Пример инкримента (оператор, увеличивающий значение переменной на 1):
let x = 5;
x++; // Это и есть инкремент
console.log(x);
// Пример декмремента (оператор, уменьшающиий значение на):
x--;
console.log(x);

// Выводим всплывающее окно с вариантами ответа и сохраняем ответ в переменной
let answer = confirm('Вам уже есть 18 лет?');
console.log(answer);

// Выводим всплывающее окно со своим вариантом ответа
// И сохраним этот ответ в переменной
let stringAnswer = prompt('Вам уже есть 18 лет?', '');
// Кстати, хвост (, '') нужен для исправления бага в IE
console.log(stringAnswer);

// Небольшая практика
// Викторина для пользователя с сохранение его ответов в массив
// Создаем массив
let answers = [];
// Присваимваем ответы элементам массива
answers[0] = prompt('Как вас зовут?', '');
answers[1] = prompt('Какая ваша фамилия?', '');
answers[2] = prompt('Сколько вам лет?', '');
// Выводим полученные данные на странице
document.write(answers);