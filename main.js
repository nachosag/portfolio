// Nav click: reveal target section immediately before smooth-scrolling
let navLinks = document.querySelectorAll("nav a");
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    const href = link.getAttribute("href");
    if (href && href.startsWith("#")) {
      const target = document.querySelector(href);
      if (target) {
        target.querySelectorAll(".reveal:not(.active)").forEach((el) => {
          el.classList.add("active");
        });
      }
    }
  });
});

// Mobile menu toggle
const mobileMenuBtn = document.querySelector("nav button");
const navMenu = document.querySelector("nav .hidden.md\\:flex");
if (mobileMenuBtn && navMenu) {
  mobileMenuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("hidden");
    navMenu.classList.toggle("flex");
    navMenu.classList.toggle("flex-col");
    navMenu.classList.toggle("absolute");
    navMenu.classList.toggle("top-20");
    navMenu.classList.toggle("left-0");
    navMenu.classList.toggle("right-0");
    navMenu.classList.toggle("bg-background");
    navMenu.classList.toggle("border-b");
    navMenu.classList.toggle("border-accent-cyan/20");
    navMenu.classList.toggle("p-4");
    navMenu.classList.toggle("gap-4");
    navMenu.classList.toggle("z-50");
  });
}

// IntersectionObserver: add .active when sections scroll into view
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        if (entry.target.querySelector(".typewriter")) {
          triggerTypewriter(entry.target.querySelector(".typewriter"));
        }
      }
    });
  },
  { threshold: 0.1 },
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

function triggerTypewriter(element) {
  if (element.dataset.typed === "true") return;
  const text = element.dataset.text || element.innerText;
  element.innerHTML = "";
  element.dataset.typed = "true";

  let i = 0;
  const speed = 100;

  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    } else {
      if (text === "NACHOSAG") {
        element.innerHTML =
          'NACHO<span class="text-accent-cyan" style="text-shadow: rgba(0, 245, 255, 0.5) 0px 0px 10px, rgba(0, 245, 255, 0.3) 0px 0px 20px;">SAG</span>';
      }
    }
  }
  type();
}

navLinks = document.querySelectorAll("nav a");
// Map section IDs to nav link IDs (multiple sections can map to same nav item)
const sectionToNav = {
  home: "home",
  about: "about",
  "featured-projects": "projects",
  projects: "projects",
  stack: "stack",
  workflow: "workflow",
  contact: "contact",
};

window.addEventListener("scroll", () => {
  let currentSection = "";
  const sections = document.querySelectorAll("section");
  const scrollPosition = window.scrollY + 150;

  const isAtBottom =
    window.innerHeight + window.scrollY >=
    document.documentElement.scrollHeight - 50;

  if (isAtBottom) {
    currentSection = "contact";
  } else {
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (scrollPosition >= sectionTop) {
        currentSection = section.getAttribute("id");
      }
    });
  }

  // Resolve section ID to nav link ID
  const currentNav = sectionToNav[currentSection] || currentSection;

  navLinks.forEach((link) => {
    link.classList.remove(
      "text-accent-cyan",
      "border-b",
      "border-accent-cyan",
      "pb-1",
    );
    link.classList.add("text-on-surface-variant");
    const linkSection = link.getAttribute("href")?.replace("#", "");
    if (linkSection && sectionToNav[linkSection] === currentNav) {
      link.classList.add(
        "text-accent-cyan",
        "border-b",
        "border-accent-cyan",
        "pb-1",
      );
      link.classList.remove("text-on-surface-variant");
    }
  });
});

window.dispatchEvent(new Event("scroll"));

function filterProjects(cat) {
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.classList.remove(
      "bg-accent-cyan",
      "bg-accent-magenta",
      "text-background",
      "font-bold",
    );
    btn.classList.add("border", "border-accent-cyan/20", "text-accent-cyan");
    btn.style.background = "";
  });

  const activeBtn = document.querySelector(`.filter-btn[onclick*="'${cat}'"]`);
  if (activeBtn) {
    activeBtn.classList.remove(
      "border",
      "border-accent-cyan/20",
      "text-accent-cyan",
      "hover:bg-accent-cyan/10",
    );
    activeBtn.classList.add(
      "bg-accent-magenta",
      "text-background",
      "font-bold",
      "hover:brightness-110",
    );
  }

  document.querySelectorAll("#explorer-grid > div").forEach((card) => {
    const match = cat === "all" || (card.dataset.cat || "").includes(cat);
    card.style.display = match ? "" : "none";
    if (match) card.classList.add("active");
  });
}