/*
* let
* */

// 例子1，var与let
// var a = [];
// for (var i = 0; i < 10; i++) {
//     a[i] = function () {
//         console.log(i)
//     }
// }
// a[6]();

// var a = [];
// for(let i = 0; i < 10; i++) {
//     a[i] = function () {
//         console.log(i);
//     }
// }
// a[6]();

// for(let i = 0; i < 10; i++) {
//     let i = 'abc';
//     console.log(i);
// }

// console.log(a)
// var a = 10;
// console.log(b);
// let b = 10;

// var temp = 123;
// if(true){
//     temp = '456';
//     let temp;
// }

// typeof x;
// let x;

// console.log(typeof sdfhsodfs)

// function bar(x = y, y = 5) {
//     return [x, y];
// }
// bar();

// function bar(x = 2, y = x) {
//     return [x, y];
// }
// bar();

// var x= x;
// let x= x;
//
// function demo() {
//     let x;
//     var x;
// }

// function demo() {
//     let a;
//     let a;
// }

// function demo(args) {
//     let args;
// }

// function demo(args) {
//     {
//         let args;
//     }
// }

// var temp = new Date();
// function f() {
//     console.log(temp)
//     if(false) {
//         var temp = 'pppp'
//     }
// }
// f();

// var s = 'hello';
// for(var i = 0; i < s.length; i++) {
//     console.log(s[i]);
// }
// console.log(i);

// function f1() {
//     let a = 5;
//     if (true) {
//         let a = 10;
//     }
//     console.log(a)
// }
// f1()

// {
//     {
//         {
//             {
//                 let a = 10;
//             }
//         }
//     }
// }

// {
//     {
//         {
//             let inner = 'inner';
//         }
//         console.log(inner);
//     }
// }

// {
//     {
//         let a = '1';
//         {
//             let a = '2'
//         }
//     }
// }

// (function () {
//     console.log('IIFE')
// }())

// {
//     console.log('IIFE')
// }

//es5 违法的两种函数声明,但是，浏览器没有遵守这个规定，为了兼容以前的旧代码，还是支持在块级作用域之中声明函数，因此上面两种情况实际都能运行，不会报错
// 1
// if(true) {
//     function f() {
//     }
// }
// 2
// try {
//     function f() {
//
//     }
// }catch (e) {
//     console.log(e)
// }

// function f() {
//     console.log('i am outside')
// }
// (function () {
//     if(true) {
//         function f() {
//             console.log('i am inside')
//         }
//     }
//     f();
// }())

//提案，并未实现
// function f() {
//     return 1;
// }
// let x= do {
//     let t = f();
//     t * t + 1;
// };
// console.log(x)


// const
// const PI = '3.141592653';
// PI = '3'

// const PI;

// if (true) {
//     const MAX = '999'
// }
// console.log(MAX)

// if(true) {
//     console.log(MAX)
//     const MAX = 'pp'
// }

// let age = 222;
// let message = '0434400';
// const age = 25;
// const message = '000';

// const foo = {}
// foo.prop = 'pppp';
// console.log(foo.prop);
// foo = {}

// const a = [];
// a.push('ppp');
// a.length = 0;
// a = ['dabe']

// 'use strict'
// 严格模式下会报错
// const foo = Object.freeze({});
// foo.prop = 'ppp';
// console.log(foo.prop);

// 对象彻底冻结函数
// var freezeObject = function (obj) {
//     Object.freeze(obj);
//     Object.keys(obj).forEach(function (key, i) {
//         if(typeof obj[key] === 'object') {
//             freezeObject(obj[key])
//         }
//     })
// };

// global.a = 1;
// console.log(a)

//获取全局对象
// (typeof window !== 'undefined' ? window : (typeof process === 'object' && typeof require === 'function' && typeof global === 'object') ? global : this);
//
// var getGlobal = function () {
//     if (typeof self !== 'undefined') {return self};
//     if (typeof window !== 'undefined') {return window};
//     if (typeof global !== 'undefined') {return global};
//     throw new Error('unable to locate global object')
// }