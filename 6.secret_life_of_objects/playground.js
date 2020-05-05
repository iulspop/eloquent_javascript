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

console.log(apples());

console.log(this);
