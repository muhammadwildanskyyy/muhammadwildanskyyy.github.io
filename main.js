document.addEventListener("DOMContentLoaded", function () {
  const cardButton = document.querySelector(".photography");
  const accordionPanel = document.querySelector("#panelsStayOpen-collapseOne");

  cardButton.addEventListener("click", function (event) {
    event.preventDefault();
    accordionPanel.classList.toggle("show");
    accordionPanel.scrollIntoView({ behavior: "smooth" });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const cardButton = document.querySelector(".videography");
  const accordionPanel = document.querySelector("#panelsStayOpen-collapseTwo");

  cardButton.addEventListener("click", function (event) {
    event.preventDefault();
    accordionPanel.classList.toggle("show");
    accordionPanel.scrollIntoView({ behavior: "smooth" });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const cardButton = document.querySelector(".editor");
  const accordionPanel = document.querySelector("#panelsStayOpen-collapseThree");

  cardButton.addEventListener("click", function (event) {
    event.preventDefault();
    accordionPanel.classList.toggle("show");
    accordionPanel.scrollIntoView({ behavior: "smooth" });
  });
});
