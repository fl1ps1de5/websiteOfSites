function displayWebsites(category) {
    const container = document.getElementById('sites'); // Ensure you have a container with this ID in your HTML
    container.innerHTML = ''; // Clear existing content
  
    const filteredWebsites = websites.filter(website =>
        category === 'all' ? true : Array.isArray(website.category) ? website.category.includes(category) : website.category === category
    );
    
    filteredWebsites.sort((a, b) => a.name.localeCompare(b.name));
  
    filteredWebsites.forEach(website => {
        const item = document.createElement('div');
        item.classList.add('website-item');
    
        item.innerHTML = `
            <h2 class="website-name"><a href="${website.url}" target="_blank" class="website-link">${website.name}</a></h2>
            <p class="website-brief">${website.brief}</p>
        `;
        container.appendChild(item);
    });
    
  }


  
  