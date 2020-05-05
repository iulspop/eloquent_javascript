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
