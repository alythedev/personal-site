const searchInput = document.getElementById('search');
const suggestionsList = document.getElementById('suggestions');
const searchBtn = document.getElementById('search-btn');

// List of suggestions
const suggestions = ["about", "projects", "gallery", "blog"];

// Map search queries to HTML pages
const pages = {
  "about": "about.html",
  "projects": "projects.html",
  "gallery": "gallery.html",
  "blog": "blog.html",
  "secret": "/popup-pages/secret.html"
};

// Show filtered suggestions
function showSuggestions(input) {
  suggestionsList.innerHTML = '';
  const filtered = suggestions.filter(item => item.toLowerCase().startsWith(input.toLowerCase()));

  if (filtered.length === 0) {
    suggestionsList.style.display = 'none';
    return;
  }

  filtered.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    // Only fill input, don't redirect
    li.addEventListener('click', () => {
      searchInput.value = item;
      suggestionsList.innerHTML = '';
    });
    suggestionsList.appendChild(li);
  });

  suggestionsList.style.display = 'block';
}

// Show all suggestions when input is focused
searchInput.addEventListener('focus', () => {
  showSuggestions('');
});

// Filter suggestions as user types
searchInput.addEventListener('input', () => {
  showSuggestions(searchInput.value);
});

// Hide suggestions when clicking outside
document.addEventListener('click', (e) => {
  if (!e.target.closest('.search-box')) {
    suggestionsList.style.display = 'none';
  }
});

// Navigate to page when clicking Search button
searchBtn.addEventListener('click', () => {
  const query = searchInput.value;
  const page = pages[query.toLowerCase()] || "/popup-pages/notfound.html";
  window.location.href = page;
});

// Navigate to page when pressing Enter
searchInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    const query = searchInput.value;
    const page = pages[query.toLowerCase()] || "/popup-pages/notfound.html";
    window.location.href = page;
  }
});
