/*
* 数值的扩展
* */
// (function(){
//     console.log(0o11 === 011);
// })() // true

// (function(){
//     'use strict';
//     console.log(0o11 === 011);
// })()
//
// console.log(Number('0b111'))
// console.log(Number('0o10'))

// console.log(Number.isFinite(15))
// console.log(Number.isFinite(0.5))
// console.log(Number.isFinite(NaN))
// console.log(Number.isFinite(Infinity))
// console.log(Number.isFinite(-Infinity))
// console.log(Number.isFinite('foo'))
// console.log(Number.isFinite('15'))
// console.log(Number.isFinite(true))

// console.log(Number.isNaN(NaN))
// console.log(Number.isNaN(15))
// console.log(Number.isNaN('15'))
// console.log(Number.isNaN(true))
// console.log(Number.isNaN(9/NaN))
// console.log(Number.isNaN('true' / 0))
// console.log(Number.isNaN('true' / 'true'))

// console.log(Number.parseInt('12.45'))
// console.log(Number.parseFloat('12.45#'))

// console.log(Number.isInteger(12.5))
// console.log(Number.isInteger(12))
// console.log(Number.isInteger(12.0))
// console.log(Number.isInteger('14'))
// console.log(Number.isInteger(true))

// console.log(Math.trunc(1.8))
// console.log(Math.trunc(5.4))
// console.log(Math.trunc(-5.4))
// console.log(Math.trunc(-5.9))
// console.log(Math.trunc(-0.1234))

// console.log(Math.trunc('1234.666'))
// console.log(Math.trunc(true))
// console.log(Math.trunc(false))
// console.log(Math.trunc(null))
//
// console.log(Math.trunc(NaN))
// console.log(Math.trunc('foo'))
// console.log(Math.trunc())
// console.log(Math.trunc(undefined))

console.log(Math.hypot(3,4))
console.log(Math.hypot(3,4,5))
console.log(Math.hypot())
console.log(Math.hypot(NaN))
console.log(Math.hypot(-3))