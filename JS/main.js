$(document).ready(function () {
  const quizAnswers = document.querySelectorAll(".ouranswers");
  //const finishButton=document.querySelector("#AnsSheet")
  const submitAnswer = document.querySelector("#submit_ans");
  //const finalAnswer

  let marks = 0;

  let total = 0;

  quizAnswers.forEach(function (jibu) {
    if (parseInt(jibu.value) > 0) {
      total += parseInt(jibu.value);
    } else {
      total = total;
    }

    jibu.addEventListener("change", function (event) {
      marks += parseInt(event.target.value);
    });
  });

  submitAnswer.addEventListener("click", function (event) {
    let score = (marks / total) * 100;
    let level = "";

    if (score > 80) {
      level += "Excellent";
    } else if (score >= 50 && score <= 80) {
      level += "Fair";
    } else {
      level += "Poor performance, Please retake test.";
    }
    alert("Your score is "  + score + "%" + level);

    //$("#ansSheet").text("Your score is " + score + "%" + level");
    //$("#results").removeClass("d-none");
    //$("#finalScore").text("Your score is " + score + "%" + level)
  });
});
