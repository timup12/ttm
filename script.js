document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burger-menu");
  const nav = document.querySelector(".main-nav");
  const backdrop = document.querySelector(".nav-backdrop");

  const isOpen = () => nav?.classList.contains("active");

  const openMenu = () => {
    if (!burger || !nav) return;
    burger.classList.add("active");
    nav.classList.add("active");
    document.body.classList.add("menu-open");
    burger.setAttribute("aria-expanded", "true");
    if (backdrop) backdrop.hidden = false;
  };

  const closeMenu = () => {
    if (!burger || !nav) return;
    burger.classList.remove("active");
    nav.classList.remove("active");
    document.body.classList.remove("menu-open");
    burger.setAttribute("aria-expanded", "false");
    if (backdrop) backdrop.hidden = true;
  };

  const toggleMenu = () => (isOpen() ? closeMenu() : openMenu());

  if (burger && nav) {
    burger.addEventListener("click", (e) => {
      e.preventDefault();
      toggleMenu();
    });
  }

  // Close on outside click (mobile)
  document.addEventListener("click", (e) => {
    if (!isOpen()) return;
    const target = e.target;
    if (!(target instanceof Element)) return;

    // Click inside nav or on burger -> ignore
    if (nav.contains(target) || burger?.contains(target)) return;

    closeMenu();
  });

  // Close on backdrop click
  backdrop?.addEventListener("click", closeMenu);

  // Close on ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && isOpen()) closeMenu();
  });

  // Close when a nav link is clicked (useful on mobile)
  nav?.addEventListener("click", (e) => {
    const target = e.target;
    if (!(target instanceof Element)) return;
    if (target.closest("a")) closeMenu();
  });

  // --- Widget logic (safer script loading) ---
  const FC = document.getElementById("FC");
  const pog = document.getElementById("pog");
  const SCOREAXIS_SRC = "https://www.scoreaxis.com/widget/widget.js";

  const ensureScoreAxis = () => {
    const existing = document.querySelector(`script[src="${SCOREAXIS_SRC}"]`);
    if (existing) return;

    const s = document.createElement("script");
    s.src = SCOREAXIS_SRC;
    s.async = true;
    document.body.appendChild(s);
  };

  if (FC && pog) {
    FC.addEventListener("change", () => {
      // Example behavior kept from original project
      if (FC.value === "Rubin Kazan") {
        pog.innerHTML = `<div id="widget-cl3rmineuiwm" class="scoreaxis-widget" style="width: 40%;"></div>`;
        ensureScoreAxis();
      }
    });
  }
});
