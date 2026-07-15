const filterButtons = Array.from(document.querySelectorAll(".filter-button"));
const searchInput = document.querySelector("#skill-search");
const cards = Array.from(document.querySelectorAll(".skill-card"));
const emptyState = document.querySelector("#empty-state");

let activeFilter = "all";

function normalize(value) {
  return value.trim().toLowerCase();
}

function updateLibrary() {
  const query = normalize(searchInput.value);
  let visibleCount = 0;

  cards.forEach((card) => {
    const categoryMatch = activeFilter === "all" || card.dataset.category === activeFilter;
    const searchText = normalize(`${card.innerText} ${card.dataset.search || ""}`);
    const searchMatch = !query || searchText.includes(query);
    const isVisible = categoryMatch && searchMatch;

    card.hidden = !isVisible;
    if (isVisible) visibleCount += 1;
  });

  emptyState.hidden = visibleCount !== 0;
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.toggle("active", item === button));
    updateLibrary();
  });
});

searchInput.addEventListener("input", updateLibrary);
