'use strict'
// alert('Я JavaScript!')

// let admin
// let name1
// name1 = 'Джон'
// admin = name1
// alert(admin)

// let nameOurPlanet = 'Earth'
// let nameСurrentUser = 'Ivan'

// let userName = prompt('What is your name?','')
// alert(userName)

// let string = 'string'
// let stringForConsole = `hello ${string}`
// console.log(stringForConsole)
// string = 'world'
// stringForConsole = `hello ${string}`
// console.log(stringForConsole)

// let a = prompt("Первое число?", 1);
// let b = prompt("Второе число?", 2);
// alert(+a + +b);

// let officialNameJS = prompt('Какое "официальное" название JavaScript?','')
// if (officialNameJS == 'ECMAScript') {
//   alert('Верно!')
// } else {
//   alert('Не знаете? ECMAScript!')
// }

// let number = prompt('Введите число', '')
// if (+number > 0) {
//   alert(1)
// } else if (+number < 0) {
//   alert(-1)
// } else {
//   alert(0)
// }

// let result = (a + b < 4) ? 'Мало' : 'Много'

// let message = (login == 'Сотрудник') ? 'Привет' : 
//   (login == 'Директор') ? 'Здравствуйте' :
//   (login == '') ? 'Нет логина' :
//   ''

// if (age >= 14 && age <= 90)

// if (!(age >= 14 && age <= 90))
// if (age < 14 || age > 80)

// let login = prompt('Кто там?', '')
// if (login == null || login == '') {
//   alert('Отменено')
// } else if (login == 'Админ') {
//   let password = prompt('Пароль', '')
//   if (password == 'Я главный') {
//     alert('Здравствуйте!')
//   } else if (password == null || password == '') {
//     alert('Отменено')
//   } else {
//     alert('Неверный пароль')
//   }
// } else {
//   alert('Я вас не знаю')
// }

// let index = 0
// while (index < 6) {
//   if (index % 2 != 0) {
//     console.log(index)
//   }
//   index++
// }

// for (let number = 1; number <= 10; number++) {
//   if (number % 2 === 0) {
//     console.log(number)
//   }
// }

// let a = 4
// switch(a) {
//   case 2:
//     a = 1
//   case 4:
//     a = 10
//     break
//   default:
//     a = 0
// }

// let i = 0
// while (i < 3) {
//   alert( `number ${i}!` )
//   i++
// }

// let number 
// do {
// number = prompt('Введите число', '')
// } while (+number <= 100 && number)

// if (brouser === 'Edge') {
//   alert( "You've got the Edge!" )
// } else if (brouser === 'Chrome' 
//   || brouser === 'Firefox' 
//   || brouser === 'Safari' 
//   || brouser === 'Opera') {
//     alert( 'Okay we support these browsers too' )
// } else {
//   alert( 'We hope that this page looks ok!' )
// }

// const number = +prompt('Введите число между 0 и 3', '');
// switch (number) {
//   case 0:
//     alert('Вы ввели число 0');
//     break
//   case 1:
//     alert('Вы ввели число 1');
//     break
//   default:
//     alert('Вы ввели число 2, а может и 3');
// }

// let str = ''
// for (let a = 1; a <= 9; a++) {
//   for (let b = 1; b <= 3;b++) {
//     str = str + a
//   }
// }
// console.log(str)

// let str = ""
// for (let i = 10; i <= 30; i = i + 10) {
//   debugger
//   for (let j = 1; j <= 3; j++ ) {
//     str = str + (i + j) + ' '
//   }
// }
// console.log(str)

// function fun(bul,noll,num,str) {
//   console.log(arguments)
//   if (bul) return 1
//   return arguments
// }
// console.log(fun(true,null,1,'str',undefined,2))


// function checkAge(age) {
//   return (age > 18) ? true : confirm('Родители разрешили?')
// }

// function checkAge(age) {
//   return (age > 18) || confirm('Родители разрешили?')
// }

// function min(a,b) {
//   if (a > b) {
//     return b
//   }
//   return a
// }

// let user = {
//   age: 15,
//   "login": 'John',
//   "123": 123
// }
// console.log(user)
// console.log(user.age)
// console.log(user["123"])

// function ask(question, yes, no) {
//   if (confirm(question)) yes()
//   else no();
// }
// ask(
//   "Вы согласны?",
//   () => { alert("Вы согласились."); },
//   () => { alert("Вы отменили выполнение."); }
// );

// let user = {
//   name:"John",
//   surname:"Smith"
// }
// user.name = "Pete"
// delete user.name

// function multiplyNumeric(obj) {
//   for (let key in obj) {
//     if (typeof obj[key] == 'number') {
//       obj[key] *= 2
//     }
//   }
// }

// let sum = 0
// for (let key in salaries) {
//   sum += salaries[key]
// }
// console.log(sum)

// let a = {
//   method() {},
//   number: 1,
//   str:'fhf'
// }
// const obj = {}
// let b = a
// console.log(Object() === Object(), a === b)
// console.log("method" in a)

// function isEmpty(obj) {
//   for (let key in obj) {
//     return false
//   }
//   return true
// }
// console.log(isEmpty(a))

// function i() {
//   console.log(this)
// }
// i()
// var a = 5
// let c = () => {console.log(this)}
// c()
// let d = {
//   v:() => {},
//   foo:function() {(() => {console.log(this)})()}
// }
// d.v()
// d.foo()

// const user = {
//   // buyIceCream:function(name) {
//   //   this.iceCream = name
//   //   console.log(this)
//   // }
//   buyIceCream:(name) => {
//     this.iceCream = name
//     console.log(this)
//   }
// }
// user.buyIceCream('Магнат')

// let user = {
//   name: "Джон",
//   go: function() { alert(this.name) }
// }

// user.go()

// let a = {
//   b() {
//     console.log(1,this);
//     let v = () => {
//       console.log(2,this);
//       //this-? local
//     };
//     //this-a local
//     v()
//   }
// }

// function c() {
//   console.log(3,this);
//   function f() {
//     console.log(4,this);
//     //this-undefined local
//   };
//   //this-undefined local
//   f()
// }
// let d = function() {
//   console.log(5,this);
//   let i = () => {
//     console.log(6,this);
//     //this-? local
//   };
  //this-undefined local
//   i()
// }
// let j = () => {
//   console.log(7,this);
  //this-? local
// };
// a.b();
// c();
// d();
// j()
//this-window global
//1-a
//2-a
//3-undefined
//4-undefined
//5-undefined
//6-undefined
//7-window

// let calculator = {
//   read() {
//     this.a = +prompt('Первое значение',)
//     this.b = +prompt('Второе значение',)
//   },
//   sum() {
//     return calculator.a + calculator.b
//   },
//   mul() {
//     return calculator.a * calculator.b
//   }
// }

// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );

// let ladder = {
//   step:0,
//   up() {
//     this.step++
//     return this
//   },
//   down() {
//     this.step--
//     return this
//   },
//   showStep() {
//     alert(this.step)
//   }
// }

// ladder.up().up().down().showStep

//global scope
//Ya:foo
//a:
//

// console.log(a)

// function a() {
  
// }
// console.log(a)
// let b = function() {
  
// }
// var a = 4 
// let c = 6
// const i = 5
// console.log(a)

// function Calculator() {
//   this.read = function() {
//     this.a = +prompt('a?',)
//     this.b = +prompt('b?',)
//   }
//   this.sum = function() {
//     return this.a + this.b
//   }
//   this.mul = function() {
//     return this.a * this.b
//   }
// }
// let calculator = new Calculator();
// calculator.read();

// console.log( "Sum=" + calculator.sum() );
// console.log( "Mul=" + calculator.mul() );

// function Accumulator(startingValue) {
//   this.value = startingValue
//   this.read = function() {
//     return this.value += +prompt('Введите значение',)
//   }
// }
// let accumulator = new Accumulator(1);

// accumulator.read();
// accumulator.read();

// alert(accumulator.value)