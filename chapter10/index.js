/*
* proxy
* */
/*
var proxy = new Proxy({},{
    get (target, property) {
        return 50;
    }
})
console.log(proxy.demo)
console.log(proxy.name)
console.log(proxy.age)*/

/*
var proxy = new Proxy({}, {
    get (target, property) {
        return '世界真奇妙'
    }
});
var obj = Object.create(proxy);
console.log(obj.time)*/

/*
var handle = {
    get (target, name) {
        if(name === 'prototype') {
            return Object.prototype;
        }
        return 'Hello ' + name
    },
    apply (target, thisBinding, args) {
        return args[0]
    },
    construct (target, args) {
        return {value: args[1]};
    }
};
var fproxy = new Proxy(function (x, y) {
    return x + y;
}, handle);
console.log(fproxy(1, 2));
console.log(new fproxy(1,2));
console.log(fproxy.prototype === Object.prototype)
console.log(fproxy.yangkuo === 'Hello yangkuo')*/

/*
var person = {
    name: '张三'
};
var proxy = new Proxy(person, {
    /!*
    * @target 目标对象
    * @property 属性名称
    * *!/
    get (target, property) {
        if (property in target) {
            return target[property];
        } else {
            throw new ReferenceError("Property \"" + property + "\" does not exist.");
        }
    }
});
console.log(proxy.name);
console.log(proxy.age)*/

/*
let proto = new Proxy({}, {
    get (target, prototyKey) {
        console.log('Get' + prototyKey);
        return target[prototyKey];
    }
});
let obj = Object.create(proto);
console.log(obj.name)*/

// function createArray(...elements) {
//     var handle = {
//         get (target, proxyKey, prototy) {
//             let index= Number(proxyKey);
//             if (index < 0) {
//                 proxyKey = String(target.length + index);
//             }
//             return Reflect.get(target, proxyKey, prototy);
//         }
//     };
//     let target = [];
//     target.push(...elements);
//     return new Proxy(target, handle);
// };
// let arr = createArray('a','b','c');
// console.log(arr[-2])

/*var pipe = (function () {
    return function (value) {
        var funcStack = [];
        var oproxy = new Proxy({}, {
            get (pipeObject, fnName) {
                if (fnName === 'get') {
                    return funcStack.reduce((val, fn) => {
                        return fn(val);
                    }, value);
                }
                funcStack.push(window[fnName])
                return oproxy;
            }
        });
        return oproxy;
    }
}());
var double = n => n * 2;
var pow    = n => n * n;
var reverseInt = n => n.toString().split("").reverse().join("") | 0;
console.log(pipe(3).double.pow.reverseInt.get)*/

/*
const dom = new Proxy({}, {
    get (target, property) {
        return function (args = {}, ...children) {
            const el = document.createElement(property);
            for (let prop of Object.keys(args)) {
                el.setAttribute(prop, args[prop]);
            }
            for(let child of children) {
                if (typeof child === 'string') {
                    child = document.createTextNode(child);
                }
                el.appendChild(child)
            }
            return el;
        }
    }
});
const el = dom.div({},
    'Hello, my name is ',
    dom.a({href: '//example.com'}, 'Mark'),
    '. I like:',
    dom.ul({},
        dom.li({}, 'The web'),
        dom.li({}, 'Food'),
        dom.li({}, '…actually that\'s it')
    )
);

document.body.appendChild(el);*/

/*
const proxy = new Proxy({}, {
    get (target, property, receiver) {
        return receiver;
    }
});
console.log(proxy.tyoe === proxy)*/

/*
const target = Object.defineProperties({}, {
    foo: {
        value: 1234,
        writable: false,
        configurable: false
    }
});
const handle = {
    get (target, proxty) {
        return 'abc'
    }
};
const newOne = new Proxy(target, handle);
newOne.foo*/

/*
let validator = {
    set (target, proxyName, proxyValue, proxy) {
        if (proxyName === 'age') {
            if (!Number.isInteger(proxyValue)) {
                throw new TypeError('The age is not an integer');
            }
            if (proxyValue > 200) {
                throw new RangeError('The age seems invalid');
            }
        }
        target[proxyName] = proxyValue
    }
};
let newOne = new Proxy({}, validator);
newOne.age = 100;
console.log(newOne.age);
// newOne.age = 'young';
// console.log(newOne.age)
newOne.young = 'young';
console.log(newOne.young)*/

/*
function invariant(key, action) {
    if (key[0] === '_') {
        throw new Error(`Invalid attempt to ${action} private "${key}" property`);
    }
};
const handle = {
    get (target, key) {
        invariant(key, 'get');
        return target[key];
    },
    set (target, key, value) {
        invariant(key, 'set');
        target[key] = value;
        return true;
    }
};
var newOne = new Proxy({}, handle);
newOne._demo = 0*/

/*
var target = function () {
    return 'I am target';
};
var handle = {
    apply (target, ctx, args) {
        return 'i am the proxy'
    }
};
var p = new Proxy(target, handle);
console.log(p())*/

/*
var twice = {
    apply (target, ctx, args) {
        return Reflect.apply(...arguments) * 2;
    }
};
function sum(left, right) {
    return left + right;
};
var proxy = new Proxy(sum, twice);
console.log(proxy(1,2));
console.log(proxy.call(null, 5,6));
console.log(proxy.apply(null, [5,6]));
*/

/*
var hander = {
    has (target, key) {
        if (key[0] === '_') {
            return false
        }
        return key in target
    }
};
var target = { _prop: 'foo', prop: 'foo' };
var newOne = new Proxy(target, hander);
console.log('_prop' in newOne)
console.log('prop' in newOne)*/

/*var obj = {
    a: 10
};
Object.preventExtensions(obj);
var proxy = new Proxy(obj, {
    has (target, key) {
        return false;
    }
});
console.log('a' in proxy)*/

/*
let stu1 = {name: '张三', score: 59};
let stu2 = {name: '李四', score: 99};
let handler = {
    has (target, key) {
        if (key === 'score' && target[key] < 60) {
            console.log(`${target.name}不及格`);
            return false;
        }
        return key in target
    }
};
let prox1 = new Proxy(stu1, handler);
let prox2 = new Proxy(stu2, handler);
console.log('score' in prox1)
console.log('score' in prox2)
for (let a in prox1) {
    console.log(prox1[a])
}
for (let b in prox2) {
    console.log(prox2[b])
}*/

/*
var p = new Proxy(function () {

}, {
    construct (target, args) {
        console.log(`called${args.join(', ')}`);
        return {
            value: args[0] * 10
        }
    }
});
console.log((new p(1)).value)*/

/*
var p = new Proxy(function () {

}, {
    construct (target, args) {
        return 1;
    }
});
new p(1)*/

/*
var handler = {
    deleteProperty (target, key) {
        invariant(key, 'delete');
        return true;
    }
};
function invariant(key, action) {
    if (key[0] === '_') {
        throw new Error(`Invalid attempt to ${action} private "${key}" property`);
    }
}
var target = { _prop: 'foo' };
var proxy = new Proxy(target, handler);
delete proxy._prop*/

/*
var handler = {
    defineProperty (target, key, descriptor) {
        return false;
    }
};
var target = {
    foo: 123
};
Object.preventExtensions(target);
Object.defineProperty(target, 'foo', {
    writable: false,
    configurable: false
})
var proxy = new Proxy(target, handler);
proxy.foo = 'bar'*/

/*
var handler = {
    getOwnPropertyDescriptor (target, key) {
        if (key[0] === '_') {
            return;
        }
        return Object.getOwnPropertyDescriptor(target, key)
    }
};
var target = { _foo: 'bar', baz: 'tar' };
var proxy = new Proxy(target, handler);
console.log(Object.getOwnPropertyDescriptor(proxy, 'wat'))
console.log(Object.getOwnPropertyDescriptor(proxy, '_foo'))
console.log(Object.getOwnPropertyDescriptor(proxy, 'baz'))*/

// var proto = {};
// var p = new Proxy({}, {
//     getPrototypeOf (target) {
//         return proto
//     }
// });
// console.log(Object.getPrototypeOf(p) === proto)

/*var p = new Proxy({}, {
    isExtensible (target) {
        console.log('called');
        return true;
    }
});
Object.isExtensible(p)*/

/*
var p = new Proxy({}, {
    isExtensible: function(target) {
        return false;
    }
});

Object.isExtensible(p)*/

/*
let target = {
    _bar: 'foo',
    _prop: 'bar',
    prop: 'baz'
};
let handler = {
    ownKeys (target) {
        return Reflect.ownKeys(target).filter((key) => key[0] !== '_')
    }
};
var proxy = new Proxy(target, handler);
for (let key of Object.keys(proxy)) {
    console.log(target[key]);
}*/

/*
let target = {
    a: 1,
    b: 2,
    c: 3,
    [Symbol.for('secret')]: '4',
};

Object.defineProperty(target, 'key', {
    enumerable: false,
    writable: true,
    configurable: true,
    value: 'static'
});
var handler = {
    ownKeys (target) {
        return ['a', 'b', 'd', Symbol.for('secret'), 'key']
    }
}
var proxy = new Proxy(target, handler);
console.log(Object.keys(proxy))
*/

/*
var p = new Proxy({}, {
    ownKeys (target) {
        return ['a', 'b', 'c'];
    }
});
console.log(Object.getOwnPropertyNames(p))*/

/*var p = new Proxy({}, {
    ownKeys (target) {
        return ['a', 'b', 'c', 123];
    }
});
console.log(Object.getOwnPropertyNames(p))*/

/*
var obj = {};
Object.defineProperty(obj, 'a', {
    configurable:false,
    writable:true,
    enumerable: true,
    value: 666
});
var p = new Proxy(obj, {
    ownKeys (target) {
        return ['b']
    }
});
Object.getOwnPropertyNames(p)*/

/*
var obj = {
    a: 1
};
Object.preventExtensions(obj);
var proxy = new Proxy(obj, {
    ownKeys (target) {
        return ['a']
    }
});
Object.getOwnPropertyNames(proxy)*/

/*var p = new Proxy({}, {
    preventExtensions (target) {
        console.log('called');
        Object.preventExtensions(target);
        return true
    }
});
Object.preventExtensions(p)*/

/*var handler = {
    setPrototypeOf (target, proto) {
        // throw new Error('Changing the prototype is forbidden');
        return false
    }
};
var target = function () {};
var proto = {};
var proxy = new Proxy(target, handler);
Object.setPrototypeOf(proxy, proto)*/

/*
let target = {};
let handler = {};
let {proxy, revoke} = Proxy.revocable(target, handler);
proxy.foo = '123';
console.log(proxy.foo);
revoke();
proxy.foo*/

/*const target = {
    m:function () {
        console.log(this === proxy)
    }
};
const handler = {};
const proxy = new Proxy(target, handler);
target.m();
proxy.m()*/

/*
const _name = new WeakMap();
class Person {
    constructor(name){
        _name.set(this, name)
    }
    get name () {
        return _name.get(this)
    }
}
const jane = new Person('Jane');
console.log(jane.name);
const proxy = new Proxy(jane, {});
console.log(proxy.name)
*/

/*
var target = new Date();
var proxy = new Proxy(target, {});
console.log(proxy.getDate())*/

