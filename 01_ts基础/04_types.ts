// object 表示一个js对象
let obj: object
obj = {}
obj = function() {}

// {}用来指定对象中可以包含哪些属性
// 语法： {属性名： 属性值， 属性名： 属性值}
// 属性名后加？表示属性值可选
let objB: {name: string, age?: number}
objB = {name: "猪八戒"}

//[propName: string]: any => 任意类型的属性
let objC: {name: string, [propName: string]: any}
objC = {name: "猪八戒", age: 12, gender: 'man'}

/***
 *  设置函数的类型声明：
 *    语法： (形参：类型， 形参：类型，...) => 返回值
 * 
 * * */
let d: (a: number, b:number) => number 
d = function(a, b): number {
  return a + b
}