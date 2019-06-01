/**
 * Функция валидации пароля
 * @param {string} password - Пароль, который необходимо проверить
 * @return {string} - Возвращает результат проверки пароля
 *
 * @example
 *   var pass = 'CheckMePpls123'
 *   checkPass(pass);
 */

function checkPass(password) {
  if (password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z0-9]{8}/)) {
    return "YES";
  } else {
    return "NO";
  }
}

console.log(checkPass("sSssssss11"));