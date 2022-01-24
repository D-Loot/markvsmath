// Associate the html elements to variables in Javascript

// Initial Screen: highScore, HighScore (title), PlayerScores (list elements), Start Button
var highScore = document.querySelector(".highScore");
var playerScores = document.querySelector(".playerScores");
var playerScore = document.querySelector(".playerScore");
var startButton = document.querySelector(".startButton");
var resetButton = document.querySelector(".resetButton");
var titleScreen = document.querySelector(".titleScreen");

// Game Screen: Timer Element, Score Element, Question, Answer Button
var gameScreen = document.querySelector(".gameScreen");
var qNumberElement = document.querySelector(".qNumberElement");
//var timerElement = document.querySelector(".timerElement");
var scoreElement = document.querySelector(".scoreElement");

var questions = document.querySelector(".questions");
var questionText = document.querySelector(".questionText");
var button1 = document.querySelector(".buttonA1");
var button2 = document.querySelector(".buttonA2");
var button3 = document.querySelector(".buttonA3");
var button4 = document.querySelector(".buttonA4");

// Submit Screen: Text form, Score display, Submit button
var submitScreen = document.querySelector(".submitScreen");
var nameSubmit = document.querySelector("#nameSubmit");
var submitButton = document.querySelector(".submitButton");

// Global Variables
var score = 0;
var questionNumber = 1;
//var timer;
var qtext = a1 = a2 = a3 = a4 = answer = ""


// This generates a list of fake scores and names for the player to beat initially

var highScoreArray = [{
    name: "Minecraft Steve",
    score: 9
},{
    name: "Mario",
    score: 8
},{
    name: "Peach",
    score: 7
},{
    name: "Zelda",
    score: 6
},{
    name: "Link",
    score: 5
},{
    name: "Bowser",
    score: 4
},{
    name: "Luigi",
    score: 3
},{
    name: "Ash",
    score: 2
},{
    name: "Charizard",
    score: 1
},{
    name: "Psyduck",
    score: 0
}]

// These are the questions used in the quiz
/*
const qs = [
    {
        question:'Which of following is not an attribute of <form> tag',
        options: ['Action',
        'Method',
        'name',
        'url'],
        answer:'url',
    },{
        question:'HTML Is A Subset Of',
        options: ['SGMT',
        'SGMD',
        'SGML',
        'None Of These'],
        answer:'SGML',
    },{
        question:'The BODY Tag Is Usually Used After',
        options: ['EM Tag',
        'TITLE Tag',
        'HEAD Tag',
        'HTML Tag'],
        answer:'HTML Tag',
    },{
        question:'A Much Better Approach To Establish The Base URL \nIs To Use The ______ Element.',
        options: ['BODY',
        'BASE',
        'HEAD',
        'None Of The Above'],
        answer:'BASE',
    },{
        question:'Gif And Jpg Are The Two Main Types Of What ?',
        options: ['Videos',
        'Images',
        'None Of The Above',
        'Animated Effects'],
        answer:'Animated Effects',
    },{
        question:'CSS stands for -',
        options: ['Cascade style sheets',
        'Color and style sheets',
        'Cascading style sheets',
        'None of the above'],
        answer:'Cascading style sheets',
    },{
        question:'The property in CSS used to change the background \ncolor of an element is -',
        options: ['bgcolor',
        'color',
        'background-color',
        'All of the above'],
        answer:'background-color',
    },{
        question:'The property in CSS used to change the \ntext color of an element is -',
        options: ['bgcolor',
        'color',
        'background-color',
        'All of the above'],
        answer:'color',
    },{
        question:"The CSS property used to control the element's font-size is -",
        options: ['text-style',
        'text-size',
        'font-size',
        'None of the above'],
        answer:'font-size',
    },{
        question:'The HTML attribute used to define the inline styles is -',
        options: ['style',
        'styles',
        'class',
        'None of the above'],
        answer:'style',
    },{
        question:'Which of the following CSS property is used to set \nthe background image of an element?',
        options: ['background-attachment',
        'background-image',
        'background-color',
        'None of the above'],
        answer:'background-image',
    },{
        question:'Which of the following is the correct syntax to make \nthe background-color of all paragraph elements to yellow?',
        options: ['p {background-color : yellow;}',
        'p {background-color : #yellow;}',
        'all {background-color : yellow;}',
        'all p {background-color : #yellow;}'],
        answer:'p {background-color : yellow;}',
    },{
        question:'Which of the following is the correct syntax to display \nthe hyperlinks without any underline?',
        options: ['a {text-decoration : underline;}',
        'a {decoration : no-underline;}',
        'a {text-decoration : none;}',
        'None of the above'],
        answer:'a {text-decoration : none;}',
    },{
        question:'___ best describes the type of language JavaScript is.',
        options: ['Object-Oriented',
        'Object-Based',
        'Assembly-language',
        'High-level'],
        answer:'Object-Based',
    },{
        question:'Which one of the following also known as Conditional Expression:',
        options: ['Alternative to if-else',
        'Switch statement',
        'If-then-else statement',
        'immediate if'],
        answer:'immediate if',
    },{
        question:'In JavaScript, what is a block of statement?',
        options: ['Conditional block',
        'block that combines a number \nof statements into a single \ncompound statement',
        'both conditional block and a single statement',
        'block that contains a single statement'],
        answer:'block that combines a number \nof statements into a single \ncompound statement',
    },{
        question:'When interpreter encounters an empty statements, what it will do:',
        options: ['Shows a warning',
        'Prompts to complete the statement',
        'Throws an error',
        'Ignores the statements'],
        answer:'Ignores the statements',
    },{
        question:'The "function" and " var" are known as:',
        options: ['Keywords',
        'Data types',
        'Declaration statements',
        'Prototypes'],
        answer:'Declaration statements',
    },{
        question:'Which of the following variables takes precedence over the \nothers if the names are the same?',
        options: ['Global variable',
        'The local element',
        'The two of the above',
        'None of the above'],
        answer:'The local element',
    },{
        question:'Which one of the following is the correct way \nfor calling the JavaScript code?',
        options: ['Preprocessor',
        'Triggering Event',
        'RMI',
        'Function/Method'],
        answer:'Function/Method',
    },{
        question:'Which of the following type of a variable is volatile?',
        options: ['Mutable variable',
        'Dynamic variable',
        'Volatile variable',
        'Immutable variable'],
        answer:'Mutable variable',
    },{
        question:'Which of the following option is used as hexadecimal literal beginning?',
        options: ['0',
        '0x',
        '0X',
        'Both 0x and 0X'],
        answer:'Both 0x and 0X',
    },{
        question:'When there is an indefinite or an infinite value during \nan arithmetic computation in a program, then JavaScript prints______.',
        options: ['Prints an exception error',
        'Prints an overflow error',
        'Displays "Infinity"',
        'Prints the value as such'],
        answer:'Displays "Infinity"',
    },{
        question:'In the JavaScript, which one of the following is \nnot considered as an error:',
        options: ['Syntax error',
        'Missing of semicolons',
        'Division by zero',
        'Missing of Bracket'],
        answer:'Division by zero',
    },{
        question:'Which of the following givenfunctions of the Number Object \nformats a number with a different number of digits to the \nright of the decimal?',
        options: ['toExponential()',
        'toFixed()',
        'toPrecision()',
        'toLocaleString()'],
        answer:'toFixed()',
    },{
        question:'Which of the following number object function returns \nthe value of the number?',
        options: ['toString()',
        'valueOf()',
        'toLocaleString()',
        'toPrecision()'],
        answer:'valueOf()',
    },{
        question:'Which of the following function of the String object returns \nthe character in the string starting at the specified position \nvia the specified number of characters?',
        options: ['slice()',
        'split()',
        'substr()',
        'search()'],
        answer:'substr()',
    },{
        question:'In JavaScript the x===y statement implies that:',
        options: ['Both x and y are equal in value, \ntype and reference address as well.',
        'Both are x and y are \nequal in value only.',
        'Both are equal in the \nvalue and data type.',
        'Both are not same at all.'],
        answer:'Both are equal in the \nvalue and data type.',
    }]
*/

// Initialize the webpage by getting and displaying the High Scores and the names associated with them
init();
function init(){
    setTitleScreen();
}
function setTitleScreen(){
    getHighScore();
    titleScreen.style.display= "block";
    gameScreen.style.display= "none";
    submitScreen.style.display="none";
    startButton.style.display="block";
    resetButton.style.display="block";
    submitButton.style.display="none";
    scoreElement.style.display="none";
}

function getHighScore(){
    // Get the local storage of highScoreArray
    var storedHighScoresArray = JSON.parse(localStorage.getItem("highScoreArray"));
    // If storedHighScoreArray is not null, then the highScoreArray is the stored array
    if (storedHighScoresArray !== null) {
      highScoreArray = storedHighScoresArray;
    }

    // Clear the existing high score display
    playerScores.innerHTML = "";

    // Sort the array from high score to low score
    var sortScores = highScoreArray.slice(0);
    sortScores.sort(function(a,b) {
        return b.score - a.score;
    });

    // List the top 5 scores and their names
    for (var i=0; i < 10; i++){
        var li = document.createElement("li");
        li.textContent = sortScores[i].score+ " - "+sortScores[i].name;
        playerScores.appendChild(li);
    }
}

startButton.addEventListener("click",function(){
    setGameScreen();
    startGame();
    submitNameHS();
})

resetButton.addEventListener("click", function(event){
    event.preventDefault();

    // Set the local storage to the new highScoreArray
    localStorage.clear();

    // Reload the page, returning to the Title Screen will cause an unwanted loop
    location.reload();
})


function setGameScreen(){
    // Display the timer, score, questions and hide the title screen components
    titleScreen.style.display= "none";
    gameScreen.style.display= "block";
    scoreElement.style.display = "block";
    qNumberElement.textContent = "Question Number: "+questionNumber;
    //timerElement.textContent = "TIME: "+30;
    scoreElement.textContent = "SCORE: "+0+"/10";
    questions.style.display = "block"
    submitScreen.style.display = "none";
    startButton.style.display="none";
    resetButton.style.display="none";
    submitButton.style.display="none";
}

// start clock
function startGame(){
    // Set the time at 30, it will take a second to display the timer, then it needs to be 29 seconds
    //var timer = 29;

    getNewQuestions();

    // Listen for clicks and check the click against the correct answer
    button1.addEventListener("click",function(){
        if (a1 === answer){
        // If it is the correct answer, add a point to the score,
            addToScore();
            addToQuestionNumber()
            getNewQuestions();
        } else{
        // if it is incorrect, reduce the timer by 5 sec
        //    timer -=2;
            addToQuestionNumber()
            getNewQuestions();
        };
    })

    // Listen for clicks and check the click against the correct answer
    button2.addEventListener("click",function(){
        if (a2 === answer){
        // If it is the correct answer, add a point to the score,
            addToScore();
            addToQuestionNumber()
            getNewQuestions();
        } else{
        // if it is incorrect, reduce the timer by 5 sec
        //    timer -=2;
            addToQuestionNumber()
            getNewQuestions();
        };
    })

    // Listen for clicks and check the click against the correct answer
    button3.addEventListener("click",function(){
        if (a3 === answer){
            // If it is the correct answer, add a point to the score,
            addToScore();
            addToQuestionNumber()
            getNewQuestions();
        } else{
        // if it is incorrect, reduce the timer by 5 sec
        //    timer -=2;
            addToQuestionNumber()
            getNewQuestions();
        };
    })

    // Listen for clicks and check the click against the correct answer
    button4.addEventListener("click",function(){
        if (a4 === answer){
        // If it is the correct answer, add a point to the score,
            addToScore();
            addToQuestionNumber()
            getNewQuestions();
        } else{
        // if it is incorrect, reduce the timer by 5 sec
        //    timer -=2;
            getNewQuestions();
        };
    })
    /*var timerCount = setInterval(function(){
        if (timer>0){
            timerElement.textContent = "TIME: "+timer;
            timer--;
        } else {
            timerElement.textContent = "TIME: "+0;
            clearInterval(timerCount);
            // when the timer reaches 0 or less, stop the timer, and store the final score and ask for the name.
            goToSubmitScreen();
        }
    },1000)
    */
}

/*
function getQuestions(){
    // Get a random question from the array and display it's contents
    const i = Math.floor(Math.random() * qs.length);
    qtext = qs[i].question;
    a1 = qs[i].options[0];
    a2 = qs[i].options[1];
    a3 = qs[i].options[2];
    a4 = qs[i].options[3];
    answer = qs[i].answer;

    questionText.innerHTML=`${qtext}`;
    button1.innerHTML=`${a1}`;
    button2.innerHTML=`${a2}`;
    button3.innerHTML=`${a3}`;
    button4.innerHTML=`${a4}`;
}
*/

// If it is the correct answer, add a point to the score,
function addToScore(){
    score ++;
    scoreElement.textContent = "SCORE: "+score+"/10";
}

function addToQuestionNumber(){
    questionNumber ++;
    qNumberElement.textContent = "Question Number: "+questionNumber;
}

function goToSubmitScreen(){
    // Turn off the game screen elements and turn on the submission textbox and submission button
    titleScreen.style.display= "none";
    questions.style.display="none";
    submitScreen.style.display = "block";
    startButton.style.display="none";
    //timerElement.style.display="none";
    submitButton.style.display="block";
}

function submitNameHS(event){
    submitButton.addEventListener("click", function(event){
        event.preventDefault();
        // Get the name from the submission textbox and save it to playerName
        var playerName = document.querySelector("#nameSubmit").value;
        // Create a new object to be added to an array of objects
        var newRecord = {};
        // Save the name and score to the elements of the object
        newRecord.name = playerName;
        newRecord.score = score;

        // Attach the object to the array of objects, to be sorted later
        highScoreArray.push(newRecord);

        // Set the local storage to the new highScoreArray
        localStorage.setItem("highScoreArray",JSON.stringify(highScoreArray));

        // Reload the page, returning to the Title Screen will cause an unwanted loop
        location.reload();
    })
}

function getNewQuestions(){
    if (questionNumber > 10){
        qNumberElement.textContent = "Question Number: 10"
        goToSubmitScreen();
    }
    var variable1 = Math.floor(Math.random() * 9)
    var variable2 = Math.floor(Math.random() * 9)

    var answers = []

    answers.push(variable1 * variable2)
    answer = variable1 * variable2

    for (i = 0; answers.length < 4; i++){
        var incorrect = Math.floor(Math.random() * 100)
        if (answers.includes(incorrect)===false){
            answers.push(incorrect)
        }
    }
    shuffle(answers)
    a1 = answers.pop()
    a2 = answers.pop()
    a3 = answers.pop()
    a4 = answers.pop()

    questionText.innerHTML=`${variable1} x ${variable2} = `;
    button1.innerHTML=`${a1}`;
    button2.innerHTML=`${a2}`;
    button3.innerHTML=`${a3}`;
    button4.innerHTML=`${a4}`;
}

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
  }