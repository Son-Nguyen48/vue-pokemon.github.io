<template>
  <div id="pokemon-detail">
    <span class="pokemon-name">Name: {{ pokemonDetail.name }}</span> |
    <span class="pokemon-number">Number: {{ pokemonDetail.num }}</span> <br />
    <div class="table-infor">
      <img :src="pokemonDetail.img" alt="" class="pokemon-img" />
      <div class="box-detail-1">
        <span class="pokemon-height">Height</span> |
        <span>{{ pokemonDetail.height }}</span> <br />
        <span class="pokemon-weight">Weight</span> |
        <span>{{ pokemonDetail.weight }}</span> <br />
        <span class="pokemon-candy">Candy</span> |
        <span>{{ pokemonDetail.candy }}</span> <br />
        <span class="pokemon-candy_count">Candy count</span> |
        <span>{{ pokemonDetail.candy_count }}</span> <br />
        <span class="pokemon-egg">Egg</span> |
        <span>{{ pokemonDetail.egg }}</span> <br />
      </div>
      <div class="box-detail-2">
        <span class="pokemon-type">Type</span> |
        <span
          :class="[typeColor(type)]"
          class="pokemon-type"
          v-for="type in pokemonDetail.type"
          :key="type"
        >
          {{ type }}
        </span>
        <br />
        <span class="pokemon-type">Weaknesses</span> |
        <span
          :class="[typeColor(type)]"
          class="pokemon-type"
          v-for="type in pokemonDetail.weaknesses"
          :key="type"
        >
          {{ type }}
        </span>
      </div>
    </div>
    <div>
      Pokemon Go:
      <span class="pokemon-egg">egg</span> |
      <span>{{ pokemonDetail.egg }}</span> <br />
      <span class="pokemon-spawn_chance">spawn_chance</span> |
      <span>{{ pokemonDetail.spawn_chance }}</span> <br />
      <span class="pokemon-avg_spawns">avg_spawns</span> |
      <span>{{ pokemonDetail.avg_spawns }}</span> <br />
      <span class="pokemon-spawn_time">spawn_time</span> |
      <span>{{ pokemonDetail.spawn_time }}</span> <br />
      <span class="pokemon-multipliers">multipliers</span> |
      <span>{{ pokemonDetail.multipliers }}</span> <br />
    </div>
    <div class="pokemon-Weaknesses">Evolution:</div>
    <div class="pokemon-evolutions"></div>
    <div class="footer">&copy;Pokemon.com All copyright</div>
  </div>
</template>

<script>
const objectColor = {
  Grass: "grassType",
  Poison: "poisonType",
  Fire: "fireType",
  Water: "waterType",
  Bug: "bugType",
  Flying: "flyingType",
  Ground: "groundType",
  Psychic: "psychicType",
  Electric: "electricType",
  Normal: "normalType",
  Dragon: "dragonType",
  Fighting: "fightingType",
  Rock: "rockType",
  Ice: "iceType",
  Dark: "darkType",
  Ghost: "ghostType",
};
import axios from "axios";
export default {
  name: "PokemonDetail",
  data() {
    return {
      pokemonDetail: {},
    };
  },
  created() {
    // const pokemonId = this.$route.params.id;
    // // eslint-disable-next-line prettier/prettier
    // const selectedPokemon = this.pokemons.find(pokemon => pokemon.id === pokemonId);
    // this.pokemon = selectedPokemon;
  },
  mounted() {
    axios
      .get(
        "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json"
      )
      .then((res) => {
        const id = this.$route.params.id;
        const pokemon = res.data.pokemon.find((p) => p.id === Number(id));
        this.pokemonDetail = pokemon;
      });
  },
  methods: {
    typeColor(type) {
      return objectColor[type];
    },
  },
};
</script>
<style lang="css" scope>
body {
  background: rgb(220, 229, 235);
}
#pokemon-detail {
  margin: 20px auto;
  width: 600px;
  background: #fff;
  border-radius: 5px;
}

#pokemon-detail .table-infor {
  display: flex;
}

#pokemon-detail .pokemon-img {
  height: 150px;
  margin: 8px auto;
}

.box-detail-1,
.box-detail-2 {
  width: calc(100% / 3);
}

.box-detail-2 {
  margin-left: 18px;
}

.table-infor .pokemon-type {
  font-family: "Flexo-Medium", arial, sans-serif;
  border-radius: 3px;
  line-height: 16px;
  /* max-width: 110px; */
  width: max-content;
  margin: 0 1.5625% 4px 0px;
  width: 46.4375%;
  /* float: left; */
  text-transform: none;
  font-size: 16px;
  text-align: center;
}
</style>
