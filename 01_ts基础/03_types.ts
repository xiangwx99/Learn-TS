// 也可以直接使用字面量进行类型声明
let aa: 10
aa = 10
// aa = 11


// 可以使用 | 来连接多个类型<联合类型>
let bb: 'male' | 'famale'
bb = 'male'
bb = 'famale'

// 一个变量设置为any => 相当于对该变量关闭ts类型检测
// let cc: any

// 声明变量不指定类型且不赋值，则TS解析器会自动判断变量的类型为any
let cc;
cc = 1
cc = "1"
cc = true

let e: unknown;
e = 1
e = "1"
e = true

// cc的类型是any，他可以赋值给任何变量
let s: string
s = cc

e = 'hello'
s = 'hello'

// unknown实际上是一个安全类型的any
// unknown类型的变量不能直接赋值给其他变量
// s = e
if(typeof e === 'string') {
  s = e
}

// 类型断言, 可以告诉解析器变量的实际类型
/**
 * 语法： 
 *  变量 as 类型
 *  <类型>变量 
 * **/ 
s  = e as string
s = <string>e

// void表示空，以函数伪类
function fn(): void {
  return null
}

// 表示永远不会返回结果
function fn2(): never {
  throw new Error('报错了！')
}

