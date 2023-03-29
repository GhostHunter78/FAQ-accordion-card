const questions = document.querySelectorAll(".question-and-arrow");
const answers = document.querySelectorAll(".answer");

for (let i = 0; i < questions.length; i++) {
  questions[i].addEventListener("click", () => {
    //hiding other answers
    for (let k = 0; k < answers.length; k++) {
      answers[k].style.display = "none";
    }

    //show answer on click
    answers[i].style.display = "block";
  });
}
