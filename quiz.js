const quizData = [
    {
        question: "How old florine is.",
        a: '10',
        b: '20',
        c: '26',
        d: '110',
        ans: 'c'
    },
    {
        question: "who is father of nation.",
        a: "viveka nand",
        b: "zakir hussain",
        c: "apj abdul kalam",
        d: "mahatma gandhi",
        ans: 'd'
    },
    {
        question: "which one is the national bird of India",
        a: "pegion",
        b: "parrot",
        c: "sparrow",
        d: "peacock",
        ans: "d"
    },
    {
        question: "HTML stands for.",
        a: 'cascading style sheet',
        b: 'hyperText markup language',
        c: 'none of these',
        d: 'all of these',
        e: 'b'
    },
    {
        question: "who is called missile man",
        a: 'apj abdul kalam',
        b: 'jawahar lal nehru',
        c: 'narendra modi',
        d: 'none of these',
        ans: 'a'
    },
    {
        question: "who is the father of the computer",
        a: 'larry wheels',
        b: 'charles babbage',
        c: 'alen turing',
        d: 'none of these',
        ans: 'b'
    }
]
let currQuestion = 0;
let score = 0;
const question = document.getElementsByTagName("h2")[0];
const a = document.getElementById('ques_a');
const b = document.getElementById('ques_b');
const c = document.getElementById('ques_c');
const d = document.getElementById('ques_d');
const quizContainer=document.getElementsByClassName('quiz-container')[0];
const quizHeader=document.getElementsByClassName('quiz-header')[0];
const btn = document.getElementsByTagName('button')[0];
function loadNextQuestion() {
    let data = quizData[currQuestion];
   quizHeader.innerHTML=`<h2>${data.question}!</h2>
   <ul>
       <li>
           <input type="radio" id="a" name="answer">
           <label for="a" id="ques_a">${data.a}</label>
       </li>
       <li>
           <input type="radio" id="b" name="answer">
           <label for="b" id="ques_b">${data.b}</label>
       </li>
       <li>
           <input type="radio" id="c" name="answer">
           <label for="c" id="ques_c">${data.c}</label>
       </li>
       <li>
           <input type="radio" id="d" name="answer">
           <label for="d" id="ques_d">${data.d}</label>
       </li>
   </ul>`
}
function calculateScore(ans){
 if(ans==quizData[currQuestion].ans){
 score++; 
  }
}
loadNextQuestion();
btn.addEventListener('click', () => {
    let getSelectedValue = document.querySelector( 'input[name="answer"]:checked');
    if(getSelectedValue==null){
    alert("select an option to proceed");
    return;
    }
    calculateScore(getSelectedValue.id);
    currQuestion++;
    if(currQuestion==quizData.length)
    {
        alert(`Congrats you got ${score} marks!`);
        location.reload();
    }
    loadNextQuestion();
})