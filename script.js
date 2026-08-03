const experienceButtons = document.querySelectorAll(".experience-toggle");

experienceButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const details = button.nextElementSibling;
    const isOpen = details.classList.toggle("is-open");

    button.setAttribute("aria-expanded", String(isOpen));
    button.textContent = isOpen
      ? "Close Experience"
      : "Discover Experience";
  });
});