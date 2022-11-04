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
$(document).ready(function() {
const quizAnswers = document.querySelectorAll(".ouranswers");
//const finishButton=document.querySelector(#AnsSheet)
const submitAnswer = document.querySelector("#submit_ans");
//const finalAnswer

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
    let level = "";


    if (score > 80){
        level += "Excellent";
    }

    else if(score >= 50 && score <= 80 ){
        level += "Fair";
    }

    else{
        level += "Poor performance, Please retake test.";

    }
    alert("Your score is " + score + "%" + level);
    
    //$("#ansSheet").text("Your score is " + score + "%" + level");
    //$("#results").removeClass("d-none");
    //$("#finalScore").text("Your score is " + score + "%" + level)
})});
