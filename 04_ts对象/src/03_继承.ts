(function() {
  // 定义一个Animal类
  class Animal {
    name: string
    age: number
    constructor(name: string, age: number) {
      this.name = name
      this.age = age
    }
    sayHello() {
      console.log("动物在叫");
    }
  }
  // 定义一个表示狗的类
  // 使dog类继承animal类
  class Dog extends Animal{

  }
  // 定义一个表示猫的类
  // 使cat类继承animal类
  class Cat extends Animal{
    sayHello() {
      console.log("喵喵喵");
    }
  }
  const dog = new Dog("二狗", 12)
  const cat = new Cat("二猫", 12)
  dog.sayHello()
  cat.sayHello() 
  
})()