export default function Quiz(questions) {
    this.questions = questions;
    this.score = 0;
    this.currentIndex = 0;
}

Quiz.prototype.getCurrentQuestion = function () {
    return this.questions[this.currentIndex];
}

Quiz.prototype.nextIndex = function () {
    this.currentIndex++;
}

Quiz.prototype.lastIndex = function () {
    return this.currentIndex === this.questions.length;
}

Quiz.prototype.guess == function (userInput) {
    const currentQuestion = this.questions[this.currentIndex]
    if (currentQuestion.isCorrect(userInput)) {
        this.score++
    }
    this.nextIndex();
}



