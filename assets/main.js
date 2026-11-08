(() => {
  const toggle = document.getElementById("language-toggle");
  const translatable = document.querySelectorAll("[data-en][data-zh]");
  let language = "en";

  function setLanguage(nextLanguage) {
    language = nextLanguage;
    document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
    translatable.forEach((element) => {
      element.textContent = element.dataset[language];
    });
    if (toggle) {
      toggle.textContent = language === "en" ? "中文" : "English";
      toggle.setAttribute("aria-label", language === "en" ? "Switch to Chinese" : "Switch to English");
    }
  }

  toggle?.addEventListener("click", () => setLanguage(language === "en" ? "zh" : "en"));
  document.getElementById("year").textContent = new Date().getFullYear();

  document.querySelectorAll("[data-placeholder-link]").forEach((link) => {
    link.addEventListener("click", (event) => event.preventDefault());
  });
})();
