const axios = require("axios");

const requestPokemonTrait = async function (pokemonName, trait) {
  return axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then(res => {
      const { data } = res;
      if (data[trait]) {
        return `${pokemonName} has a height of ${String(data[trait])} decimetres`;
      } else {
        return `hmm, I'm not sure I know about ${pokemonName}'s ${trait}`;
      }
    })
    .catch(_ => {
      return`hmm, I'm not sure I know about ${pokemonName}'s ${trait}`;
    });
};

const PokemonTraitIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'pokemon_trait';
  },
  async handle(handlerInput) {
    const { pokemon, trait } = handlerInput.requestEnvelope.request.intent.slots;
    const pokemonName = pokemon.value;
    const traitName = trait.value;

    console.log(pokemonName);
    console.log(traitName);

    const speechText = await requestPokemonTrait(pokemonName, traitName);

    return handlerInput.responseBuilder
      .speak(speechText)
      .withSimpleCard('Hello World', speechText)
      .getResponse();
  }
};

module.exports = PokemonTraitIntentHandler;
