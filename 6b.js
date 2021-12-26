const input = [1, 3, 1, 5, 5, 1, 1, 1, 5, 1, 1, 1, 3, 1, 1, 4, 3, 1, 1, 2, 2, 4, 2, 1, 3, 3, 2, 4, 4, 4, 1, 3, 1, 1, 4, 3, 1, 5, 5, 1, 1, 3, 4, 2, 1, 5, 3, 4, 5, 5, 2, 5, 5, 1, 5, 5, 2, 1, 5, 1, 1, 2, 1, 1, 1, 4, 4, 1, 3, 3, 1, 5, 4, 4, 3, 4, 3, 3, 1, 1, 3, 4, 1, 5, 5, 2, 5, 2, 2, 4, 1, 2, 5, 2, 1, 2, 5, 4, 1, 1, 1, 1, 1, 4, 1, 1, 3, 1, 5, 2, 5, 1, 3, 1, 5, 3, 3, 2, 2, 1, 5, 1, 1, 1, 2, 1, 1, 2, 1, 1, 2, 1, 5, 3, 5, 2, 5, 2, 2, 2, 1, 1, 1, 5, 5, 2, 2, 1, 1, 3, 4, 1, 1, 3, 1, 3, 5, 1, 4, 1, 4, 1, 3, 1, 4, 1, 1, 1, 1, 2, 1, 4, 5, 4, 5, 5, 2, 1, 3, 1, 4, 2, 5, 1, 1, 3, 5, 2, 1, 2, 2, 5, 1, 2, 2, 4, 5, 2, 1, 1, 1, 1, 2, 2, 3, 1, 5, 5, 5, 3, 2, 4, 2, 4, 1, 5, 3, 1, 4, 4, 2, 4, 2, 2, 4, 4, 4, 4, 1, 3, 4, 3, 2, 1, 3, 5, 3, 1, 5, 5, 4, 1, 5, 1, 2, 4, 2, 5, 4, 1, 3, 3, 1, 4, 1, 3, 3, 3, 1, 3, 1, 1, 1, 1, 4, 1, 2, 3, 1, 3, 3, 5, 2, 3, 1, 1, 1, 5, 5, 4, 1, 2, 3, 1, 3, 1, 1, 4, 1, 3, 2, 2, 1, 1, 1, 3, 4, 3, 1, 3]

//Had to redo the solution
//Could've used a Map but I'm lazy
numFishes = {
  0: 0,
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
  6: 0,
  7: 0,
  8: 0
}
input.forEach(el => {
  numFishes[el] = numFishes[el] + 1
})

for (let i = 1; i <= 256; ++i) {
  let numFishToReproduce = numFishes[0];
  for (let j = 0; j <= 6; ++j) {
    const decrementTo = j === 0 ? 0 : j - 1
    numFishes[decrementTo] = numFishes[j]
  }
  numFishes[6] = numFishToReproduce + numFishes[7]
  numFishes[7] = numFishes[8]
  numFishes[8] = numFishToReproduce
}

console.log(numFishes[0] + numFishes[1] + numFishes[2] + numFishes[3] + numFishes[4] + numFishes[5] + numFishes[6] + numFishes[7] + numFishes[8])