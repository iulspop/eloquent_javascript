{
  console.log("play with array.filter(test)")

  let array = [0, 1, 2, 3, 4, 5]

  console.log(array.filter(el => el > 3))
}


{
  console.log("play with array.map(transform)")

  let array = [0, 1, 2, 3, 4, 5]

  console.log(array.map(el => el + 3))
}

{
  console.log("create reduce(array, combine, start)")

  let array = [0, 1, 2, 3, 4, 5]

  const fold = (array, combine, start = array[0]) => {
    let current = start
    for (let element of array) {
      current = combine(current, element)
    }
    return current
  }

  console.log(fold(array, (a, b) => a + b))
  console.log(array.reduce((a, b) => a === 0 ? a + b : a * b))
}