// ================================================
// MAIN APPLICATION - India Unveiled
// ================================================

document.addEventListener('DOMContentLoaded', () => {
    initApp();
});

function initApp() {
    // Elements
    const bookScene = document.getElementById('bookScene');
    const bookCover = document.getElementById('bookCover');
    const appContainer = document.getElementById('appContainer');
    const stateGrid = document.getElementById('stateGrid');
    const bookReader = document.getElementById('bookReader');
    const backBtn = document.getElementById('backBtn');
    const closeReaderBtn = document.getElementById('closeReaderBtn');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');
    const stateIndicator = document.getElementById('stateIndicator');

    let isBookOpening = false;

    // Event Listeners
    
    // Book cover click - EPIC opening animation!
    bookCover.addEventListener('click', () => {
        if (isBookOpening) return;
        isBookOpening = true;
        
        // Trigger opening animation
        bookCover.classList.add('opening');
        
        // Play sound/effect and then transition
        setTimeout(() => {
            bookScene.style.opacity = '0';
            bookScene.style.transform = 'scale(1.1)';
            bookScene.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            
            setTimeout(() => {
                bookScene.classList.add('hidden');
                appContainer.classList.remove('hidden');
                renderStateGrid();
                
                // Fade in app container
                appContainer.style.animation = 'fadeIn 0.8s ease-out';
            }, 400);
        }, 1500);
    });

    // Back to cover button
    backBtn.addEventListener('click', () => {
        appContainer.classList.add('hidden');
        bookCover.classList.remove('hidden');
        window.scrollTo(0, 0);
    });

    // Close reader button
    closeReaderBtn.addEventListener('click', () => {
        bookReader.classList.add('hidden');
        stateGrid.classList.remove('hidden');
        window.scrollTo(0, 0);
    });

    // Page navigation
    nextBtn.addEventListener('click', () => {
        window.bookReader.nextPage();
    });

    prevBtn.addEventListener('click', () => {
        window.bookReader.prevPage();
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!bookReader.classList.contains('hidden')) {
            if (e.key === 'ArrowRight') window.bookReader.nextPage();
            if (e.key === 'ArrowLeft') window.bookReader.prevPage();
        }
    });
}

function renderStateGrid() {
    const stateGrid = document.getElementById('stateGrid');
    const states = Object.keys(STATES_DATA).sort();
    
    stateGrid.innerHTML = '';
    
    states.forEach((state) => {
        const data = STATES_DATA[state];
        const card = document.createElement('div');
        card.className = 'state-card';
        card.innerHTML = `
            <div class="state-emoji">${data.emoji}</div>
            <div class="state-name">${state}</div>
            <div class="state-capital">${data.capital}</div>
        `;
        
        card.addEventListener('click', () => {
            openBook(state);
        });
        
        stateGrid.appendChild(card);
    });
}

function openBook(state) {
    const stateGrid = document.getElementById('stateGrid');
    const bookReader = document.getElementById('bookReader');
    
    stateGrid.classList.add('hidden');
    bookReader.classList.remove('hidden');
    
    window.bookReader.init(state);
    document.getElementById('stateIndicator').textContent = `📖 ${state}`;
    
    window.scrollTo(0, 0);
}

// Initialize global book reader
window.bookReader = new BookReader();

// Add smooth scroll behavior
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 10) {
        navbar.style.boxShadow = 'var(--shadow-deep)';
    } else {
        navbar.style.boxShadow = 'var(--shadow-medium)';
    }
});

// Print styles for printing pages
window.addEventListener('beforeprint', () => {
    document.querySelector('.navbar').style.display = 'none';
    document.querySelector('.reading-controls').style.display = 'none';
    document.querySelector('.close-reader-btn').style.display = 'none';
});

window.addEventListener('afterprint', () => {
    document.querySelector('.navbar').style.display = 'flex';
    document.querySelector('.reading-controls').style.display = 'flex';
    document.querySelector('.close-reader-btn').style.display = 'block';
});
