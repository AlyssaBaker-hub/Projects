function toggleSearch(button) {
    // Create or get the search container
    let searchContainer = document.getElementById('searchContainer');
    if (!searchContainer) {
        searchContainer = createSearchInterface();
    }

    // Toggle the search interface
    if (searchContainer.style.display === 'none' || !searchContainer.style.display) {
        searchContainer.style.display = 'block';
        searchContainer.style.animation = 'fadeIn 0.3s';
    } else {
        searchContainer.style.display = 'none';
    }
}

function createSearchInterface() {
    const container = document.createElement('div');
    container.id = 'searchContainer';
    container.innerHTML = `
        <div class="search-box">
            <input type="text" id="searchInput" placeholder="Search...">
            <div id="searchResults"></div>
        </div>
    `;
    document.body.appendChild(container);

    // Add the event listener for search
    let timeout;
    container.querySelector('#searchInput').addEventListener('input', () => {
        clearTimeout(timeout);
        timeout = setTimeout(handleSearch, 300);
    });

    return container;
}

function handleSearch() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const searchableElements = document.querySelectorAll('.searchable');
    let matchCount = 0;
    
    document.getElementById('searchResults').textContent = 'Searching...';

    searchableElements.forEach(element => {
        const text = element.textContent.toLowerCase();
        const username = element.getAttribute('data-username')?.toLowerCase() || '';
        const tags = element.getAttribute('data-tags')?.toLowerCase() || '';

        if (text.includes(searchTerm) || 
            username.includes(searchTerm) || 
            tags.includes(searchTerm)) {
            element.style.display = 'block';
            element.style.animation = 'fadeIn 0.3s';
            matchCount++;
        } else {
            element.style.display = 'none';
        }
    });

    const resultsText = matchCount === 0 
        ? 'No matches found' 
        : `Found ${matchCount} match${matchCount === 1 ? '' : 'es'}`;
    document.getElementById('searchResults').textContent = resultsText;
}
