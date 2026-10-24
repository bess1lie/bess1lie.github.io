(() => {
  "use strict";

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Шапка: тень при скролле ---------- */
  const header = document.querySelector(".site-header");
  const hero = document.querySelector(".hero");
  const mobileBar = document.querySelector(".mobile-bar");

  const updateChrome = () => {
    if (header) {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    }

    if (mobileBar && hero) {
      const showBar = window.scrollY > hero.offsetHeight - 140;
      mobileBar.classList.toggle("is-visible", showBar);
    }
  };

  updateChrome();
  window.addEventListener("scroll", updateChrome, { passive: true });
  window.addEventListener("resize", updateChrome, { passive: true });

  /* ---------- Мобильное меню ---------- */
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.getElementById("site-nav");

  const setMenu = (open) => {
    if (!menuToggle || !nav) return;
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute("aria-label", open ? "Закрыть меню" : "Открыть меню");
    nav.classList.toggle("is-open", open);
    document.body.classList.toggle("nav-open", open);
  };

  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
      setMenu(menuToggle.getAttribute("aria-expanded") !== "true");
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => setMenu(false));
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") setMenu(false);
    });

    const desktop = window.matchMedia("(min-width: 921px)");
    desktop.addEventListener("change", (event) => {
      if (event.matches) setMenu(false);
    });
  }

  /* ---------- Калькулятор ---------- */
  const calc = {
    body: document.getElementById("calc-body"),
    service: document.getElementById("calc-service"),
    parts: document.getElementById("calc-parts"),
    output: document.getElementById("calc-output"),
  };

  const money = new Intl.NumberFormat("ru-RU", {
    maximumFractionDigits: 0,
  });

  const round100 = (value) => Math.round(value / 100) * 100;

  const updateCalculator = () => {
    if (!calc.body || !calc.service || !calc.parts || !calc.output) return;

    const base = Number(calc.service.value);
    const body = Number(calc.body.value);
    const parts = Number(calc.parts.value);

    if ([base, body, parts].some((value) => Number.isNaN(value))) return;

    const middle = base * body * parts;
    const low = round100(middle * 0.9);
    const high = round100(middle * 1.15);

    calc.output.textContent = `${money.format(low)} – ${money.format(high)} ₸`;
  };

  [calc.body, calc.service, calc.parts].forEach((control) => {
    if (control) control.addEventListener("change", updateCalculator);
  });
  updateCalculator();

  /* ---------- FAQ: открыт только один ответ ---------- */
  const faqItems = Array.from(document.querySelectorAll(".faq-list details"));
  faqItems.forEach((item) => {
    item.addEventListener("toggle", () => {
      if (!item.open) return;
      faqItems.forEach((other) => {
        if (other !== item) other.open = false;
      });
    });
  });

  /* ---------- Заявка в WhatsApp ---------- */
  const form = document.getElementById("booking-form");
  const status = document.getElementById("form-status");
  const whatsappNumber = "77770000000";

  if (form && status) {
    form.addEventListener("input", () => {
      status.textContent = "";
      status.classList.remove("is-success");
    });

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      status.textContent = "";
      status.classList.remove("is-success");

      if (!form.checkValidity()) {
        form.reportValidity();
        status.textContent = "Проверьте поля: имя, телефон, автомобиль и согласие.";
        return;
      }

      const data = new FormData(form);
      const name = String(data.get("name") || "").trim();
      const phone = String(data.get("phone") || "").trim();
      const car = String(data.get("car") || "").trim();
      const service = String(data.get("service") || "").trim();
      const comment = String(data.get("comment") || "").trim();

      const message = [
        "Здравствуйте! Хочу записаться в ТОЛК.",
        "",
        `Имя: ${name}`,
        `Телефон: ${phone}`,
        `Автомобиль: ${car}`,
        `Услуга: ${service}`,
        `Комментарий: ${comment || "—"}`,
      ].join("\n");

      const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
      status.classList.add("is-success");
      status.innerHTML = `Открываем WhatsApp. Если не открылось — <a href="${url}" target="_blank" rel="noopener">нажмите здесь</a>.`;

      window.open(url, "_blank", "noopener");
    });
  }

  /* ---------- Мягкое появление блоков ---------- */
  if (!reducedMotion && "IntersectionObserver" in window) {
    const selectors = [
      ".section-head",
      ".pain",
      ".step",
      ".service-card",
      ".calc-copy",
      ".calc-panel",
      ".benefit",
      ".pullquote",
      ".ai-copy",
      ".chat-card",
      ".faq-list",
      ".contact-copy",
      ".booking",
    ].join(",");

    const items = Array.from(document.querySelectorAll(selectors));

    items.forEach((item, index) => {
      item.classList.add("reveal");
      item.style.setProperty("--reveal-delay", `${(index % 4) * 70}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        rootMargin: "0px 0px -8% 0px",
        threshold: 0.08,
      }
    );

    items.forEach((item) => observer.observe(item));
  }
})();
