// Переключатель темы
class ThemeSwitcher {
    constructor() {
        this.theme = localStorage.getItem('theme') || 'light';
        this.init();
    }

    init() {
        this.applyTheme(this.theme);
        this.bindEvents();
    }

    applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);

        // Обновляем активную кнопку
        document.querySelectorAll('.theme-switcher__btn').forEach(btn => {
            btn.classList.remove('theme-switcher__btn--active');
        });

        const activeBtn = document.querySelector(`[data-theme="${theme}"]`);
        if (activeBtn) {
            activeBtn.classList.add('theme-switcher__btn--active');
        }
    }

    bindEvents() {
        document.addEventListener('click', (e) => {
            if (e.target.matches('.theme-switcher__btn')) {
                const theme = e.target.dataset.theme;
                this.applyTheme(theme);
            }
        });
    }
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    new ThemeSwitcher();
});