document.getElementById('loveButton').addEventListener('click', function() {
    // Показать сообщение "I love you"
    const message = document.getElementById('message');
    message.innerHTML = "I love you!";
    message.style.display = 'block';

    // Добавить сердечки и поцелуи на экран
    for (let i = 0; i < 30; i++) {
        let heart = document.createElement('span');
        heart.classList.add('heart');
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * 100 + 'vw'; // Позиционирование по горизонтали
        heart.style.animationDuration = Math.random() * 2 + 3 + 's'; // Разная скорость анимации
        heart.style.fontSize = Math.random() * 20 + 25 + 'px'; // Разный размер

        document.body.appendChild(heart);
    }

    for (let i = 0; i < 20; i++) {
        let kiss = document.createElement('span');
        kiss.classList.add('kiss');
        kiss.innerHTML = '😘';
        kiss.style.left = Math.random() * 100 + 'vw'; // Позиционирование по горизонтали
        kiss.style.animationDuration = Math.random() * 2 + 3 + 's'; // Разная скорость анимации
        kiss.style.fontSize = Math.random() * 20 + 25 + 'px'; // Разный размер

        document.body.appendChild(kiss);
    }
});
