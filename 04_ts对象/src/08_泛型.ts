/**
 *  定义函数或者是类时，如果遇到类型不明确就可以适用泛型
 * **/ 

// function fn(a: any): any {
//   return a
// }

function fn<T>(a: T): T {
  return a
}
// 可以直接调用具有泛型的函数
console.log(fn(10)); // 不指定泛型，TS可以自动对类型进行推断
console.log(fn<string>('10')); // 指定泛型

// 泛型可以同时指定多个
function fn2<K, T>(a: K, b: T): K {
  console.log(b);
  
  return a
}

console.log(fn2<string, number>('coderwhh', 21));

// T extends Inter => 表示泛型T必须是Inter实现类（子类）
interface Inter {
  length: number
}
function fn3<T extends Inter>(a: T): number {
  return a.length
}
console.log(fn3('123'));
console.log(fn3({name: 'coderwhh', length: 3}));


class Myclass<T> {
  constructor(public name: T) {
    this.name = name
  }

}

const mc1 = new Myclass<string>('coderwhh')
const mc2 = new Myclass('coderwhh')