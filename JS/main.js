// //const quizAnswers=document.querySelectorAll('.ouranswers');
// //console.log(quizAnswers);
// //const quizAnswers = document.querySelectorAll(".ouranswers");
// let marks = "0"
// quizAnswers.forEach(function(jibu){
//    jibu.addEventListener("change",function(event){
//     alert("Selected");
//    });
// });
// const quizAnswers = document.querySelectorAll(".ouranswers");
// const submitAns=document.querySelector("#submitAns")
// let marks =0;
// let total=0;
// quizAnswers.forEach(function(jibu){
//     if(parseInt(jibu.value) > 0) {total += parseInt(jibu.value);}

//     else{marks = total;}
//    jibu.addEventListener("change",function(event){
//    marks += parseInt(event.target.value);
//    });;
//     submitAns.addEventListener("click",function(event){
//     alert("Your score is"+ marks)};

const quizAnswers = document.querySelectorAll(".ouranswers");

const submitAnswer = document.querySelector("#submit_ans");

let marks = 0;

let total = 0;

quizAnswers.forEach(function (jibu) {

    if(parseInt(jibu.value) > 0) {

        total += parseInt(jibu.value);

    }

    else{

        total = total;

    }

    jibu.addEventListener("change", function (event) {

        marks += parseInt(event.target.value);

    });

});

submitAnswer.addEventListener("click", function (event) {

    let score = (marks/total)*100;

    alert("your score is " + score + "%");

});
