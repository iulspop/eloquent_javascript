{
  console.log("play with 'this' keyword");

  function purple() {
    return apples();
  }

  const turtle = {
    type: "animal",
    tail: true,
    legs: 4,

    mutateTail: function () {
      this.tail = 2;
    },
  };

  const apples = () => {
    function apple() {
      return this;
    }
    console.log(apple());
    return this;
  };
}

function apples() {
  return this;
}

{
  console.log("play with prototype");
  console.log(Object.getPrototypeOf({ purple: 5 }));

  let protoFruit = {
    eat() {
      return `what a yummy ${this.color} ${this.name}`;
    },
    red: "red",
  };

  let apple = Object.create(protoFruit);
  apple.color = "red";
  apple.name = "annoying apple";

  console.log(apple.eat());
  console.log(apple.toString());
}

{
  console.log("play with makeshift constructor");

  let protoBunny = {
    speak() {
      console.log(`${this.type} bunny wants grass.`);
    },
  };

  function bunnyConstructor(type) {
    let bunny = Object.create(protoBunny);
    bunny.type = type;
    return bunny;
  }

  let evilBunny = bunnyConstructor("evil");

  evilBunny.speak();
}

{
  console.log("play with constructor");

  function bunnyConstructor(type) {
    this.type = type;
  }

  bunnyConstructor.prototype.speak = function () {
    console.log(`${this.type} bunny wants grass.`);
  };

  let evilBunny = new bunnyConstructor("evil");
  evilBunny.speak();
}

{
  console.log("play with class notation");

  class Bunny {
    constructor(type) {
      this.type = type;
    }
    speak() {
      console.log(`I am a ${this.type} bunny.`);
    }
  }

  const purpleBunny = new Bunny("purple");

  purpleBunny.speak();
}

{
  console.log("play with Map class");

  let myMap = new Map();

  let purple = { funkyObject: "funky" };

  myMap.set(purple, "funky");

  console.log(myMap.get(purple));
  console.log(myMap.has(purple));
}

{
  console.log("play with polymorphism");

  function IAcceptObjectsOfManyShapes(object) {
    return object.x + object.y;
  }

  let myObject = {
    x: 5,
    y: 10,
  };

  let objectWithAnotherShape = {
    purple: "red",
    x: 10,
    y: 100,
  };

  console.log(IAcceptObjectsOfManyShapes(myObject));
  console.log(IAcceptObjectsOfManyShapes(objectWithAnotherShape));
}

{
  ("play with Symbol function");

  let sym = Symbol("banana");
  let sym2 = Symbol("toString");
  let sym3 = () => {};
  let sym4 = () => {};

  console.log(sym);
  console.log(sym2);
  console.log(sym == sym2);
  console.log(sym == "banana");

  let obj = {
    banana: "hello",
    [sym2]: "purple",
    [sym]: "gray",
    [sym4]: "",
    [sym3]() {
      return "red";
    },
  };

  console.log(obj[sym]);
  console.log(obj.toString());
  console.log(obj[sym3]());
  console.log(Object.keys(obj));
  console.log(Object.getOwnPropertyNames(obj));
  console.log(Object.getOwnPropertyDescriptor(obj));
  console.log(Object.getOwnPropertySymbols(obj));
}

{
  console.log("Play with iterator");

  let array = [1, 2];

  console.log(Object.getOwnPropertySymbols(array.__proto__));
  console.log(array[Symbol.iterator]());

  let arrayIterator = array[Symbol.iterator]();

  console.log(arrayIterator.next());
  console.log(arrayIterator.next());
  console.log(arrayIterator.next());
  console.log(arrayIterator.next());
}

{
  console.log("Play with __proto__ vs prototype");

  function Constructor(prop) {
    this.prop = prop;
  }

  Constructor.prototype.method = () => 2;

  let instance = new Constructor("prop");

  console.log(instance.__proto__ === Constructor.prototype);
}

{
  console.log("classical inheritence vs object composition");

  // Classical inheritence (is-a relationship)
  class Animal {
    constructor() {
      this.isAForceOfNature = true;
    }
    walks() {
      return "it walks";
    }
  }

  let animal = new Animal();
  console.log(animal.isAForceOfNature);
  console.log(animal.walks());

  class Dog extends Animal {
    constructor() {
      super();
      this.isDoggy = true;
    }
    playsCatch() {
      return "woof!";
    }
  }

  let dog = new Dog();
  console.log(dog.isAForceOfNature);
  console.log(dog.isDoggy);
  console.log(dog.playsCatch());

  // Object composition (has a relationship)
  const lifeForce = { value: true };
  const walks = { value: () => "it walks" };
  const swims = { value: () => "it swims" };

  let penguin = Object.create({}, { lifeForce, walks, swims });

  console.log(penguin.lifeForce);
  console.log(penguin.walks());
  console.log(penguin.swims());
}

{
  console.log("what does new keyword do?");

  function Constructor(prop) {
    this.prop = prop;
  }
  Constructor.prototype.foo = () => "bar";

  let instance = new Constructor("prop");
  console.log(instance.foo());
  console.log(instance.prop);

  let instance2 = Object.create(Constructor.prototype);
  Constructor.call(instance2, "prop");
  console.log(instance.foo());
  console.log(instance.prop);
}

{
  console.log("play with iterator again");

  let array = [0, 1, 2, 3, 4];
  let iterator = array[Symbol.iterator]();
  console.log(Object.getPrototypeOf(iterator.next()));
  console.log(iterator.next());
  console.log(iterator.next());
  console.log(iterator.next());
  console.log(iterator.next());
  console.log(iterator.next());
  console.log(iterator.next());
  console.log(iterator.next());
}
