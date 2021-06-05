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

/**
 *  
 * 数组的类型声明：
 *    类型:[]
 *    Array<类型>
 * **/ 
// string[]: 表示字符串类型的数组
// number[]: 表示数值类型的数组
let arr: string[]
let arr2: Array<number>


/**
 *  元组： 元组就是固定长度的数组
 * **/ 

let h: [string, string]
h = ['hello', '123']


/**
 *  enum: "枚举"
 * **/ 
enum Gender {
  Male = 0,
  Female = 1
}
let i: {name: string, gender: Gender.Male}
console.log(i.gender === Gender.Male);


// &表示同时
let j: {name: string} & {age: number}
j = {name: "coderwhh", age: 21}

// 类型的别名
type myType = string
let k: 1 | 2 | 3 | 4
let l: 1 | 2 | 3 | 4
let m: myType

type myType1 = 1 | 2 | 3 | 4
let x: myType1
let y: myType1