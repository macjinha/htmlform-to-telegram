document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('contactForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        var name = document.getElementById('name').value;
        var phone = document.getElementById('phone').value;
        var email = document.getElementById('email').value;
        var telegram = document.getElementById('telegram').value;
        var message = document.getElementById('message').value;

        if (!name || !phone || !message) {
            alert('Пожалуйста, заполните все обязательные поля!');
            return;
        }

        var xhr = new XMLHttpRequest();
        xhr.open('POST', '/scripts/send.php', true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                alert('Ваше сообщение отправлено. Спасибо за обращение!');
                form.reset();
            }
        };

        var data = 'name=' + encodeURIComponent(name) +
                   '&phone=' + encodeURIComponent(phone) +
                   '&email=' + encodeURIComponent(email) +
                   '&telegram=' + encodeURIComponent(telegram) +
                   '&message=' + encodeURIComponent(message);

        xhr.send(data);
    });
});