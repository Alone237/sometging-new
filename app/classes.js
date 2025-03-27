//syntax for a class//
class Animal{
    constructor(name, age){
        console.log(`${name} is an animal and was created`);
        this.name = name;
        this.age = age;
    }

    eat(){
        console.log(`${this.name} is eating`);
    }

    sleep() {
        console.log(`${this.name} is sleeping`);
    }
}

//constructors get invoke when we call a class
//creating an object in a class
Animal.iAmAstaticMethod();

const boby = new Animal("boby", 2);
boby.eat();
boby.sleep();
console.log("-----");