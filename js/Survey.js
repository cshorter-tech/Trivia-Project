export default function Survey(questions) {
    this.questions = questions;
    this.score = 0;
    this.currentIndex = 0;
}

Survey.prototype.getCurrentQuestion = function () {
    return this.questions[this.currentIndex];
}

Survey.prototype.nextIndex = function () {
    this.currentIndex++;
}

Survey.prototype.lastIndex = function () {
    return this.currentIndex === this.questions.length;
}

Survey.prototype.guess == function (userInput) {
    const currentQuestion = this.questions[this.currentIndex]
    if (currentQuestion.isCorrect(userInput)) {
        this.score++
    }
    this.nextIndex();
}



