
// Prototypal pattern 

// let createMethods = {
//     isAnswerCorrect : function (index) {
//         return this.correctAnswerIndex === index ? true : false
//     },
//     getCorrectAnswer : function () {
//         return this.options[this.correctAnswerIndex]
//     }
// }

// function question(title, options, correctAnswerIndex) {
//     let obj = Object.create(createMethods);
//     obj.title = title;
//     obj.options = options;
//     obj.correctAnswerIndex = correctAnswerIndex 
//     return obj;
// }


// let firstQuestion = question(
//     'Where is the capital of Jordan',
//     ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
//     1
//   );
// let secondQuestion = question(
//     'Where is the capital of Jamaica',
//     ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],
//     2
//   );


// Pseudoclassical Pattern

// function Question(title, options, correctAnswerIndex) {
//     this.title = title;
//     this.options = options;
//     this.correctAnswerIndex = correctAnswerIndex;
// }

// Question.prototype = {
//     isAnswerCorrect : function (index) {
//         return this.correctAnswerIndex === index ? true : false
//     },
//     getCorrectAnswer : function () {
//         return this.options[this.correctAnswerIndex]
//     }
// }


// let firstQuestion = new Question(
//     'Where is the capital of Jordan',
//     ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
//     1
//   );
// let secondQuestion = new Question(
//     'Where is the capital of Jamaica',
//     ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],
//     2
//   );
    
class Question {
    constructor(title, options, correctAnswerIndex) {
        this.title = title;
        this.options = options;
        this.correctAnswerIndex = correctAnswerIndex;
    }
    isAnswerCorrect(index) {
        return this.correctAnswerIndex === index ? true : false
    }
    getCorrectAnswer () {
        return this.options[this.correctAnswerIndex]
    }
}

let firstQuestion = new Question(
    'Where is the capital of Jordan',
    ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    1
  );
  let secondQuestion = new Question(
    'Where is the capital of Jamaica',
    ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],
    2
  );