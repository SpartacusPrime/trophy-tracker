document.addEventListener("DOMContentLoaded", () => {
  const progressElements = document.querySelectorAll(".progress");

  progressElements.forEach((el) => {
    const value = parseInt(el.textContent);
    const fill = el.nextElementSibling.querySelector(".fill");
    fill.style.width = `${value}%`;
  });
});