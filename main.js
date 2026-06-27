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
    // Close mobile menu on link tap
    if (menuOpen) {
      menuOpen = false;
      const menuMobileClasses = [
        "flex", "flex-col", "absolute", "top-20", "left-0", "right-0",
        "bg-background", "border-b", "border-accent-cyan/20", "p-4", "gap-4", "z-50",
      ];
      menuMobileClasses.forEach((cls) => navMenu.classList.remove(cls));
      navMenu.classList.add("hidden");
      mobileMenuBtn.setAttribute("aria-expanded", "false");
      navMenu.setAttribute("aria-hidden", "true");
    }
  });
});

// Mobile menu toggle
const mobileMenuBtn = document.querySelector("nav button");
const navMenu = document.querySelector("nav .hidden.md\\:flex");
let menuOpen = false;
const menuMobileClasses = [
  "flex", "flex-col", "absolute", "top-20", "left-0", "right-0",
  "bg-background", "border-b", "border-accent-cyan/20", "p-4", "gap-4", "z-50",
];

if (mobileMenuBtn && navMenu) {
  mobileMenuBtn.addEventListener("click", () => {
    menuOpen = !menuOpen;
    if (menuOpen) {
      navMenu.classList.remove("hidden");
      menuMobileClasses.forEach((cls) => navMenu.classList.add(cls));
    } else {
      menuMobileClasses.forEach((cls) => navMenu.classList.remove(cls));
      navMenu.classList.add("hidden");
    }
    mobileMenuBtn.setAttribute("aria-expanded", String(menuOpen));
    navMenu.setAttribute("aria-hidden", String(!menuOpen));
  });
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768 && menuOpen) {
      menuOpen = false;
      menuMobileClasses.forEach((cls) => navMenu.classList.remove(cls));
      navMenu.classList.remove("hidden");
      navMenu.classList.add("md:flex");
      mobileMenuBtn.setAttribute("aria-expanded", "false");
      navMenu.setAttribute("aria-hidden", "true");
    } else if (window.innerWidth < 768 && !menuOpen) {
      navMenu.classList.remove("md:flex");
      navMenu.classList.add("hidden");
    }
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
  element.dataset.typed = "true";

  // Respect prefers-reduced-motion
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    if (text === "NACHOSAG") {
      element.innerHTML =
        'NACHO<span class="text-accent-cyan" style="text-shadow: rgba(0, 245, 255, 0.5) 0px 0px 10px, rgba(0, 245, 255, 0.3) 0px 0px 20px;">SAG</span>';
    } else {
      element.textContent = text;
    }
    return;
  }

  element.innerHTML = "";
  let i = 0;
  const speed = 100;

  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
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

let scrollTicking = false;
window.addEventListener("scroll", () => {
  if (!scrollTicking) {
    requestAnimationFrame(() => {
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
        link.removeAttribute("aria-current");
        const linkSection = link.getAttribute("href")?.replace("#", "");
        if (linkSection && sectionToNav[linkSection] === currentNav) {
          link.classList.add(
            "text-accent-cyan",
            "border-b",
            "border-accent-cyan",
            "pb-1",
          );
          link.classList.remove("text-on-surface-variant");
          link.setAttribute("aria-current", "section");
        }
      });

      scrollTicking = false;
    });
    scrollTicking = true;
  }
});

window.dispatchEvent(new Event("scroll"));

// Filter buttons event delegation
document.querySelector(".flex.flex-wrap.gap-4")?.addEventListener("click", (e) => {
  const btn = e.target.closest(".filter-btn");
  if (btn?.dataset.filter) {
    filterProjects(btn.dataset.filter);
  }
});

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
    btn.setAttribute("aria-pressed", "false");
  });

  const activeBtn = document.querySelector(`.filter-btn[data-filter="${cat}"]`);
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
    activeBtn.setAttribute("aria-pressed", "true");
  }

  document.querySelectorAll("#explorer-grid > div").forEach((card) => {
    const match = cat === "all" || (card.dataset.cat || "").includes(cat);
    card.style.display = match ? "" : "none";
    if (match) card.classList.add("active");
  });
}