const CancelAndStopIntentHandler = require("./CancelAndStopIntentHandler");
const LaunchRequestHandler = require("./LaunchRequestHandler");
const HelloWorldIntentHandler = require("./HelloWorldIntentHandler");
const HelpIntentHandler = require("./HelpIntentHandler");
const SessionEndedRequestHandler = require("./SessionEndedRequestHandler");
const ErrorHandler = require("./ErrorHandler");

let skill;

exports.handler = async function (event, context) {
  console.log(`REQUEST++++${JSON.stringify(event)}`);
  if (!skill) {
    skill = Alexa.SkillBuilders.custom()
      .addRequestHandlers(
        LaunchRequestHandler,
        HelloWorldIntentHandler,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        SessionEndedRequestHandler,
      )
      .addErrorHandlers(ErrorHandler)
      .create();
  }

  const response = await skill.invoke(event, context);
  console.log(`RESPONSE++++${JSON.stringify(response)}`);

  return response;
};
