<template>
  <div class="hello">
    <div id="header">
      <div class="logo"></div>
      <input type="text" class="search-bar" />
      <a href="" class="search-icon"></a>
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
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}

.img-item {
  width: 220px;
}

#list-items {
  margin-top: 8px;
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
  display: block;
}
</style>
