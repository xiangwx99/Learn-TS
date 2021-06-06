(function() {
  // 定义一个表示人的类
  /**
   *  public修饰的属性可以在任意位置访问（修改），默认值
   * private 私有属性，只能在内部进行修改
   * 
   * **/
  class Person {
    name: string
    private _gender: string
    private age: string
    constructor(name: string, _gender: string, age: string) {
      this.name = name
      this.age = age
      this._gender = _gender
    }
    // 定义方法获取age 属性
    // getAge() {
    //   return this.age
    // }
    // 定义set方法 设置age属性
    // setAge(age: string) {
    //    this.age = age
    // }
    // TS中设置 get方法的方式
    get gender() {
      console.log("====> 执行了");
      
      return this.name
    }
    set gender(name: string) {
     this.name = name
    }
  }
  const per = new Person("coderwhh", "man", "12")
  // per.age = '13'
  console.log(per);
  per.gender = "women"
  console.log(per.gender);
  
  
})()