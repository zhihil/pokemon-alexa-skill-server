const axios = require("axios");

const requestPokemonInfo = async function (pokemonName) {
  return axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemonName}`)
    .then(res => {
      const { data } = res;
      const { flavor_text_entries } = data;

      const en_entry = flavor_text_entries.filter(entry => (
        entry.language.name === "en" && entry.version.name === "diamond"
      ));
      
      if (en_entry.length == 1) {
        return en_entry[0].flavor_text;
      }
      return `hmm, I'm not sure I know about ${pokemonName}, are you sure it is a pokemon?`;
    })
    .catch(_ => {
      return `hmm, I'm not sure I know about ${pokemonName}, are you sure it is a pokemon?`;
    });
}

const PokemonInfoIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'pokemon_info';
  },
  async handle(handlerInput) {
    const { pokemon } = handlerInput.requestEnvelope.request.intent.slots;
    const pokemonName = pokemon.value;

    let speechText = await requestPokemonInfo(pokemonName);

    return handlerInput.responseBuilder
      .speak(speechText)
      .withSimpleCard('Hello World', speechText)
      .getResponse();
  }
};

module.exports = PokemonInfoIntentHandler;
