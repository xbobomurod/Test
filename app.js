// DOM elementlari
const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const navLinks = document.querySelector(".nav-links");
const filterBtns = document.querySelectorAll(".filter-btn");
const startTestBtns = document.querySelectorAll(".start-test");
const modal = document.querySelector("#test-modal");
const closeModalBtn = document.querySelector(".close-modal");

// Standart foydalanuvchi sozlamalari
const defaultSettings = {
  emailNotifications: true,
  soundEffects: true,
  autoSave: true,
  fontSize: "medium",
  theme: "light",
};

// Foydalanuvchi sozlamalarini yuklash
function loadSettings() {
  const localSettings = localStorage.getItem("userSettings");
  return localSettings ? JSON.parse(localSettings) : { ...defaultSettings };
}

// Foydalanuvchi sozlamalarini saqlash
function saveSettings(settings) {
  try {
    localStorage.setItem("userSettings", JSON.stringify(settings));
    return true;
  } catch (error) {
    console.error("Sozlamalarni saqlashda xatolik:", error);
    return false;
  }
}

// Tema qo'llash funksiyasini yangilaymiz
function applyTheme(theme) {
  // Barcha sahifalarda ishlashi uchun document.body o'rniga document.documentElement ishlatamiz
  const root = document.documentElement;
  root.classList.remove("light-theme", "dark-theme", "blue-theme");
  
  // Agar theme parametri berilmagan bo'lsa, settings'dan olamiz
  const themeToApply = theme || loadSettings().theme;
  
  if (themeToApply === "dark") {
    root.classList.add("dark-theme");
  } else if (themeToApply === "blue") {
    root.classList.add("blue-theme");
  } else {
    root.classList.add("light-theme");
  }
}

// Shrift o'lchamini qo'llash
function applyFontSize(fontSize) {
  document.body.style.fontSize =
    fontSize === "small" ? "14px" : fontSize === "medium" ? "16px" : "20px";
}

// Sozlamalarni qo'llash
function applySettings() {
  const settings = loadSettings();
  applyTheme(settings.theme);
  applyFontSize(settings.fontSize);
}

// Mobile Menu Toggle
mobileMenuBtn.addEventListener("click", () => {
  navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex";
});

// Sahifa yuklanganda sozlamalarni qo'llash
document.addEventListener("DOMContentLoaded", applySettings);

// Test Filter funksiyasi
filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const category = btn.textContent.toLowerCase();
    const testCards = document.querySelectorAll(".test-card");

    testCards.forEach((card) => {
      const testLevel = card
        .querySelector(".test-level")
        .textContent.toLowerCase();
      if (category === "barchasi" || testLevel === category) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

// Barcha testlarni ko'rsatish
document.addEventListener("DOMContentLoaded", () => {
  const testCards = document.querySelectorAll(".test-card");
  testCards.forEach((card) => {
    card.style.display = "block";
  });
});

// Modal funksiyasi
function openModal(testTitle, testCard) {
  const modalTitle = modal.querySelector("h3");
  modalTitle.textContent = testTitle;

  const testDuration = testCard.querySelector(".test-duration").textContent;
  const testLevel = testCard.querySelector(".test-level").textContent;
  const testQuestions = testCard.querySelector(".test-questions").textContent;

  const modalDuration = modal.querySelector(".test-duration");
  const modalLevel = modal.querySelector(".test-level");
  const modalQuestions = modal.querySelector(".total-questions");

  modalDuration.textContent = testDuration;
  modalLevel.textContent = testLevel;
  modalQuestions.textContent = testQuestions;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.classList.remove("active");
  document.body.style.overflow = "auto";
}

// Testni boshlash tugmasi
startTestBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const testCard = btn.closest(".test-card");
    const testTitle = testCard.querySelector("h3").textContent;
    openModal(testTitle, testCard);
  });
});

// Modalni yopish
closeModalBtn.addEventListener("click", closeModal);
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

// Testni boshlash
const beginTestBtn = modal.querySelector(".btn-primary");
beginTestBtn.addEventListener("click", () => {
  const testTitle = modal.querySelector("h3").textContent;
  window.location.href = `test.html?test=${encodeURIComponent(testTitle)}`;
});

// Navigatsiya uchun silliq aylantirish
if (
  window.location.pathname.endsWith("index.html") ||
  window.location.pathname.endsWith("/")
) {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
}

// Statistikani animatsiya qilish
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

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const statNumber = entry.target.querySelector(".stat-number");
        const value = parseInt(statNumber.textContent);
        animateValue(statNumber, 0, value, 2000);
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);

document.querySelectorAll(".stat-card").forEach((card) => {
  observer.observe(card);
});

// Statistika yangilash
function updateDashboardStats() {
  const testResults = JSON.parse(localStorage.getItem("testResults")) || [];
  const totalTests = document.querySelector(
    ".stat-card:nth-child(1) .stat-number"
  );
  const completedTests = document.querySelector(
    ".stat-card:nth-child(2) .stat-number"
  );
  const averageScore = document.querySelector(
    ".stat-card:nth-child(3) .stat-number"
  );

  if (totalTests) {
    totalTests.textContent = "12";
  }

  if (completedTests) {
    completedTests.textContent = testResults.length;
  }

  if (averageScore) {
    const avgScore =
      testResults.length > 0
        ? Math.round(
            testResults.reduce((sum, result) => sum + result.score, 0) /
              testResults.length
          )
        : 0;
    averageScore.textContent = `${avgScore}%`;
  }
}

document.addEventListener("DOMContentLoaded", updateDashboardStats);

// Yilni yangilash
const yearElement = document.querySelector("#year");
const currentYear = new Date().getFullYear();
yearElement.textContent = currentYear;
