const questions = document.querySelectorAll(".question-and-arrow");
const answers = document.querySelectorAll(".answer");

for (let i = 0; i < questions.length; i++) {
  questions[i].addEventListener("click", () => {
    // answer display
    if (answers[i].style.display == "block") {
      answers[i].style.display = "none";
    } else {
      answers[i].style.display = "block";
    }

    // Hiding other answers
    for (let k = 0; k < answers.length; k++) {
      if (k != i) {
        answers[k].style.display = "none";
      }
    }
  });
}
