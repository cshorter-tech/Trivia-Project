import Question from "./Questions.js"
import Quiz from "./Quiz.js"

// Revealing Module Pattern via IFFE
const App = (function () {
    // Cache the Dom
    const surveyEl = document.querySelector(".survey")
    const surveyQuestionEl = document.querySelector(".survey__question")
    const surveyTrackerEl = document.querySelector(".survey__tracker")
    const taglineEl = document.querySelector(".survey__tagline")
    const surveyChoicesEl = document.querySelector(".survey__choices")
    const progressInnerEl = document.querySelector(".progress__bar-inner")
    const nextButtonEl = document.querySelector(".next")
    const restartButtonEl = document.querySelector(".restart")

    // Front End logic
    let counter = 0;

    const doubleCounter = () => {
        counter *= 2
    }
    const incrementCounter = () => {
        counter++
    }
    const getCounter = () => {
        return counter;
    }
    const setCounter = (newNum) => {
        counter = newNum;
    }

    // Public Methods
    return {
        get: getCounter,
        set: setCounter
    }
})();

console.log(App.get());
App.set(2);
console.log(App.get());





// const q1 = new Question("What is 1+1?", [1, 2, 3, 4], 1);
// const q2 = new Question("Who is the king of Pop?", ["Martin Luther King", "Michael Jackson", "Prince", "Earth, Wind & Fire"], 1);
// const q3 = new Question("Who is the first president of the US?", ["Abe Lincoln", "Obama", "George Washington", "George Bust"], 2);

// // console.log(q1.isCorrect(1))
// // console.log(q2.isCorrect(1))


// const qArray = [q1, q2, q3];

// const myQuiz = new Quiz(qArray);

// console.log(myQuiz);

// console.log(myQuiz.getCurrentQuestion());

// //button click
// myQuiz.nextIndex();
// console.log(myQuiz.getCurrentQuestion());

// // check if quiz ended
// console.log(myQuiz.lastIndex());