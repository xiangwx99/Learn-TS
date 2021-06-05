class Dog {
  // constructor => 构造函数 => 对象创建时调用
  name: string
  age: number
  constructor(name: string, age: number) {
    this.name  = name
    this.age = age 
  }
  brak() {
    console.log(this);
    console.log("汪汪汪！");
  }
}
const dog1 = new Dog("一狗", 12)
const dog2 = new Dog("二狗", 13)
console.log(dog1);
console.log(dog2);
dog1.brak()