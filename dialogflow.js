const dialogflow = require('dialogflow');
const configs = require('./chat-bot.json');

console.log(configs);

const sessionClient = new dialogflow.SessionsClient({
  project_Id: configs.project_id,
  credentials: {
    private_key: configs.private_key,
    client_email: configs.client_email
  }
});

async function sendMessage (chatId, message) {
  let sessionPath = sessionClient.sessionPath(configs.project_id, chatId);
  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        text: message,
        languageCode: 'pt-BR',
      }
    }
  }

  const responses = await sessionClient.detectIntent(request);
  const result = responses[0].queryResult;
  console.log(JSON.stringify(result, null, 2));

}

sendMessage('123131', 'oi');