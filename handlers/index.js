const Alexa = require("ask-sdk-core");
const { ExpressAdapter } = require('ask-sdk-express-adapter');

const CancelAndStopIntentHandler = require("./CancelAndStopIntentHandler");
const LaunchRequestHandler = require("./LaunchRequestHandler");
const PokemonInfoIntentHandler = require("./PokemonInfoIntentHandler");
const PokemonTraitIntentHandler = require("./PokemonTraitIntentHandler");
const HelpIntentHandler = require("./HelpIntentHandler");
const ErrorHandler = require("./ErrorHandler");
const RepeatIntentHandler = require("./RepeatIntentHandler");
const FallbackIntentHandler = require("./FallbackIntentHandler");
const NavigateHomeIntentHandler = require("./NavigateHomeIntentHandler");

const skillBuilder = Alexa.SkillBuilders.custom();

skillBuilder
  .addRequestHandlers(
    PokemonInfoIntentHandler,
    PokemonTraitIntentHandler,
    LaunchRequestHandler,
    CancelAndStopIntentHandler,
    HelpIntentHandler,
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
