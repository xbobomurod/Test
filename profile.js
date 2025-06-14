// DOM elementlari
const profileAvatar = document.getElementById("profile-avatar");
const profileName = document.getElementById("profile-name");
const profileEmail = document.getElementById("profile-email");
const totalTests = document.getElementById("total-tests");
const passedTests = document.getElementById("passed-tests");
const averageScore = document.getElementById("average-score");
const achievements = document.getElementById("achievements");
const achievementList = document.getElementById("achievement-list");
const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const navLinks = document.querySelector(".nav-links");
const profileForm = document.getElementById("profile-form");
const settingsForm = document.getElementById("settings-form");

// Mobile Menu Toggle
mobileMenuBtn.addEventListener("click", () => {
  navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex";
});

// Standart foydalanuvchi sozlamalari
const defaultSettings = {
  emailNotifications: true,
  soundEffects: true,
  autoSave: true,
  fontSize: "medium",
  theme: "light",
};

// Foydalanuvchi ma'lumotlarini yuklash
function loadData() {
  const localData = localStorage.getItem("userData");
  if (localData) {
    return JSON.parse(localData);
  }
  return {
    user: {
      name: "Foydalanuvchi",
      email: "user@example.com",
      settings: { ...defaultSettings },
    },
    testResults: [],
    statistics: {
      totalTests: 12,
      passedTests: 0,
      averageScore: 0,
    },
  };
}

// Foydalanuvchi ma'lumotlarini saqlash
function saveData(data) {
  try {
    localStorage.setItem("userData", JSON.stringify(data));
    return true;
  } catch (error) {
    console.error("Ma'lumotlarni saqlashda xatolik:", error);
    return false;
  }
}

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

// Tema qo'llash
function applyTheme(theme) {
  document.body.classList.remove("light-theme", "dark-theme", "blue-theme");
  if (theme === "dark") {
    document.body.classList.add("dark-theme");
  } else if (theme === "blue") {
    document.body.classList.add("blue-theme");
  } else {
    document.body.classList.add("light-theme");
  }
}

// Shrift o'lchamini qo'llash
function applyFontSize(fontSize) {
  document.body.style.fontSize =
    fontSize === "small" ? "14px" : fontSize === "medium" ? "16px" : "18px";
}

// Profil ma'lumotlarini yuklash
function loadProfile() {
  const data = loadData();
  const settings = loadSettings();

  // Avatar
  profileAvatar.textContent = data.user.name.charAt(0).toUpperCase();

  // Ism va email
  profileName.textContent = data.user.name;
  profileEmail.textContent = data.user.email;

  // Statistika
  totalTests.textContent = data.statistics.totalTests;
  passedTests.textContent = data.statistics.passedTests;
  averageScore.textContent = `${data.statistics.averageScore}%`;

  // Yutuqlar
  const userAchievements = calculateAchievements(data.testResults);
  achievements.textContent = userAchievements.length;
  displayAchievements(userAchievements);

  // Sozlamalarni yuklash
  loadSettingsForm(settings);

  // Form ma'lumotlarini to'ldirish
  if (profileForm) {
    profileForm.querySelector('[name="name"]').value = data.user.name;
    profileForm.querySelector('[name="email"]').value = data.user.email;
  }

  // Tema va shrift o'lchamini qo'llash
  applyTheme(settings.theme);
  applyFontSize(settings.fontSize);
}

// Yutuqlarni hisoblash
function calculateAchievements(testResults) {
  const achievements = [];

  if (testResults.length >= 1) {
    achievements.push({
      title: "Birinchi Test",
      description: "Birinchi testni yakunlash",
      icon: "🎯",
    });
  }

  if (testResults.length >= 5) {
    achievements.push({
      title: "Test Ustasi",
      description: "5 ta testni yakunlash",
      icon: "🏆",
    });
  }

  const highScores = testResults.filter((result) => result.score >= 90);
  if (highScores.length >= 1) {
    achievements.push({
      title: "Yuqori Ball",
      description: "90% dan yuqori ball olish",
      icon: "⭐",
    });
  }

  return achievements;
}

// Yutuqlarni ko'rsatish
function displayAchievements(achievements) {
  achievementList.innerHTML = "";

  if (achievements.length === 0) {
    achievementList.innerHTML = "<p>Hali yutuqlar yo'q</p>";
    return;
  }

  achievements.forEach((achievement) => {
    const achievementElement = document.createElement("div");
    achievementElement.className = "achievement";
    achievementElement.innerHTML = `
            <div class="achievement-icon">${achievement.icon}</div>
            <h3>${achievement.title}</h3>
            <p>${achievement.description}</p>
        `;
    achievementList.appendChild(achievementElement);
  });
}

// Sozlamalarni formaga yuklash
function loadSettingsForm(settings) {
  if (settingsForm) {
    settingsForm.querySelector('[name="email-notifications"]').checked =
      settings.emailNotifications;
    settingsForm.querySelector('[name="sound-effects"]').checked =
      settings.soundEffects;
    settingsForm.querySelector('[name="auto-save"]').checked =
      settings.autoSave;
    settingsForm.querySelector('[name="font-size"]').value = settings.fontSize;
    settingsForm.querySelector('[name="theme"]').value = settings.theme;
  }
}

// Sozlamalarni saqlash
function saveSettingsForm(event) {
  if (event) {
    event.preventDefault();
  }

  const settings = {
    emailNotifications: settingsForm.querySelector(
      '[name="email-notifications"]'
    ).checked,
    soundEffects: settingsForm.querySelector('[name="sound-effects"]').checked,
    autoSave: settingsForm.querySelector('[name="auto-save"]').checked,
    fontSize: settingsForm.querySelector('[name="font-size"]').value,
    theme: settingsForm.querySelector('[name="theme"]').value,
  };

  const success = saveSettings(settings);
  if (success) {
    applyTheme(settings.theme);
    applyFontSize(settings.fontSize);
    showNotification("Sozlamalar saqlandi!");
  } else {
    showNotification("Sozlamalarni saqlashda xatolik yuz berdi!", "error");
  }
}

// Profilni tahrirlash
function editProfile(event) {
  event.preventDefault();

  const data = loadData();

  const newName = profileForm.querySelector('[name="name"]').value.trim();
  const newEmail = profileForm.querySelector('[name="email"]').value.trim();

  if (!newName || !newEmail) {
    showNotification("Iltimos, barcha maydonlarni to'ldiring!", "error");
    return;
  }

  if (!isValidEmail(newEmail)) {
    showNotification("Iltimos, to'g'ri email manzilini kiriting!", "error");
    return;
  }

  data.user.name = newName;
  data.user.email = newEmail;

  const success = saveData(data);
  if (success) {
    loadProfile();
    showNotification("Profil ma'lumotlari yangilandi!");
  } else {
    showNotification(
      "Profil ma'lumotlarini saqlashda xatolik yuz berdi!",
      "error"
    );
  }
}

// Email tekshirish
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Bildirishnoma ko'rsatish
function showNotification(message, type = "success") {
  const notification = document.createElement("div");
  notification.className = `notification ${type}`;
  notification.textContent = message;
  notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 5px;
        color: white;
        background-color: ${type === "success" ? "#28a745" : "#dc3545"};
        z-index: 1000;
    `;

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.remove();
  }, 3000);
}

// Form submit hodisalarini qo'shish
if (profileForm) {
  profileForm.addEventListener("submit", editProfile);
}

if (settingsForm) {
  settingsForm.addEventListener("submit", saveSettingsForm);

  // Avtomatik saqlash uchun o'zgarishlarni kuzatish
  settingsForm.querySelectorAll("input, select").forEach((input) => {
    input.addEventListener("change", () => {
      const settings = loadSettings();
      if (settings.autoSave) {
        saveSettingsForm();
      }
    });
  });
}

// Profilni yuklash
loadProfile();
