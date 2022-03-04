<template>
  <div class="hello">
    <div class="header">
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
      <li
        class="item"
        v-for="pokemon in pokemons"
        :key="pokemon.name"
        v-wow="{ 'animation-name': 'bounceIn', 'animation-duration': '1s' }"
      >
        <img :src="pokemon.img" alt="" class="img-item" />
        <a href="" class="pokemon-name"> {{ pokemon.name }}</a>
        <!-- <p v-for="ty in pokemon.type" :key="ty" class="pokemon-type">
          {{ ty }}
        </p> -->
        <PokemonType :types="pokemon.type" />
      </li>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import PokemonType from "@/views/Home/PokemonType.vue";

export default {
  name: "HelloWorld",
  components: {
    PokemonType,
  },
  props: {
    msg: String,
    // eslint-disable-next-line prettier/prettier
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
