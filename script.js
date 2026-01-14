const toggle = document.getElementById('theme-toggle');

// 1. Слушаем клик мышкой (как было раньше)
toggle.addEventListener('change', () => {
    updateTheme();
});

// 2. Слушаем нажатие клавиш на клавиатуре
document.addEventListener('keydown', (event) => {
    // Проверяем, что нажата клавиша "Пробел" (код "Space")
    if (event.code === 'Space') {
        // Отменяем стандартное поведение (чтобы страница не скроллилась вниз)
        event.preventDefault(); 
        
        // Меняем состояние чекбокса на противоположное
        toggle.checked = !toggle.checked;
        
        // Вызываем функцию смены темы
        updateTheme();
    }
});

// Функция для переключения фона
function updateTheme() {
    if (toggle.checked) {
        document.body.classList.add('light-mode');
    } else {
        document.body.classList.remove('light-mode');
    }
}
