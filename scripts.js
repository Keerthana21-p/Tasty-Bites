function filterRecipeCards() {
  const input = document.getElementById("searchRecipeInput");
  if (!input) return; // prevent error if input not found

  const query = input.value.toLowerCase();
  const cards = document.querySelectorAll(".recipe-card");

  cards.forEach(card => {
    const title = card.querySelector(".card-title").textContent.toLowerCase();
    const description = card.querySelector(".card-text")?.textContent.toLowerCase() || "";

    if (title.includes(query) || description.includes(query)) {
      card.parentElement.style.display = "block";
    } else {
      card.parentElement.style.display = "none";
    }
  });
}
