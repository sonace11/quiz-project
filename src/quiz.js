// install node.js

// install readline - later
 const readlineSync = require('readline-sync');

const question = [
    { //index 0
        question : "what is 2 + 2",
        options : ["2", "3", "4","5",],
        answer : "4"
    },
    { // index 1
        question : "what is the capital of new zealand",
        options : ["Auckland","wellington","nelson", "Christchurch"],
        answer : "wellington"
    }
    // add more question here.
];

//declare quiz function 
function quiz() {
    let score = 0;

    // iterate through question 
    question.forEach((q, index) => {
        console.log(`Question ${index + 1}: ${q.question}`);// displays the question number and question
        q.options.forEach((options, i) => {
            console.log(`${i +1}. ${options}`); // displays quesntion options
        });
        
    
    // request user input via readline 
let userAnswer = readlineSync.question(`Your answer ( number)`);
let answerIndex = parentInt(userAnswer,10) -1;

if(answerIndex < 0 || answerIndex > q.options.length ) {
    console.log(`PLease select an option for 1 to ${q.options.length}`);

}else if (q.options[answerIndex]=== q.answer) {
    console.log("correct!");
    score++
}else {
    console.log("wrong!");
}
})   
console.log(`Your final score is: ${score} / ${questions.length}`);
};

quiz();
