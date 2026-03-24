
const carsForSale = [
  {
    name: "S-Class",
    brand: "Mercedes-Benz",
    type: "Sedan de Luxo",
    price: "R$ 850.000",
    year: 2024,
    image: "/images/Mercedes-Benz S-Class.png",
    features: ["V8 Biturbo", "AMG Line", "Piloto Automático", "Interior em Couro"],
    isForSale: true
  },
  {
    name: "Huracan",
    brand: "Lamborghini",
    type: "Superesportivo",
    price: "R$ 2.200.000",
    year: 2023,
    image: "/images/Lamborghini Huracán.png",
    features: ["V10 Natural", "Tração Integral", "Carbon Fiber", "Sistema Esportivo"],
    isForSale: true
  },
  {
    name: "Range Rover",
    brand: "Land Rover",
    type: "SUV Premium",
    price: "R$ 750.000",
    year: 2024,
    image: "/images/Land Rover Range Rover.png",
    features: ["V8 Supercharged", "Air Suspension", "Terrain Response", "Luxo Máximo"],
    isForSale: true
  },
  {
    name: "911 Turbo S",
    brand: "Porsche",
    type: "Esportivo",
    price: "R$ 1.800.000",
    year: 2024,
    image: "/images/Porche911.png",
    features: ["H6 Biturbo", "PDK", "Sport Chrono", "Cerâmica"],
    isForSale: true
  },
  {
    name: "X7 M50i",
    brand: "BMW",
    type: "SUV Esportivo",
    price: "R$ 950.000",
    year: 2024,
    image: "/images/BMW X7 M50i.png",
    features: ["V8 TwinPower", "M Performance", "Driving Assistant", "Luxury Lounge"],
    isForSale: true
  },
  {
    name: "A8 L",
    brand: "Audi",
    type: "Sedan Executivo",
    price: "R$ 720.000",
    year: 2024,
    image: "/images/AudiA8_L.png",
    features: ["V6 TFSI", "Quattro", "Matrix LED", "Bang & Olufsen"],
    isForSale: true
  }
];

const carsForRent = [
  {
    name: "E-Class",
    brand: "Mercedes-Benz",
    type: "Sedan Executivo",
    price: "R$ 450",
    year: 2024,
    image: "/images/Mercedes-Benz E-Class Profissional.png",
    features: ["Motor Turbo", "Acabamento AMG", "GPS Premium", "Wi-Fi a Bordo"],
    isForSale: false,
    isForRent: true
  },
  {
    name: "F8 Tributo",
    brand: "Ferrari",
    type: "Superesportivo",
    price: "R$ 2.500",
    year: 2023,
    image: "/images/Carro_Luxo_1.jpg",
    features: ["V8 Biturbo", "Carbono", "Racing Mode", "Cerâmica"],
    isForSale: false,
    isForRent: true
  },
  {
    name: "Cayenne",
    brand: "Porsche",
    type: "SUV Esportivo",
    price: "R$ 800",
    year: 2024,
    image: "/images/Porsche Cayenne Vinho.png",
    features: ["V6 Turbo", "Sport Plus", "Panorâmico", "BOSE Audio"],
    isForSale: false,
    isForRent: true
  },
  {
    name: "DB11",
    brand: "Aston Martin",
    type: "Gran Turismo",
    price: "R$ 1.800",
    year: 2023,
    image: "/images/Carro_Luxo_2.jpg",
    features: ["V8 AMG", "Interior Artesanal", "Bang & Olufsen", "Carbon Fiber"],
    isForSale: false,
    isForRent: true
  },
  {
    name: "Escalade",
    brand: "Cadillac",
    type: "SUV Luxo",
    price: "R$ 650",
    year: 2024,
    image: "/images/Cadillac Escalade.png",
    features: ["V8 Premium", "Super Cruise", "36 Speakers", "Massage Seats"],
    isForSale: false,
    isForRent: true
  },
  {
    name: "Continental GT",
    brand: "Bentley",
    type: "Gran Turismo",
    price: "R$ 1.500",
    year: 2024,
    image: "/images/Bentley Continental GT.png",
    features: ["W12", "Tração Integral", "Naim Audio", "Handcrafted"],
    isForSale: false,
    isForRent: true
  }
];

// Função que cria o card do carro
function createCarCard(car) {
  return `
    <div class="car-card">
      <div class="car-image">
        <img src="${car.image}" alt="${car.brand} ${car.name}" loading="lazy">
        <div class="car-badges">
          <span class="badge badge-primary">${car.type}</span>
          ${car.isForSale ? '<span class="badge badge-sale">Venda</span>' : ''}
          ${car.isForRent ? '<span class="badge badge-rental">Aluguel</span>' : ''}
        </div>
      </div>
      <div class="car-content">
        <h3>${car.brand} ${car.name}</h3>
        <p>${car.year} • ${car.price}${car.isForRent ? '/dia' : ''}</p>
      </div>
    </div>
  `;
}

function loadSaleCars() {
  const carsGrid = document.getElementById('cars-grid');
  if (carsGrid) {
    carsGrid.innerHTML = carsForSale.map(createCarCard).join('');
  }
}

function loadRentalCars() {
  const carsGrid = document.getElementById('cars-grid');
  if (carsGrid) {
    carsGrid.innerHTML = carsForRent.map(createCarCard).join('');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  if (window.location.pathname.includes('venda')) loadSaleCars();
  if (window.location.pathname.includes('aluguel')) loadRentalCars();
});

// Function to create car card HTML
function createCarCard(car) {
  return `
    <div class="car-card">
      <div class="car-image">
        <img src="${car.image}" alt="${car.brand} ${car.name}" loading="lazy">
        <div class="car-badges">
          <span class="badge badge-primary">${car.type}</span>
          ${car.isForSale ? '<span class="badge badge-sale">Venda</span>' : ''}
          ${car.isForRent ? '<span class="badge badge-rental">Aluguel</span>' : ''}
        </div>
        <button class="favorite-btn" aria-label="Adicionar aos favoritos">
          <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </button>
      </div>
      
      <div class="car-content">
        <div class="car-header">
          <h3 class="car-title">${car.brand} ${car.name}</h3>
          <div class="car-rating">
            <svg class="rating-star" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
            </svg>
            <span class="rating-text">4.9</span>
          </div>
        </div>
        
        <p class="car-year">${car.year}</p>
        
        <div class="car-features">
          ${car.features.slice(0, 3).map(feature => 
            `<span class="feature-badge">${feature}</span>`
          ).join('')}
        </div>
        
        <div class="car-footer">
          <div class="car-price-section">
            <span class="car-price">${car.price}</span>
            ${car.isForRent ? '<span class="price-period">/dia</span>' : ''}
          </div>
          <div class="car-actions">
            <button class="btn btn-outline btn-sm">
              <svg class="btn-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                <circle cx="12" cy="12" r="3"/>
              </svg>
              Ver Mais
            </button>
            <button class="btn btn-primary btn-sm">
              Contato
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Function to load sale cars
function loadSaleCars() {
  const carsGrid = document.getElementById('cars-grid');
  if (carsGrid) {
    carsGrid.innerHTML = carsForSale.map(car => createCarCard(car)).join('');
  }
}

// Function to load rental cars
function loadRentalCars() {
  const carsGrid = document.getElementById('cars-grid');
  if (carsGrid) {
    carsGrid.innerHTML = carsForRent.map(car => createCarCard(car)).join('');
  }
}

// Navigation highlighting
function updateNavigation() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

// Smooth scrolling for internal links
function initSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// Button click handlers
function initButtonHandlers() {
  // Contact buttons
  document.addEventListener('click', function(e) {
    if (e.target.closest('.contact-btn, .btn')) {
      const button = e.target.closest('.contact-btn, .btn');
      const buttonText = button.textContent.trim();
      
      if (buttonText.includes('WhatsApp')) {
        window.open('https://wa.me/5511999999999', '_blank');
      } else if (buttonText.includes('Contato') || buttonText.includes('E-mail')) {
        window.location.href = 'mailto:contato@luxurycars.com';
      } else if (buttonText.includes('Telefone')) {
        window.location.href = 'tel:+5511999999999';
      }
    }
    
    // Favorite buttons
    if (e.target.closest('.favorite-btn')) {
      e.preventDefault();
      const btn = e.target.closest('.favorite-btn');
      btn.style.color = btn.style.color === 'var(--primary)' ? 'white' : 'var(--primary)';
    }
  });
}

// Initialize scroll animations
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe car cards and other elements
  document.querySelectorAll('.car-card, .contact-card, .section-header').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
}

// Mobile menu toggle (if needed)
function initMobileMenu() {
  // This can be expanded if a mobile menu is added
  const navLinks = document.querySelector('.nav-links');
  
  if (window.innerWidth <= 768) {
    // Mobile navigation logic can be added here
  }
}

// Image lazy loading with error handling
function initImageLazyLoading() {
  document.querySelectorAll('img[loading="lazy"]').forEach(img => {
    img.addEventListener('error', function() {
      this.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzMzMzMzMyIvPgogIDx0ZXh0IHg9IjE1MCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM5OTk5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkltYWdlbSBJbmRpc3BvbsOtdmVsPC90ZXh0Pgo8L3N2Zz4K';
      this.alt = 'Imagem indisponível';
    });
  });
}

// Performance optimization
function initPerformanceOptimizations() {
  // Debounce resize events
  let resizeTimeout;
  window.addEventListener('resize', function() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      updateNavigation();
      initScrollAnimations();
    }, 250);
  });

  // Prefetch important pages
  const importantPages = ['venda.html', 'aluguel.html', 'contato.html'];
  importantPages.forEach(page => {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = page;
    document.head.appendChild(link);
  });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  updateNavigation();
  initSmoothScrolling();
  initButtonHandlers();
  initScrollAnimations();
  initMobileMenu();
  initImageLazyLoading();
  initPerformanceOptimizations();
  
  // Add a small delay to ensure smooth animations
  setTimeout(() => {
    document.body.classList.add('loaded');
  }, 100);
});

// Handle page visibility for performance
document.addEventListener('visibilitychange', function() {
  if (document.hidden) {
    // Pause animations or reduce activity when page is hidden
  } else {
    // Resume animations when page becomes visible
    initScrollAnimations();
  }
});

// Export functions for use in individual pages
window.loadSaleCars = loadSaleCars;
window.loadRentalCars = loadRentalCars;