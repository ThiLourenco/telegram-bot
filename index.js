const TelegramBot = require('node-telegram-bot-api');
const token = '1477269082:AAEQKhligw_SHqwZLAecNXXRVB_yJ5E8Owk';

const bot = new TelegramBot(token, { polling: true});

bot.on('message', function(msg) {
  const chatId = msg.chat.id;
  console.log(msg.text);
  bot.sendMessage(chatId, 'Obrigado por sua mensagem');
});