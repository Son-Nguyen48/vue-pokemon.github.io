<template>
  <div class="pokemon-detail">
    <span class="pokemon-name">{{ pokemonDetail.name }}</span>
    <span class="pokemon-number"></span>
    <img src="" alt="" class="pokemon-img" />
    <div class="box-detail-1"></div>
    <div class="box-detail-2"></div>
    <div class="pokemon-type"></div>
    <div class="pokemon-Weaknesses"></div>
    <div class="pokemon-evolutions"></div>
  </div>
</template>

<script>
export default {
  name: "PokemonDetail",
  props: {
    pokemonDetail: Object,
  },
};
</script>
