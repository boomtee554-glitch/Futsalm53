document.addEventListener("DOMContentLoaded", () => {
  const searchBox = document.getElementById("searchBox");
  const rules = document.querySelectorAll(".rule");

  searchBox.addEventListener("input", () => {
    const query = searchBox.value.toLowerCase();
    rules.forEach(rule => {
      const text = rule.textContent.toLowerCase();
      rule.style.display = text.includes(query) ? "block" : "none";
    });
  });
});
