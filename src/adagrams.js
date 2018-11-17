const STATIC_LETTER_HASH = {
  A: 9, B: 2, C: 2, D: 4, E: 12,
  F: 2, G: 3, H: 2, I: 9, J: 1,
  K: 1, L: 4, M: 2, N: 6, O: 8,
  P: 2, Q: 1, R: 6, S: 4, T: 6,
  U: 4, V: 2, W: 2, X: 1, Y: 2,
  Z: 1
};

const Adagrams = {

  createLetterPool(){

    let letterPool = []

    for (let letter in STATIC_LETTER_HASH) {
      let count = STATIC_LETTER_HASH[letter]
      for (let i = 0; i < count; i += 1) {
        letterPool.push(letter);
      }
    }
    return letterPool
  },

  scoreLetter(letter){
    switch(letter){
      case 'A':
      case 'E':
      case 'I':
      case 'O':
      case 'U':
      case 'L':
      case 'N':
      case 'R':
      case 'S':
      case 'T':
      return 1
      case 'D':
      case 'G':
      return 2
      case 'B':
      case 'C':
      case 'M':
      case 'P':
      return 3
      case 'F':
      case 'H':
      case 'V':
      case 'W':
      case 'Y':
      return 4
      case 'K':
      return 5
      case 'J':
      case 'X':
      return 8
      case 'Q':
      case 'Z':
      return 10
    }
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

    return playerHand
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
        return false
      }
    }

    return true
  },

  scoreWord(word){
    let score = 0;
    let scoreWord = word.toUpperCase().split('');
    if (scoreWord.length >= 7) {
      score += 8;
    }
    scoreWord.forEach(function (letter){
      score += Adagrams.scoreLetter(letter);
    });
    return score
  },

  highestScoreFrom(wordArr){
    let highestScoringWord = { word: '', score: 0 }
    wordArr.forEach(function (word){
      // Select the word with best score
      if(Adagrams.scoreWord(word) > highestScoringWord.score) {
        highestScoringWord.word = word
        highestScoringWord.score = Adagrams.scoreWord(word)
      } else if (Adagrams.scoreWord(word) === highestScoringWord.score){
        if (word.length === highestScoringWord.word.length){
          return;
        } else if (highestScoringWord.word.length === 10) {
          return;
        } else if (word.length === 10) {
          highestScoringWord.word = word;
          highestScoringWord.score = Adagrams.scoreWord(word);
        } else if (word.length < highestScoringWord.word.length) {
          highestScoringWord.word = word;
          highestScoringWord.score = Adagrams.scoreWord(word);
        }
      }
    });
    return highestScoringWord
  }

};

// Do not remove this line or your tests will break!
export default Adagrams;
