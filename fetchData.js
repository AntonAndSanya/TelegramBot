// Пример отправки POST запроса на /phone
fetch('http://localhost:3000/phone', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ phone_number: 'номер телефона' })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Ошибка:', error));

// Пример отправки POST запроса на /authCode
fetch('http://localhost:3000/authCode', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ value: 'код' })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Ошибка:', error));

// Пример отправки POST запроса на /password
fetch('http://localhost:3000/password', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ passwordInput: 'пароль' })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Ошибка:', error));
