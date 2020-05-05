const PokemonTraitIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'pokemon_trait';
  },
  handle(handlerInput) {
    const { pokemon, trait } = handlerInput.requestEnvelope.request.intent.slots;
    const pokemonName = pokemon.value;
    const traitName = trait.value;

    let speechText;

    if (pokemonName === "raichu" && traitName === "height") {
      speechText = "Pikachu has a height of 4. What else would you like to know?"
    } else {
      speechText = `hmm, I'm not sure I know about ${pokemonName}'s ${traitName}.`
    }

    return handlerInput.responseBuilder
      .speak(speechText)
      .withSimpleCard('Hello World', speechText)
      .getResponse();
  }
};

module.exports = PokemonTraitIntentHandler;
