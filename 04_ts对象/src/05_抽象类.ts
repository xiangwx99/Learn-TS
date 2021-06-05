(function() {
  /**
   *  以abstract开头的类为抽象类  
   *      和其他类的区别不大，只是不可以用来创建类
   *      抽象类就是专门用来继承的类
   *      抽象类中可以添加抽象方法
   * **/ 
  abstract class Animal {
    name: string
    constructor(name: string) {
      this.name = name
    }
    // 定义一个抽象方法，使用abstract开头，没有方法体
    // 抽象方法只能定义在抽象类中，子类必须对抽象方法进行重写
    abstract sayHello(): void
  }
  class Dog extends Animal {
    age: number

    // 如果在子类中写了构造函数，在子类构造函数中必须对父类的构造函数进行调用
    constructor(name: string, age: number) {
      super(name)
      this.age =age
    }
    sayHello() {
      // 在类的方法中，super表示当前类的父类
      console.log("====> 汪汪汪")
      
    }
  }
  const dog = new Dog('二狗', 12)
  dog.sayHello()
})()