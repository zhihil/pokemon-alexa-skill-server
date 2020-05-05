const helpText = [
  "For a description of Pikachu, you can say 'Tell me about Pikachu'",
  "To get Pikachu's height, you can ask 'What is Pikachu's height?'"
];
let state = 0;
let continueHelp = false;

const HelpIntentHandler = {
  canHandle(handlerInput) {
    if (handlerInput.requestEnvelope.request.type !== 'IntentRequest') {
      return false;
    } else if (handlerInput.requestEnvelope.request.intent.name === 'AMAZON.HelpIntent') {
      return true;
    } else if (continueHelp) {
      continueHelp = false;
      return handlerInput.requestEnvelope.request.intent.name === 'AMAZON.YesIntent';
    } else {
      return false;
    }
  },
  handle(handlerInput) {
    const speechText = `${helpText[state]}. Would you like to hear more help?`;
    state = (state + 1) % helpText.length;
    continueHelp = true;

    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
      .withSimpleCard('Hello World', speechText)
      .getResponse();
  }
};

module.exports = HelpIntentHandler;
