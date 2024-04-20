const dialogflow = require('dialogflow');
const projectId = 'your-project-id';
const credentials = require('./path/to/your-service-account-key.json');

const sessionClient = new dialogflow.SessionsClient({ credentials });

const detectIntent = async (inputText) => {
  const sessionPath = sessionClient.projectAgentSessionPath(projectId, 'unique-session-id');

  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        text: inputText,
        languageCode: 'en-US',
      },
    },
  };

  const responses = await sessionClient.detectIntent(request);
  const result = responses[0].queryResult;
  return result.fulfillmentText;
};

module.exports = { detectIntent };
