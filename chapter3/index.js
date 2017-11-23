/*
*字符串的扩展
* */

//ES6 提供了codePointAt方法，能够正确处理 4 个字节储存的字符，返回一个字符的码点
// let s = '𠮷a';
//
// s.codePointAt(0) // 134071
// s.codePointAt(1) // 57271
//
// s.codePointAt(2) // 97

// let s = 'Hello world!';
// console.log(s.startsWith('H', 6));
// console.log(s.endsWith('!', 12));
// console.log(s.includes('o', 8));

// console.log('x'.repeat(9))
// console.log('x'.repeat(NaN))

// let name = 'yangkuo';
// let age = 24;
// console.log(`${name} 是一个大好人啊。 ${age}`);

// function demo() {
//     return`
//     <div>
//         <div>           fksdjaflk </div>
//     </div>
//     `
// }

// let x = 1;
// let y = 2;
// console.log(`${x} + ${y} = ${x + y}`)

// var obj = {
//     x:1,
//     y:2
// };
// console.log(`${obj.x + obj.y}`)

// function f(r) {
//     return '这真是一个契机'
// }
// console.log(`${f()}`)

// let msg = `Hello, ${place}`;

// console.log(`Hello ${'World'}`)

// const data = [
//     { first: '<Jane>', last: 'Bond' },
//     { first: 'Lars', last: '<Croft>' },
// ];
// const tmpl = addrs => `
//   <table>
//   ${addrs.map(addr => `
//     <tr><td>${addr.first}</td></tr>
//     <tr><td>${addr.last}</td></tr>
//   `).join('')}
//   </table>
// `;
// console.log(tmpl(data));

// 写法一
// let str = 'return ' + '`Hello ${name}!`';
// let func = new Function('name', str);
// func('Jack') // "Hello Jack!"

// 写法二
// let str = '(name) => `Hello ${name}!`';
// let func = eval.call(null, str);
// func('Jack') // "Hello Jack!"