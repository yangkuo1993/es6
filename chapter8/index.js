/*
* symbol
* */

// let s = Symbol();
// console.log(typeof s)

// let s1 = Symbol('foo');
// let s2 = Symbol('bar');
// console.log(s1)
// console.log(s2)
// console.log(s1.toString())
// console.log(s2.toString())

// const obj = {
//     toString() {
//         return 1
//     }
// };
// console.log(Symbol(obj))

// let s1 = Symbol()
// let s2 = Symbol()
// console.log(s1 === s2)
// let s1 = Symbol('foo')
// let s2 = Symbol('foo')
// console.log(s1 === s2)

// let sym = Symbol('foo');
// console.log(sym + 'ppp')
// console.log(`${sym}sdjfkljsdfk`)

// let sym = Symbol('foo');
// console.log(sym.toString());
// console.log(String(sym))

// let sym = Symbol();
// console.log(Boolean(sym))

// let mySymbol = Symbol();
// let obj = {};
// obj[mySymbol] = 'hello';
// console.log(obj)
// let obj = {
//     [mySymbol]: 'hello'
// };
// console.log(obj)

// let a = {};
// Object.defineProperty(a, mySymbol, {
//     value: 'hello'
// });
// Object.defineProperty(a, 'ddd', {
//     value: 'hello1',
//     enumerable: true
// });
// for(let value in a) {
//     console.log(value)
// }
// console.log(a)
// console.log(a['ddd'])
// console.log(a[mySymbol])

/*
const obj ={};
let a = Symbol('a');
let b = Symbol('b');
obj[a] = 'hello';
obj[b] = 'world';
const result = Object.getOwnPropertySymbols(obj);
console.log(result)*/

/*let obj = {
    [Symbol('my_key')]: 1,
    enum: 2,
    nonEnum: 3
};

console.log(Reflect.ownKeys(obj))*/

/*
let s1 = Symbol.for('demo')
let s2 = Symbol.for('demo')

console.log(s1 === s2)*/

/*let s1 = Symbol.for('demo')
let s2 = Symbol('demo')
console.log(Symbol.keyFor(s1))
console.log(Symbol.keyFor(s2))*/

/*
class MyClass {
    [Symbol.hasInstance](foo){
        return foo instanceof Array;
    }
}
console.log([1,2,3] instanceof new MyClass())*/

/*
const arr1 = ['a','b'];
const arr2 = ['c','d'];
const newOne = arr1.concat(arr2, 'e');
console.log(arr2[Symbol.isConcatSpreadable])
console.log(newOne)*/

/*
let arr2 = ['a', 'b'];
arr2[Symbol.isConcatSpreadable] = false;
console.log(['c','d'].concat(arr2, 'e'));*/

/*class MyArray extends Array{
    static get [Symbol.species](){
        return Array;
    }
}
let a = new MyArray(1, 2, 3);
let mapped = a.map((x) => x*x);
console.log(a instanceof MyArray)
console.log(a instanceof Array)
console.log(mapped instanceof MyArray)
console.log(mapped instanceof Array)*/



