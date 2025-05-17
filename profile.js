// DOM Elements
const profileAvatar = document.getElementById('profile-avatar');
const profileName = document.getElementById('profile-name');
const profileEmail = document.getElementById('profile-email');
const totalTests = document.getElementById('total-tests');
const passedTests = document.getElementById('passed-tests');
const averageScore = document.getElementById('average-score');
const achievements = document.getElementById('achievements');
const achievementList = document.getElementById('achievement-list');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');
const editProfileBtn = document.querySelector('.btn-secondary');
const profileForm = document.getElementById('profile-form');
const settingsForm = document.getElementById('settings-form');

// Mobile Menu Toggle
mobileMenuBtn.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

// Ma'lumotlarni yuklash
async function loadData() {
    try {
        // Avval localStorage dan tekshirish
        const localData = localStorage.getItem('userData');
        if (localData) {
            return JSON.parse(localData);
        }

        // Agar localStorage da yo'q bo'lsa, data.json dan yuklash
        const response = await fetch('data.json');
        const data = await response.json();
        
        // data.json dan yuklangan ma'lumotlarni localStorage ga saqlash
        localStorage.setItem('userData', JSON.stringify(data));
        
        return data;
    } catch (error) {
        console.error('Ma\'lumotlarni yuklashda xatolik:', error);
        return null;
    }
}

// Ma'lumotlarni saqlash
async function saveData(data) {
    try {
        // Ma'lumotlarni localStorage ga saqlash
        localStorage.setItem('userData', JSON.stringify(data));
        return true;
    } catch (error) {
        console.error('Ma\'lumotlarni saqlashda xatolik:', error);
        return false;
    }
}

// Profil ma'lumotlarini yuklash
async function loadProfile() {
    const data = await loadData();
    if (!data) return;

    const { user, testResults, statistics } = data;
    
    // Avatar
    profileAvatar.textContent = user.name.charAt(0).toUpperCase();
    
    // Ism va email
    profileName.textContent = user.name;
    profileEmail.textContent = user.email;
    
    // Statistika
    totalTests.textContent = statistics.totalTests;
    passedTests.textContent = statistics.passedTests;
    averageScore.textContent = `${statistics.averageScore}%`;
    
    // Yutuqlar
    const userAchievements = calculateAchievements(testResults);
    achievements.textContent = userAchievements.length;
    
    // Yutuqlar ro'yxatini ko'rsatish
    displayAchievements(userAchievements);
    
    // Sozlamalarni yuklash
    loadSettings(user.settings);
    
    // Form ma'lumotlarini to'ldirish
    if (profileForm) {
        profileForm.querySelector('[name="name"]').value = user.name;
        profileForm.querySelector('[name="email"]').value = user.email;
    }

    // Tema va shrift o'lchamini qo'llash
    applyTheme(user.settings.theme);
    applyFontSize(user.settings.fontSize);
}

// Yutuqlarni hisoblash
function calculateAchievements(testResults) {
    const achievements = [];
    
    // Test yutuqlari
    if (testResults.length >= 1) {
        achievements.push({
            title: 'Birinchi Test',
            description: 'Birinchi testni yakunlash',
            icon: '🎯'
        });
    }
    
    if (testResults.length >= 5) {
        achievements.push({
            title: 'Test Ustasi',
            description: '5 ta testni yakunlash',
            icon: '🏆'
        });
    }
    
    // Ball yutuqlari
    const highScores = testResults.filter(result => result.score >= 90);
    if (highScores.length >= 1) {
        achievements.push({
            title: 'Yuqori Ball',
            description: '90% dan yuqori ball olish',
            icon: '⭐'
        });
    }
    
    return achievements;
}

// Yutuqlarni ko'rsatish
function displayAchievements(achievements) {
    achievementList.innerHTML = '';
    
    if (achievements.length === 0) {
        achievementList.innerHTML = "<p>Hali yutuqlar yo'q</p>";
        return;
    }
    
    achievements.forEach(achievement => {
        const achievementElement = document.createElement('div');
        achievementElement.className = 'achievement';
        achievementElement.innerHTML = `
            <div class="achievement-icon">${achievement.icon}</div>
            <h3>${achievement.title}</h3>
            <p>${achievement.description}</p>
        `;
        achievementList.appendChild(achievementElement);
    });
}

// Sozlamalarni yuklash
function loadSettings(settings) {
    if (settingsForm) {
        settingsForm.querySelector('[name="email-notifications"]').checked = settings.emailNotifications;
        settingsForm.querySelector('[name="dark-mode"]').checked = settings.darkMode;
        settingsForm.querySelector('[name="uzbek-language"]').checked = settings.uzbekLanguage;
        settingsForm.querySelector('[name="sound-effects"]').checked = settings.soundEffects;
        settingsForm.querySelector('[name="auto-save"]').checked = settings.autoSave;
        settingsForm.querySelector('[name="font-size"]').value = settings.fontSize;
        settingsForm.querySelector('[name="theme"]').value = settings.theme;
    }
}

// Tema qo'llash
function applyTheme(theme) {
    document.body.classList.remove('dark-mode', 'blue-theme');
    if (theme === 'dark') {
        document.body.classList.add('dark-mode');
    } else if (theme === 'blue') {
        document.body.classList.add('blue-theme');
    }
}

// Shrift o'lchamini qo'llash
function applyFontSize(fontSize) {
    document.body.style.fontSize = fontSize === 'small' ? '14px' : 
                                 fontSize === 'medium' ? '16px' : '18px';
}

// Sozlamalarni saqlash
async function saveSettings(event) {
    if (event) {
        event.preventDefault();
    }
    
    const data = await loadData();
    if (!data) return;
    
    data.user.settings = {
        emailNotifications: settingsForm.querySelector('[name="email-notifications"]').checked,
        darkMode: settingsForm.querySelector('[name="dark-mode"]').checked,
        uzbekLanguage: settingsForm.querySelector('[name="uzbek-language"]').checked,
        soundEffects: settingsForm.querySelector('[name="sound-effects"]').checked,
        autoSave: settingsForm.querySelector('[name="auto-save"]').checked,
        fontSize: settingsForm.querySelector('[name="font-size"]').value,
        theme: settingsForm.querySelector('[name="theme"]').value
    };
    
    const success = await saveData(data);
    if (success) {
        // O'zgarishlarni qo'llash
        applyTheme(data.user.settings.theme);
        applyFontSize(data.user.settings.fontSize);
        showNotification('Sozlamalar saqlandi!');
    } else {
        showNotification('Sozlamalarni saqlashda xatolik yuz berdi!', 'error');
    }
}

// Profilni tahrirlash
async function editProfile(event) {
    if (event) {
        event.preventDefault();
    }
    
    const data = await loadData();
    if (!data) return;
    
    const newName = profileForm.querySelector('[name="name"]').value.trim();
    const newEmail = profileForm.querySelector('[name="email"]').value.trim();
    
    if (!newName || !newEmail) {
        showNotification('Iltimos, barcha maydonlarni to\'ldiring!', 'error');
        return;
    }
    
    if (!isValidEmail(newEmail)) {
        showNotification('Iltimos, to\'g\'ri email manzilini kiriting!', 'error');
        return;
    }
    
    data.user.name = newName;
    data.user.email = newEmail;
    
    const success = await saveData(data);
    if (success) {
        loadProfile();
        showNotification('Profil ma\'lumotlari yangilandi!');
    } else {
        showNotification('Profil ma\'lumotlarini saqlashda xatolik yuz berdi!', 'error');
    }
}

// Email tekshirish
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Bildirishnoma ko'rsatish
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Form submit hodisalarini qo'shish
if (profileForm) {
    profileForm.addEventListener('submit', editProfile);
}

if (settingsForm) {
    settingsForm.addEventListener('submit', saveSettings);
    
    // Sozlamalar o'zgarishini kuzatish
    settingsForm.querySelectorAll('input, select').forEach(input => {
        input.addEventListener('change', async () => {
            const data = await loadData();
            if (data && data.user.settings.autoSave) {
                saveSettings();
            }
        });
    });
}

// Profilni yuklash
loadProfile(); 