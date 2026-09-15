(function () {
  "use strict";

  var animationsEnabled = document.body.dataset.animations === "true";

  function initFadeIn() {
    if (!animationsEnabled) {
      return;
    }
    if (!("IntersectionObserver" in window)) {
      var els = document.querySelectorAll(".fade");
      for (var i = 0; i < els.length; i += 1) {
        els[i].classList.add("is-visible");
      }
      return;
    }
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    var targets = document.querySelectorAll(".fade");
    targets.forEach(function (el) {
      observer.observe(el);
    });
  }

  function initLeadForm() {
    var form = document.getElementById("lead-form");
    if (!form) {
      return;
    }
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var nameInput = document.getElementById("lead-name");
      var name = nameInput ? nameInput.value.trim() : "";
      var message = "Спасибо" + (name ? ", " + name : "") + "! Ваша заявка принята, мы свяжемся с вами в ближайшее время.";
      alert(message);
      form.reset();
      if (nameInput) {
        nameInput.focus();
      }
    });
  }

  function init() {
    initFadeIn();
    initLeadForm();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
