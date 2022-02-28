<template>
  <div class="hello">
    <div id="header">
      <div class="logo"></div>
      <input type="text" class="search-bar" />
      <a href="" class="search-icon"><i class="ti-search"></i></a>
    </div>
    <div id="list-items">
      <li class="item" v-for="pokemon in pokemons" :key="pokemon.pok">
        <img :src="pokemon.pokimg" alt="" class="img-item" />
        <a href="">Pokemon {{ pokemon.pok }}</a>
      </li>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
    PokemonName: String,
  },
  data() {
    return {
      pokemons: [
        {
          pok: "a",
          pokimg:
            "https://i0.wp.com/nintendosoup.com/wp-content/uploads/2019/11/linkzeldaPokemon.jpg?fit=1500%2C844&ssl=1",
        },
        {
          pok: "b",
          pokimg:
            "https://i0.wp.com/nintendosoup.com/wp-content/uploads/2019/11/linkzeldaPokemon.jpg?fit=1500%2C844&ssl=1",
        },
        {
          pok: "c",
          pokimg:
            "https://i0.wp.com/nintendosoup.com/wp-content/uploads/2019/11/linkzeldaPokemon.jpg?fit=1500%2C844&ssl=1",
        },
        {
          pok: "d",
          pokimg:
            "https://i0.wp.com/nintendosoup.com/wp-content/uploads/2019/11/linkzeldaPokemon.jpg?fit=1500%2C844&ssl=1",
        },
        {
          pok: "a",
          pokimg:
            "https://i0.wp.com/nintendosoup.com/wp-content/uploads/2019/11/linkzeldaPokemon.jpg?fit=1500%2C844&ssl=1",
        },
        {
          pok: "b",
          pokimg:
            "https://i0.wp.com/nintendosoup.com/wp-content/uploads/2019/11/linkzeldaPokemon.jpg?fit=1500%2C844&ssl=1",
        },
        {
          pok: "a",
          pokimg:
            "https://i0.wp.com/nintendosoup.com/wp-content/uploads/2019/11/linkzeldaPokemon.jpg?fit=1500%2C844&ssl=1",
        },
        {
          pok: "b",
          pokimg:
            "https://i0.wp.com/nintendosoup.com/wp-content/uploads/2019/11/linkzeldaPokemon.jpg?fit=1500%2C844&ssl=1",
        },
        {
          pok: "a",
          pokimg:
            "https://i0.wp.com/nintendosoup.com/wp-content/uploads/2019/11/linkzeldaPokemon.jpg?fit=1500%2C844&ssl=1",
        },
        {
          pok: "b",
          pokimg:
            "https://i0.wp.com/nintendosoup.com/wp-content/uploads/2019/11/linkzeldaPokemon.jpg?fit=1500%2C844&ssl=1",
        },
        {
          pok: "a",
          pokimg:
            "https://i0.wp.com/nintendosoup.com/wp-content/uploads/2019/11/linkzeldaPokemon.jpg?fit=1500%2C844&ssl=1",
        },
        {
          pok: "b",
          pokimg:
            "https://i0.wp.com/nintendosoup.com/wp-content/uploads/2019/11/linkzeldaPokemon.jpg?fit=1500%2C844&ssl=1",
        },
        {
          pok: "a",
          pokimg:
            "https://i0.wp.com/nintendosoup.com/wp-content/uploads/2019/11/linkzeldaPokemon.jpg?fit=1500%2C844&ssl=1",
        },
        {
          pok: "b",
          pokimg:
            "https://i0.wp.com/nintendosoup.com/wp-content/uploads/2019/11/linkzeldaPokemon.jpg?fit=1500%2C844&ssl=1",
        },
        {
          pok: "a",
          pokimg:
            "https://i0.wp.com/nintendosoup.com/wp-content/uploads/2019/11/linkzeldaPokemon.jpg?fit=1500%2C844&ssl=1",
        },
        {
          pok: "b",
          pokimg:
            "https://i0.wp.com/nintendosoup.com/wp-content/uploads/2019/11/linkzeldaPokemon.jpg?fit=1500%2C844&ssl=1",
        },
        {
          pok: "a",
          pokimg:
            "https://i0.wp.com/nintendosoup.com/wp-content/uploads/2019/11/linkzeldaPokemon.jpg?fit=1500%2C844&ssl=1",
        },
        {
          pok: "b",
          pokimg:
            "https://i0.wp.com/nintendosoup.com/wp-content/uploads/2019/11/linkzeldaPokemon.jpg?fit=1500%2C844&ssl=1",
        },
        {
          pok: "a",
          pokimg:
            "https://i0.wp.com/nintendosoup.com/wp-content/uploads/2019/11/linkzeldaPokemon.jpg?fit=1500%2C844&ssl=1",
        },
        {
          pok: "b",
          pokimg:
            "https://i0.wp.com/nintendosoup.com/wp-content/uploads/2019/11/linkzeldaPokemon.jpg?fit=1500%2C844&ssl=1",
        },
        {
          pok: "a",
          pokimg:
            "https://i0.wp.com/nintendosoup.com/wp-content/uploads/2019/11/linkzeldaPokemon.jpg?fit=1500%2C844&ssl=1",
        },
        {
          pok: "b",
          pokimg:
            "https://i0.wp.com/nintendosoup.com/wp-content/uploads/2019/11/linkzeldaPokemon.jpg?fit=1500%2C844&ssl=1",
        },
        {
          pok: "a",
          pokimg:
            "https://i0.wp.com/nintendosoup.com/wp-content/uploads/2019/11/linkzeldaPokemon.jpg?fit=1500%2C844&ssl=1",
        },
        {
          pok: "b",
          pokimg:
            "https://i0.wp.com/nintendosoup.com/wp-content/uploads/2019/11/linkzeldaPokemon.jpg?fit=1500%2C844&ssl=1",
        },
        {
          pok: "a",
          pokimg:
            "https://i0.wp.com/nintendosoup.com/wp-content/uploads/2019/11/linkzeldaPokemon.jpg?fit=1500%2C844&ssl=1",
        },
        {
          pok: "b",
          pokimg:
            "https://i0.wp.com/nintendosoup.com/wp-content/uploads/2019/11/linkzeldaPokemon.jpg?fit=1500%2C844&ssl=1",
        },
        {
          pok: "a",
          pokimg:
            "https://i0.wp.com/nintendosoup.com/wp-content/uploads/2019/11/linkzeldaPokemon.jpg?fit=1500%2C844&ssl=1",
        },
        {
          pok: "b",
          pokimg:
            "https://i0.wp.com/nintendosoup.com/wp-content/uploads/2019/11/linkzeldaPokemon.jpg?fit=1500%2C844&ssl=1",
        },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
