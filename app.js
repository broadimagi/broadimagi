const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("#primary-navigation");

toggle?.addEventListener("click", () => {
  const isOpen = document.body.classList.toggle("menu-open");
  toggle.setAttribute("aria-expanded", String(isOpen));
  toggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
});

nav?.addEventListener("click", (event) => {
  if (!event.target.closest("a")) return;
  document.body.classList.remove("menu-open");
  toggle?.setAttribute("aria-expanded", "false");
  toggle?.setAttribute("aria-label", "Open navigation menu");
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    history.replaceState(null, "", link.getAttribute("href"));
  });
});

const sections = [...document.querySelectorAll("main section[id]")];
const navLinks = [...document.querySelectorAll(".nav-links a[href^='#']")];

function setActiveLink() {
  let current = sections[0]?.id;
  sections.forEach((section) => {
    if (section.getBoundingClientRect().top <= 120) current = section.id;
  });
  navLinks.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === "#" + current);
  });
}

setActiveLink();
window.addEventListener("scroll", setActiveLink, { passive: true });


const consultationForm = document.querySelector("#consultation-form");
consultationForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(consultationForm);
  const subject = "Consultation Request - " + data.get("service");
  const lines = [
    "Hello Broadimagi,",
    "",
    "I would like to schedule a consultation.",
    "",
    "Name: " + data.get("name"),
    "Email: " + data.get("email"),
    "Company: " + (data.get("company") || "Not specified"),
    "Service Interest: " + data.get("service"),
    "Preferred Date: " + data.get("date"),
    "Preferred Time: " + data.get("time"),
    "",
    "What I want to improve:",
    data.get("message"),
    "",
    "Thank you."
  ];
  window.location.href = "mailto:broadimagi@broadimagi.com?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(lines.join("\n"));
});
