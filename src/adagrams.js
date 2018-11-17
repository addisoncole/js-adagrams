const staticLetterHash = {
  A: 9, B: 2, C: 2, D: 4, E: 12,
  F: 2, G: 3, H: 2, I: 9, J: 1,
  K: 1, L: 4, M: 2, N: 6, O: 8,
  P: 2, Q: 1, R: 6, S: 4, T: 6,
  U: 4, V: 2, W: 2, X: 1, Y: 2,
  Z: 1
}
const Adagrams = {

  createLetterPool(){

    let letterPool = []

    for (let letter in staticLetterHash) {
      let count = staticLetterHash[letter]
      for (let i = 0; i < count; i += 1) {
        letterPool.push(letter);
      }
    }
    return letterPool
  },

  drawLetters() {

    let letterPool = Adagrams.createLetterPool()
    let playerHand = []

    for (let i = 0; i < 10; i += 1) {
      let randomNum = Math.floor ( Math.random() * letterPool.length )
      let letter = letterPool[randomNum];
      letterPool.splice(randomNum, 1);
      playerHand.push(letter);
    }

    return playerHand;
  },

  //  let arr1 = ['w', 'o', 'r', 'd'];
  // let word = "word";
  // Adagrams.usesAvailableLetters(word, drawn)

  usesAvailableLetters(word, drawnLetters){
    let checkWord = word.split('');
    let checkLetters = drawnLetters.slice(0);

    checkWord.sort();
    checkLetters.sort();

    let i = 0;

    while (i < checkWord.length) {

      if (checkWord[i] === checkLetters[i]) {
        i++;
      } else {
        return false;
      }
    }

    return true;
  }

};

// Do not remove this line or your tests will break!
export default Adagrams;
