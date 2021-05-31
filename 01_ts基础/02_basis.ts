// 声明一个变量a，同时指定他的类型为number
let b: number;
b = 1
b = 2
//b = "1" // 报错： 变量b的类型为number，不能赋值字符串

let c: string
c = 'hello'

// 声明完变量直接赋值
// let a: boolean = true

// 如果声明变量和赋值是同时进行的，TS可以对变量进行自动监测
let a = false
// a = 1

// JS中函数是不考虑类型和个数的
// function sum(a, b) {
//   return  a + b
// }
// console.log(sum(1,2)); // 3
// console.log(sum(1,'2')); // '12'

function sum(a: number, b: number): number {
  return a + b
}
// sum(1, '2')
// sum(1, 2, 3)
let res = sum(1, 2)