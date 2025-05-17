// DOM Elements
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');
const filterBtns = document.querySelectorAll('.filter-btn');
const startTestBtns = document.querySelectorAll('.start-test');
const modal = document.querySelector('#test-modal');
const closeModalBtn = document.querySelector('.close-modal');

// Mobile Menu Toggle
mobileMenuBtn.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

// Foydalanuvchi sozlamalari
const userSettings = JSON.parse(localStorage.getItem('userSettings')) || {
    emailNotifications: true,
    darkMode: false,
    uzbekLanguage: true,
    soundEffects: true,
    autoSave: true,
    fontSize: 'medium',
    theme: 'light'
};

// Tema qo'llash
function applyTheme() {
    // Eski temalarni olib tashlash
    document.body.classList.remove('dark-mode', 'blue-theme');
    
    // Yangi temani qo'llash
    if (userSettings.theme === 'dark') {
        document.body.classList.add('dark-mode');
    } else if (userSettings.theme === 'blue') {
        document.body.classList.add('blue-theme');
    }
}

// Shrift o'lchamini qo'llash
function applyFontSize() {
    const fontSize = userSettings.fontSize;
    document.body.style.fontSize = fontSize === 'small' ? '14px' : 
                                 fontSize === 'medium' ? '16px' : '18px';
}

// Sozlamalarni qo'llash
function applySettings() {
    applyTheme();
    applyFontSize();
}

// Sahifa yuklanganda sozlamalarni qo'llash
document.addEventListener('DOMContentLoaded', applySettings);

// Test Filter Functionality
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');
        
        // Filter tests based on category
        const category = btn.textContent.toLowerCase();
        const testCards = document.querySelectorAll('.test-card');
        
        testCards.forEach(card => {
            const testLevel = card.querySelector('.test-level').textContent.toLowerCase();
            if (category === 'barchasi' || testLevel === category) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Initialize all tests as visible
document.addEventListener('DOMContentLoaded', () => {
    const testCards = document.querySelectorAll('.test-card');
    testCards.forEach(card => {
        card.style.display = 'block';
    });
});

// Modal Functionality
function openModal(testTitle) {
    const modalTitle = modal.querySelector('h3');
    modalTitle.textContent = testTitle;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Start Test Button Click
startTestBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const testCard = btn.closest('.test-card');
        const testTitle = testCard.querySelector('h3').textContent;
        openModal(testTitle);
    });
});

// Close Modal Events
closeModalBtn.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Begin Test Button
const beginTestBtn = modal.querySelector('.btn-primary');
beginTestBtn.addEventListener('click', () => {
    const testTitle = modal.querySelector('h3').textContent;
    // Test sahifasiga o'tish
    window.location.href = `test.html?test=${encodeURIComponent(testTitle)}`;
});

// Smooth Scrolling for Navigation Links
if (window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/')) {
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

// Add animation to stats numbers
function animateValue(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        element.textContent = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Animate stats when they come into view
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumber = entry.target.querySelector('.stat-number');
            const value = parseInt(statNumber.textContent);
            animateValue(statNumber, 0, value, 2000);
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-card').forEach(card => {
    observer.observe(card);
});

// Statistika yangilash
function updateDashboardStats() {
    const testResults = JSON.parse(localStorage.getItem('testResults')) || [];
    const totalTests = document.querySelector('.stat-card:nth-child(1) .stat-number');
    const completedTests = document.querySelector('.stat-card:nth-child(2) .stat-number');
    const averageScore = document.querySelector('.stat-card:nth-child(3) .stat-number');
    
    if (totalTests) {
        totalTests.textContent = '12'; // Mavjud testlar soni
    }
    
    if (completedTests) {
        completedTests.textContent = testResults.length;
    }
    
    if (averageScore) {
        const avgScore = testResults.length > 0 
            ? Math.round(testResults.reduce((sum, result) => sum + result.score, 0) / testResults.length)
            : 0;
        averageScore.textContent = `${avgScore}%`;
    }
}

// Sahifa yuklanganda statistika yangilash
document.addEventListener('DOMContentLoaded', updateDashboardStats);


// yil almashtirish
const yearElement = document.querySelector('#year');
const currentYear = new Date().getFullYear();
yearElement.textContent = currentYear;