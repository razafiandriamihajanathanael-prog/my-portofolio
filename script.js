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

const revealElements = document.querySelectorAll(
  ".section-number, .about-heading, .about-photo, .about-description, " +
  ".journey-heading, .journey-item, .experience-heading, .experience-entry, " +
  ".skills-heading, .skill-card, .achievements-heading, .achievement-card, " +
  ".projects-heading, .project-card, .philosophy-content, .contact-content"
);

revealElements.forEach((element, index) => {
  element.classList.add("reveal");

  if (index % 3 === 1) {
    element.classList.add("reveal-delay-1");
  }

  if (index % 3 === 2) {
    element.classList.add("reveal-delay-2");
  }
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.14
  }
);

revealElements.forEach((element) => {
  observer.observe(element);
});