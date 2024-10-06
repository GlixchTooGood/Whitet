const themeSelect = document.getElementById('themeSelect');
const applyThemeButton = document.getElementById('applyTheme');

// Retrieve the saved theme from local storage
const savedTheme = localStorage.getItem('theme');

// Set the initial theme based on the saved value or default to the root theme
if (savedTheme) {
    setTheme(savedTheme);
} else {
    // Remove all theme classes and set the default root theme
    document.documentElement.classList.remove('spooky', 'winter', 'white__gold');
}

themeSelect.addEventListener('change', () => {
    const selectedTheme = themeSelect.value;
    setTheme(selectedTheme);
    localStorage.setItem('theme', selectedTheme);
});

applyThemeButton.addEventListener('click', () => {
    const selectedTheme = themeSelect.value;
    setTheme(selectedTheme);
    localStorage.setItem('theme', selectedTheme);
});

function setTheme(theme) {
    document.documentElement.classList.remove('spooky', 'winter', 'white__gold'); // Remove all existing themes
    document.documentElement.classList.add(theme); // Add the selected theme class
}