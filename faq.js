document.querySelectorAll(".faq-card").forEach((card) =>
  card.addEventListener("click", function () {
    this.querySelector(".answer").classList.toggle("show");
    if (this.querySelector(".card-sign").innerHTML === "-") {
      this.querySelector(".card-sign").innerHTML = "+";
    } else {
      this.querySelector(".card-sign").innerHTML = "-";
    }

    console.log("clicked");
  })
);

document.querySelector(".butt").addEventListener("click", function () {
  window.location.href = "https://www.instagram.com/";
});
