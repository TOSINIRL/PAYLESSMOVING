const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#primary-nav");
const year = document.querySelector("#year");

if (year) {
  year.textContent = String(new Date().getFullYear());
}

if (menuToggle && navigation) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    navigation.classList.toggle("is-open", !isOpen);
  });

  navigation.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      menuToggle.setAttribute("aria-expanded", "false");
      navigation.classList.remove("is-open");
    }
  });
}

const quoteForm = document.querySelector('form[name="quote-request"]');
const formStatus = document.querySelector(".form-status");

if (quoteForm && formStatus) {
  quoteForm.addEventListener("submit", (event) => {
    if (!quoteForm.checkValidity()) {
      event.preventDefault();
      quoteForm.reportValidity();
      return;
    }

    formStatus.textContent = "Thanks! Your request is being sent.";
  });
}
