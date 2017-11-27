/*
*数组的扩展
* */
// function f(a, b, c) {
//     console.log(a,b,c);
// };
// f.apply(null, [1,2,3])
// f(...[1,2,3])
// var demo = Math.max.apply(null, [44,3,23]);
// console.log(demo)

// var demo = Math.max(...[44,3,45])
// console.log(demo)
// var demo1 = [0,1,2];
// var demo2 = [3,4,5];
// Array.prototype.push.apply(demo1, demo2);
// console.log(demo1)

// demo1.push(...demo2);
// console.log(demo1)

// const a1 = [1,2,3];
// const a2 = a1.concat();
// a2[0] = 3;
// console.log(a1)
// console.log(a2)

// const a1 = [1,2,3];
// // const a2 = [...a1];
// const [...a2] = a1
// a2[0] = 3;
// console.log(a1)
// console.log(a2)

// var a1 = ['a','b'];
// var a2 = ['c'];
// var a3 = ['d','e'];
// var newArray = a1.concat(a2,a3);
// console.log(newArray)
// var newArray = [...a1, ...a2,...a3];
// console.log(newArray)

// var list = ['a',1,2,3,4,5];
// // var first = list[0], rest = list.slice(1);
// var [first, ...rest] = list;
// console.log(first)
// console.log(rest)
// const [first, ...rest] = [];
// console.log(first)
// console.log(rest)
//
// const [first, ...rest] = ['demo'];
// console.log(first)
// console.log(rest)

// var demo = [...'hello'];
// console.log(demo)

// function length(str) {
//     return [...str].length
// }
// length('x\uD83D\uDE80y')

// var likeArray = {
//     '0': 'a',
//     '1': 'b',
//     '2': 'c',
//     length: 3
// };
// var newArray = Array.from(likeArray)
// var newArray = Array.prototype.slice.call(likeArray)
// console.log(newArray)

// var newArray = Array.from([1,2,3], (x) => x*x);
// console.log(newArray)

// function typeOf() {
//     return Array.from(arguments, value => typeof value)
// }
// console.log(typeOf([], null, 'sfdkfj'));

// console.log(Array.of(1,2,3,4))
// console.log(Array.of(1))
// console.log(Array.of(1).length)
// var newOne = [1,2,3,4,5,6,7,8,9].copyWithin(0,5);
// console.log(newOne)
// var newOne = [1,2,3,4,5].copyWithin(2,3);
// console.log(newOne)

// var newTwo = [1,2,3,4,5,6,7].copyWithin(4,5);
// console.log(newTwo)
// var newTow = [1,2,3,4,5,6,7].copyWithin(4,5,6);
// console.log(newTow)

// var newArray = [1,2,,-3,4].find((x) => x < 0);
// console.log(newArray)

// var newArray = [1,5,10,15].find(function (value,index,array) {
//     return value > 9;
// });
// console.log(newArray)

// var newArray = [1,5,10,15].findIndex(function (value, index, array) {
//     return value > 3;
// });
// console.log(newArray)

// console.log([NaN].indexOf(NaN))
// console.log([NaN].findIndex(y => Object.is(NaN, y)))

// var newOne = [1,2,3,4,5].fill(9);
// console.log(newOne)

// var newOne = new Array(7).fill(11);
// console.log(newOne)
// var newOne = ['a','b','c'].fill('o',1,2);
// console.log(newOne)
// for(let index of ['a', 'b'].keys()) {
//     console.log(index)
// }
// for (let [index, elem] of ['a', 'b'].entries()) {
//     console.log(index, elem);
// }
//
// console.log([1,2,3].includes(2));
// console.log([1,2,3].includes(4));
// console.log([1,2,NaN].includes(NaN));
// console.log([1,2,3].includes(3,-1));

// var a = [,'a'];
// console.log(a[0])