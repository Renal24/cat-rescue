const toggle = document.getElementById('theme-toggle');

toggle.addEventListener('change', () => {
    if (toggle.checked) {
        document.body.classList.add('light-mode');
    } else {
        document.body.classList.remove('light-mode');
    }
});
