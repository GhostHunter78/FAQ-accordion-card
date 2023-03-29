const questions = document.querySelectorAll(".question-and-arrow");
const answers = document.querySelectorAll(".answer");

for (let i = 0; i < questions.length; i++) {
  questions[i].addEventListener("click", () => {
    for (let k = 0; k < answers.length; k++) {
      answers[k].style.display = "none";
    }

    answers[i].style.display = "block";
  });
}
