// install node.js

// install readline - later

const question = [
    {
        question : "what is 2 + 2",
        options : ["2", "3", "4","5",],
        answer : "4"
    },
    {
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
    questions.ForEach((q, index) => {
        console.log(`Question $(index + 1): $(q.question)`);
    });
};