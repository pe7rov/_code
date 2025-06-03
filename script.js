const visionButton = document.getElementById('vision-mode-toggle');

visionButton.addEventListener('click', () => {
  document.body.classList.toggle('vision-mode');
  
  const isActive = document.body.classList.contains('vision-mode');
  
  // Обновляем атрибуты и текст кнопки
  visionButton.setAttribute('aria-pressed', isActive ? 'true' : 'false');
  
  if (isActive) {
    visionButton.setAttribute('aria-label', 'Выключить режим для слабовидящих');
    visionButton.textContent = 'Выключить режим для слабовидящих';
    
    // Можно дополнительно увеличить шрифт через inline стиль или оставить только класс
    // например, если хотите более точное управление:
    // document.body.style.fontSize = '1.5em';
    
} else {
    visionButton.setAttribute('aria-label', 'Включить режим для слабовидящих');
    visionButton.textContent = 'Включить режим для слабовидящих';
    
    // Восстановление стандартных настроек (если нужно)
    // document.body.style.fontSize = '';
}
});