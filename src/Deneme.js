function Person(name, age) {
    this.name = name;
    this.age = age;
    
    this.sayHello = function() {
      console.log("Merhaba, ben " + this.name);
    }
  }
  
  var person1 = new Person("Ali", 25);
  person1.sayHello(); // "Merhaba, ben Ali" yazdırır
export default Person;  