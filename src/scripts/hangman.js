const PLAYING_STATUS = "playing";
const FINISHED_STATUS = "finished";
const FAILED_STATUS = "failed";

class Hangman {
  constructor(word, attempts) {
    this.word = word.toLowerCase().split("");
    this.attempts = attempts;
    this.gussedLetters = [];
    this.status = PLAYING_STATUS;
  }

  get puzzle() {
    let puzzle = "";
    this.word.forEach((letter) => {
      puzzle +=
        this.gussedLetters.includes(letter) || letter === " " ? letter : "*";
    });
    return puzzle;
  }

  isGameRunning() {
    return this.status === PLAYING_STATUS;
  }

  isPuzzleSolved() {
    return this.word.every((letter) => {
      return letter === " " || this.gussedLetters.includes(letter);
    });
  }

  updateStatus() {
    if (this.attempts > 0)
      this.status = this.isPuzzleSolved() ? FINISHED_STATUS : PLAYING_STATUS;
    else this.status = FAILED_STATUS;
  }

  makeGusse(gussedLetter) {
    if (!this.isGameRunning()) return;

    gussedLetter = gussedLetter.toLowerCase();
    if (!this.gussedLetters.includes(gussedLetter)) {
      this.gussedLetters.push(gussedLetter);
      if (!this.word.includes(gussedLetter)) this.attempts--;
      this.updateStatus();
    }
  }

  get statusMessage() {
    switch (this.status) {
      case PLAYING_STATUS:
        return `Guesses left : ${this.attempts}`;
      case FINISHED_STATUS:
        return `Great work !! you gussed the word !!`;
      case FAILED_STATUS:
        return `Nice try , the word was :  ${this.word
          .join("")
          .toUpperCase()} `;
      default:
        throw Error("Unkown status !!");
    }
  }
}

export { Hangman as default };
