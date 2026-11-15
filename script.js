// PERSONAL SETTINGS — add your real links before publishing.
// Leave a value as an empty string if you do not have that link yet.
const PROFILE = {
  email: "abdulbasit20081022@gmail.com",
  linkedin: "",
  github: "https://github.com/basitabdul-tech/basitabdul.github.io",
  cv: "assets/Abdul-Basit-CV-PLACEHOLDER.pdf"
};

const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuButton && navLinks) {
  menuButton.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Open navigation");
    });
  });
}

function enableLink(id, url) {
  const element = document.getElementById(id);
  if (!element || !url) return;
  element.href = url;
  element.hidden = false;
}

if (PROFILE.email) enableLink("email-link", `mailto:${PROFILE.email}`);
if (PROFILE.linkedin) enableLink("linkedin-link", PROFILE.linkedin);
if (PROFILE.github) enableLink("github-link", PROFILE.github);

const cvLink = document.querySelector('a[download]');
if (cvLink && PROFILE.cv) cvLink.href = PROFILE.cv;

const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();
