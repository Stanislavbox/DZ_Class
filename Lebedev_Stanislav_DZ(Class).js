// ******************* Занятие №11 Презентация *******************************
// ДЗ
// Задача №1
// Создать конструктор для производства автомобилей. Конструктор
// должен принимать марку автомобиля и возраст машины.
// Конструктор должен иметь метод, который возвращает марку, и
// второй метод, который возвращает год производства машины(год
// текущий минус возвраст машины, использовать Date для получения текущего года)
// ...
// var lexus = new Car('lexus', 2);
// lexus.получитьМарку(); //'Lexus'
// lexus.получитьГодВыпуска(); // 2014 (2016-2)

// function Car (name, age){
    
//     this.name = name || 'Car';
//     this.age = age || 'empty';
//     this.getCar = () => this.name[0].toUpperCase() + this.name.substring(1, this.name.length)
//     this.getAge = function(){
//         if(this.age !== 'number') return console.error('Empty age');
//         var date = new Date();
//         return date.getFullYear() - this.age;
//     }
// }

// var lexus = new Car('lexus', 'two');

// Задача №2
// написать конструктор, который умеет элементарно шифровать
// строки (например, сделать из строки строку-перевертыш, или
// заменить все символы их цифровым предстовлением, или любой
// другой метод). Конструктор при инициализации получает строку и
// имеет следующие методы:
// a. показать оригинальную строку
// б. показать зашифрованную строку
// с. стереть все данные - метод должен удалить все строки


// function  Cypher (string) {
//     var newStr = '';

//     this.addItems = (string) => newStr += string;
//     this.getItems = () => newStr;
//     this.deletItems = () => newStr = '';
//     this.getCypher = () => {
//         var result = '';
//         for(var i = newStr.length-1; i--;){
//             result += newStr[i]
//         }
//         return result;
//     }
    
// } 

// var list = new Cypher();

// Задача №3
// Создать класс, который создает экземпляры, работающие со строкой
// и имеее следующие свойства и методы:
// a. свойство "строка" будет содержать строку
// b. методы для получения и установки строки
// c. метод для получения длины строки
// d. при вызове toString() вернуть строку
// e. при приведении объекта к числу вернуть длину строки

// class ClassStr {
//     constructor( string =ClassStr.stringDefault() ){
//         this.newStr = string;
//     }
//     addString(string){
//         return this.newStr = string;
//     }
//     getString(){
//         return this.newStr;
//     }
//     getStringLength(){
//         return this.newStr.length;
//     }
//     static stringDefault(){
//         return 'test';
//     }
//     toString (){
//         return this.newStr;
//     }
//     valueOf (){return this.newStr.length;}
// }

// var str = new ClassStr();

// var str = new КлассСтрока('test');
// str.получить() // 'test'
// +str; // 4
// str.toString()// 'test'