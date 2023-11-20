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

// const contactForm = document.getElementById("contact-form");
// contactForm.addEventListener("submit", function (e) {
//   e.preventDefault();
//   loader.style.display = "block";
//   const url = e.target.action;
//   const formData = new FormData(contactForm);

//   fetch(url, {
//     method: "POST",
//     body: formData,
//     mode: "no-cors",
//   })
//     .then(() => {
//       window.location.href = "/thanks.html";
//     })
//     .catch((e) => {
//       console.error("Error occurred:", e);
//       alert("Error occurred");
//     });
// });
