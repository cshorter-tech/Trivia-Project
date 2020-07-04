import Question from "./Questions.js"
import Survey from "./Survey.js"

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

    // Question Intializers
    const q1 = new Question("How many 'original' musketeers are there?", ["One", "Two", "Three", "Four"], 2);
    const q2 = new Question("Who is the king of Pop?", ["Martin Luther King", "Michael Jackson", "Prince", "Earth, Wind & Fire"], 1);
    const q3 = new Question("Who is the first president of the US?", ["Abe Lincoln", "Obama", "George Washington", "George Bush"], 2);
    const q4 = new Question("When was JavaScript created?", ["1800s", "2020", "1990", "1995"], 3);
    const q5 = new Question("What is the base ingredient of Pho?", ["Chicken", "Beef", "Bone Broth", "Red Peppers"], 2);
    const q6 = new Question("What is the capital of France?", ["Panama", "Washington, DC", "London", "Paris"], 3);
    const q7 = new Question("What is considered traditional to Japanese cuisine?", ["Sushi", "Frog Legs", "Burgers", "Mash & Potatoes"], 0);

    const surveyArray = [q1, q2, q3, q4, q5, q6, q7];
    const survey = new Survey(surveyArray);
    // console.log(survey)

    // Render Components
    const setValue = (elem, value) => {
        elem.innerHTML = value;
    }


    const renderQuestion = _ => {
        const question = survey.getCurrentQuestion().question;
        // surveyQuestionEl.innerHTML = question;
        setValue(surveyQuestionEl, question)

    }
    // renderQuestion();

    const renderChoices = _ => {
        let markup = "";
        const currentChoices = survey.getCurrentQuestion().choices;
        currentChoices.forEach((elem, index) => {
            // console.log(elem, index)
            markup += `
            <li class="choice">
              <input
                type="radio"
                name="choice"
                class="survey__input"
                id="choice${index}"
              />
              <label for="choice${index}" class="survey__label">
                <i></i>
                <span>${elem}</span>
              </label>
            </li>
            `
        })
        // surveyChoicesEl.innerHTML = markup;
        setValue(surveyChoicesEl, markup)


    }
    // renderChoices();

    const renderTracker = _ => {

    }


    const renderAll = () => {
        if (survey.lastIndex()) {
            // 1. render end quiz modale
        } else {
            // 1. render suvery question
            renderQuestion();
            // 2. render survey choices
            renderChoices();
            // 3. render survey tracker
            // 4. render survey bar-inner


        }
    }
    renderAll()

    // console.log(survey.lastIndex());

    // Front End logic
    let counter = 0;

    const doubleCounter = () => {
        counter *= 2
    };
    const incrementCounter = () => {
        counter++
    };
    const getCounter = () => {
        return counter;
    };
    const setCounter = (newNum) => {
        counter = newNum;
    };

    // Public Methods
    return {
        get: getCounter,
        set: setCounter
    };
})();

// console.log(App.get());
// App.set(2);
// console.log(App.get());







// // console.log(q1.isCorrect(1))
// // console.log(q2.isCorrect(1))




// console.log(myQuiz);

// console.log(myQuiz.getCurrentQuestion());

// //button click
// myQuiz.nextIndex();
// console.log(myQuiz.getCurrentQuestion());

// // check if quiz ended
