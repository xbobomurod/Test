// DOM Elements
const resultsList = document.getElementById("results-list");
const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const navLinks = document.querySelector(".nav-links");
const filterBtns = document.querySelectorAll(".filter-btn");
const resultsContainer = document.getElementById("results-container");
const statisticsContainer = document.getElementById("statistics-container");
const achievementsContainer = document.getElementById("achievements-container");

// Mobile Menu Toggle
mobileMenuBtn.addEventListener("click", () => {
  navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex";
});

// Foydalanuvchi sozlamalari
const userSettings = JSON.parse(localStorage.getItem("userSettings")) || {
  emailNotifications: true,
  darkMode: false,
  uzbekLanguage: true,
  soundEffects: true,
  autoSave: true,
  fontSize: "medium",
  theme: "light",
};

// Tema qo'llash
function applyTheme(theme) {
  // Avval barcha mavjud temalarni olib tashlaymiz
  document.body.classList.remove("light-theme", "dark-theme", "blue-theme");

  // Agar theme parametri berilmagan bo'lsa, userSettings'dan olamiz
  const themeToApply = theme || userSettings.theme;

  if (themeToApply === "dark") {
    document.body.classList.add("dark-theme");
  } else if (themeToApply === "blue") {
    document.body.classList.add("blue-theme");
  } else {
    document.body.classList.add("light-theme");
  }
}

// Shrift o'lchamini qo'llash
function applyFontSize() {
  const fontSize = userSettings.fontSize;
  document.body.style.fontSize =
    fontSize === "small" ? "14px" : fontSize === "medium" ? "16px" : "18px";
}

// Sozlamalarni qo'llash
function applySettings() {
  // LocalStorage'dan sozlamalarni yangilab olamiz
  const updatedSettings =
    JSON.parse(localStorage.getItem("userSettings")) || userSettings;
  Object.assign(userSettings, updatedSettings);

  applyTheme(userSettings.theme);
  applyFontSize();
}

// Test natijalarini yuklash
function loadResults() {
  // localStorage'dan natijalarni olish
  const results = JSON.parse(localStorage.getItem("testResults")) || [];

  // Natijalarni ko'rsatish
  displayResults(results);

  // Statistika ko'rsatish
  const statistics = calculateStatistics(results);
  displayStatistics(statistics);

  // Yutuqlarni ko'rsatish
  displayAchievements(results);
}

// Test natijalarini ko'rsatish
function displayResults(results) {
  if (!results.length) {
    resultsContainer.innerHTML = "<p>Hali test natijalari mavjud emas</p>";
    return;
  }

  const resultsHTML = results
    .map(
      (result) => `
        <div class="result-card">
            <h3>${result.testName}</h3>
            <p>Sana: ${new Date(result.date).toLocaleDateString()}</p>
            <p>To'g'ri javoblar: ${result.correctAnswers}/${
        result.totalQuestions
      }</p>
           
            <p>Ball: ${result.score}%</p>
            <p>Sarflangan vaqt: ${Math.floor(result.timeSpent / 60)}:${(
        result.timeSpent % 60
      )
        .toString()
        .padStart(2, "0")}</p>
        </div>
    `
    )
    .join("");

  resultsContainer.innerHTML = resultsHTML;
}

// Statistika hisoblash
function calculateStatistics(results) {
  if (!results.length) {
    return {
      totalTests: 0,
      passedTests: 0,
      averageScore: 0,
      totalCorrectAnswers: 0,
      totalWrongAnswers: 0,
    };
  }

  return {
    totalTests: results.length,
    passedTests: results.filter((r) => r.score >= 60).length,
    averageScore: Math.round(
      results.reduce((sum, r) => sum + r.score, 0) / results.length
    ),
    totalCorrectAnswers: results.reduce((sum, r) => sum + r.correctAnswers, 0),
    totalWrongAnswers: results.reduce((sum, r) => sum + r.wrongAnswers, 0),
  };
}

// Statistika ko'rsatish
function displayStatistics(statistics) {
  const statisticsHTML = `
        <div class="statistics-card">
            <h3>Umumiy statistika</h3>
            <p>Jami testlar: ${statistics.totalTests}</p>
            <p>O'tilgan testlar: ${statistics.passedTests}</p>
            <p>O'rtacha ball: ${statistics.averageScore}%</p>
            <p>Jami to'g'ri javoblar: ${statistics.totalCorrectAnswers}</p>
          
        </div>
    `;

  statisticsContainer.innerHTML = statisticsHTML;
}

// Yutuqlarni ko'rsatish
function displayAchievements(results) {
  const achievements = calculateAchievements(results);

  const achievementsHTML = achievements
    .map(
      (achievement) => `
        <div class="achievement-card ${
          achievement.unlocked ? "unlocked" : "locked"
        }">
            <h3>${achievement.title}</h3>
            <p>${achievement.description}</p>
            ${
              achievement.unlocked
                ? `<p class="unlock-date">Ochilgan sana: ${new Date(
                    achievement.unlockDate
                  ).toLocaleDateString()}</p>`
                : ""
            }
        </div>
    `
    )
    .join("");

  achievementsContainer.innerHTML = achievementsHTML;
}

// Yutuqlarni hisoblash
function calculateAchievements(results) {
  const achievements = [
    {
      title: "Birinchi test",
      description: "Birinchi testni yakunlang",
      unlocked: results.length > 0,
      unlockDate: results.length > 0 ? results[0].date : null,
    },
    {
      title: "Test ustasi",
      description: "10 ta testni yakunlang",
      unlocked: results.length >= 10,
      unlockDate: results.length >= 10 ? results[9].date : null,
    },
    {
      title: "Mukammal natija",
      description: "100% ball bilan testni yakunlang",
      unlocked: results.some((r) => r.score === 100),
      unlockDate: results.find((r) => r.score === 100)?.date || null,
    },
  ];

  return achievements;
}

// Test filtrlari
filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Faol tugmani yangilash
    filterBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const category = btn.textContent.toLowerCase();
    const resultCards = document.querySelectorAll(".result-card");

    resultCards.forEach((card) => {
      const testName = card.querySelector("h3").textContent.toLowerCase();

      if (category === "barchasi") {
        card.style.display = "block";
      } else if (category === "dasturlash") {
        card.style.display =
          testName.includes("javascript") ||
          testName.includes("python") ||
          testName.includes("dasturlash") ||
          testName.includes("html") ||
          testName.includes("css") ||
          testName.includes("algoritm")
            ? "block"
            : "none";
      } else if (category === "matematika") {
        card.style.display =
          testName.includes("algebra") ||
          testName.includes("geometriya") ||
          testName.includes("matematika") ||
          testName.includes("kombinatorika")
            ? "block"
            : "none";
      } else if (category === "logika") {
        card.style.display =
          testName.includes("mantiq") ||
          testName.includes("logika") ||
          testName.includes("iq") ||
          testName.includes("kognitiv") ||
          testName.includes("kibernetika")
            ? "block"
            : "none";
      }
    });
  });
});

// Sahifa yuklanganda
document.addEventListener("DOMContentLoaded", () => {
  // Avval sozlamalarni qo'llaymiz
  applySettings();

  // Keyin natijalarni yuklaymiz
  loadResults();

  // Mobile menu uchun event listener qo'shamiz
  mobileMenuBtn.addEventListener("click", () => {
    navLinks.style.display =
      navLinks.style.display === "flex" ? "none" : "flex";
  });
});
