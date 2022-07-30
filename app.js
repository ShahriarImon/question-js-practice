const btns = document.querySelectorAll(".question .btn");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const question =
      e.target.parentElement.parentElement.parentElement.parentElement;
    question.classList.toggle("show-question");
  });
});
