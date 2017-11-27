/*
* 函数的扩展
* */

// function log(x, y = 'world') {
//     console.log(x,y)
// }
//
// log('hello')
// log('hello', 'yangkuo')

// function demo(x, x, y) {
//
// }

// function demo(x, x, y = 0) {
//
// }

// let x = 99;
// function add(p = x + 1) {
//     console.log(p)
// }
// add()g
// x = 100
// add()

// var x= 1;
// function g(x, y = x) {
//     console.log(y)
// }
// g(2)

// function x(x) {
//     let x;
// }

// function demo(y = x) {
//     let x= 2;
//     console.log(y)
// }
// demo()

// let foo = 'outer';
//
// function demo(func = () => foo) {
//     let foo = 'inner';
//     console.log(func())
// }
// demo()
// function dme(a, ...b) {
//
// }

// function demo() {
// }
// demo.name

// function add(...value) {
//     var sum = 0;
//     for(var val of value) {
//         sum += val
//     }
//     return sum;
// }
// console.log(add(1,2,3,4))

// function push(array, ...items) {
//     items.forEach(function (item) {
//         array.push(item);
//         console.log(item)
//     });
// }
// var a = []
// push(a, 1,2,3,4,5,6);
// console.log(a)

// function demo(a, ...b, c) {
//
// }

// var demo = function () {
//
// }
// console.log(demo.name)

// console.log((new Function).name)

// function foo() {
//
// }
// console.log(foo.bind({}).name)
// console.log((function(){}).bind({}).name)

// var f = v => v;
// console.log(f(5))

// var f = () => 5;
// console.log(f())

// var sum = (num1, num2) => num1+num2;
// console.log(sum(5,6))

// var sun = (num1, num2) => {
//     return num2 + num1;
// }
// console.log(sun(5,6))

// let getTempItem = id => ({a: id,b:2})
// console.log(getTempItem(1))

// const full = ({first, last}) => first + ' ' + last;
// console.log(full({first: 999,last:888}))

// var a = [1,2,3];
// var b = a.map(x => x*x);
// console.log(b)

// var a = [47,39,78,74,45,2,0,97];
// a = a.sort((a,b) => a - b);
// console.log(a)

// const numbers = (...num) => num;
// console.log(numbers(1,2,3,4,5,6))

// const headAndTail = (head, ...tail) => [head, tail];
// console.log(headAndTail(1,2,3,4,5))
// var a = 99;
// function foo() {
//     console.log(this.a)
// }
// foo();

// function insert(value) {
//     return {
//         into:function (array) {
//             return {
//                 after:function (aftervalue) {
//                     array.splice(array.indexOf(aftervalue) + 1, 0, value);
//                     return array;
//                 }
//             }
//         }
//     }
// }
// console.log(insert(2).into([1,3]).after(1));

// let insert = (value) => ({into: (array) => ({after: (aftervalue) => {
//     array.splice(array.indexOf(aftervalue) + 1, 0, value);
//     return array;
// }})});
// console.log(insert(2).into([1,3]).after(1));