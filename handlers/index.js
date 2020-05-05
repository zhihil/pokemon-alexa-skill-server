const Alexa = require("ask-sdk-core");
const { ExpressAdapter } = require('ask-sdk-express-adapter');

const CancelAndStopIntentHandler = require("./CancelAndStopIntentHandler");
const LaunchRequestHandler = require("./LaunchRequestHandler");
const PokemonIntentHandler = require("./PokemonIntentHandler");
const HelpIntentHandler = require("./HelpIntentHandler");
const ErrorHandler = require("./ErrorHandler");
const YesIntentHandler = require("./YesIntentHandler");
const NoIntentHandler = require("./NoIntentHandler");
const RepeatIntentHandler = require("./RepeatIntentHandler");
const FallbackIntentHandler = require("./FallbackIntentHandler");
const NavigateHomeIntentHandler = require("./NavigateHomeIntentHandler");

const skillBuilder = Alexa.SkillBuilders.custom();

skillBuilder
  .addRequestHandlers(
    PokemonIntentHandler,
    LaunchRequestHandler,
    CancelAndStopIntentHandler,
    HelpIntentHandler,
    YesIntentHandler,
    NoIntentHandler,
    RepeatIntentHandler,
    FallbackIntentHandler,
    NavigateHomeIntentHandler
  )
  .addErrorHandlers(
    ErrorHandler
  )
  .lambda();

const skill = skillBuilder.create();
const adapter = new ExpressAdapter(skill, true, true);

module.exports = adapter;
