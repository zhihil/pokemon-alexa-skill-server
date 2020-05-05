const PokemonInfoIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'pokemon_info';
  },
  handle(handlerInput) {
    const { pokemon } = handlerInput.requestEnvelope.request.intent.slots;
    const pokemonName = pokemon.value;

    let speechText;

    if (pokemonName === "raichu") {
      speechText = "Pikachu is an electric type pokemon with a height of 4 and a weight of 60. What else would you like to know?"
    } else {
      speechText = `hmm, I'm not sure I know about ${pokemonName}, are you sure it is a pokemon?`
    }

    return handlerInput.responseBuilder
      .speak(speechText)
      .withSimpleCard('Hello World', speechText)
      .getResponse();
  }
};

module.exports = PokemonInfoIntentHandler;
