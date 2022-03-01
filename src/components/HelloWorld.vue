<template>
  <div class="hello">
    <div id="header">
      <a class="logo"></a>
      <input
        v:mode="pok"
        type="text"
        class="search-bar"
        placeholder="Enter name Pokemon"
      />
      <a href="" class="search-icon"><i class="ti-search"></i></a>
    </div>
    <div id="list-items">
      <li class="item" v-for="pokemon in pokemons" :key="pokemon.name">
        <img :src="pokemon.img" alt="" class="img-item" />
        <a href="">Pokemon {{ pokemon.name }}</a>
      </li>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "HelloWorld",
  props: {
    msg: String,
    // eslint-disable-next-line prettier/prettier
    PokemonName: String
  },
  data() {
    return {
      // eslint-disable-next-line prettier/prettier
      pokemons: []
    };
  },
  mounted() {
    axios
      .get(
        "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json"
      )
      .then((res) => {
        this.pokemons = res.data.pokemon;
      });
  },
  // eslint-disable-next-line prettier/prettier
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
