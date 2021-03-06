const closeBtn = document.querySelector("span.close-btn");
const alert = document.querySelectorAll(".alert");

alert.forEach((al) => {
  closeBtn.addEventListener("click", () => {
    this.style.display = "none";
  });
});
