function проверитьСлово2() {
    // Получаем значение из поля ввода
    var введенное_слово = document.getElementById('введенноеСлово2').value.toLowerCase().trim();
    // Здесь вам нужно добавить ваш код для проверки введенного слова.
    // Например, вы можете сравнивать его с правильным ответом или использовать другие методы проверки.

    // Пусть правильным ответом будет слово "ответ"

     var правильный_ответ = "арбуз";

    if (введенное_слово2 === правильный_ответ) {
        // Если введенное слово совпадает с правильным ответом, переходим на другую страницу
        
        window.location.href = "pageUrovni.html"; // Замените "index1.html" на вашу целевую страницу
    } else {
        // Если слово неправильное, вы можете вывести сообщение или предпринять другие действия
        alert("Неверный ответ! Попробуйте еще раз.");
    }

}
