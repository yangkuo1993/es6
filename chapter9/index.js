/*
* set,map数据结构
* */

// let a = new Set();
// [2,3,5,4,5,2,2].forEach((x) => a.add(x));
// console.log(a)

// let a = new Set([1,2,3,4,4,5]);
// console.log(...a)

// let item = new Set([1,2,3,4,5,5,5,5,5,5]);
// console.log(item.size)

// let newOne = new Set();
// newOne.add({});
// newOne.add({});
// console.log(newOne.size)
// console.log(newOne)

// let a = new Set();
// a.add(1).add(2).add(2);
// console.log(a.has(2))
// console.log(a.has(3))
// console.log(a.has(1))
// console.log(a.delete(2))
// console.log(a.has(2))

// const properties = {
//     width: 1,
//     height: 2
// };
// if(properties[names]) {
//
// }
/*
const properties = new Set();
properties.add({width: 1})
properties.add({height: 2})
console.log(properties)*/

// const newArray = [1,1,1,2,2,3,3,4,5,5,,5,6,6,7,7,8,8];
// const newOne = Array.from(new Set(newArray))
// console.log(newOne)

/*let newArray = [1,1,1,2,2,3,3,4,5,5,,5,6,6,7,7,8,8];
let newone = [...new Set(newArray)]
console.log(newone)*/

/*
let a = new Set([1,2,3]);
let b = new Set([4,3,2]);

let union = new Set([...a, ...b]);
console.log(union);
let intersect = new Set([...a].filter((x) => b.has(x)));
console.log(intersect);
let difference  = new Set([...a].filter((x) => !b.has(x)));
console.log(difference)
*/

/*let newOne = new Set([1,2,3]);
newOne = new Set([...newOne].map((x) => x*x));
console.log(newOne)*/

/*
let newOne = new Set([1,2,3]);
newOne = new Set(Array.from([...newOne], (x) => x * x));
console.log(newOne)*/

// const a = [1,2,3];
// const newone = new WeakSet(a);
// console.log(newone)

/*
const ws = new WeakSet();
const obj = {};
const foo = {};
console.log(ws.add(obj));
console.log(ws.add(global));
console.log(ws.has(obj));
console.log(ws.has(foo));
console.log(ws.delete(global));
console.log(ws.has(global));*/

/*
const m = new Map();
const o = {p : '1234'};
m.set(o, 'content');
console.log(m.get(o));
console.log(m.has(o))
console.log(m.delete(o))
console.log(m.has(o))*/

/*const map = new Map([['name', 'yangkuo'], ['age', '24']]);
console.log(map.size);
console.log(map.has('name'))
console.log(map.get('name'))
console.log(map.has('age'))
console.log(map.get('age'))*/

// let map = new Map();
// map.set('true', 1);
// map.set(true, 2);
// console.log(map)