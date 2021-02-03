// let title = "Where is the captial of Jordan";
// let options = ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'];
// let correctAnswerIndex = 1;

// function isAnswerCorrect(index) {
//     return correctAnswerIndex === index ? true : false;
// }
// function getCorrectAnswer() {
//     return options[1];
// }

function quizFb(title, options, correctAnswerIndex) {

    let obj = {
        title : title,
        options : options,
        correctAnswerIndex : correctAnswerIndex,
        isAnswerCorrect : function (index) {
            return this.correctAnswerIndex === index ?  true : false;
        },
        getCorrectAnswer : function () {
            return this.options[this.correctAnswerIndex];
        },
    }
    return obj;
}

let quiz = quizFb ('Where is the capital of Jordan', ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'], 1);




