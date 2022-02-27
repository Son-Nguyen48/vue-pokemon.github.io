<template>
  <div class="hello">
    <div id="header">
      <div class="logo"></div>
      <input type="text" class="search-bar" />
      <a href="" class="search-icon"></a>
    </div>
    <div id="list-items">
      <li class="item">
        <a href="">Pokemon {{ PokemonName }}</a>
      </li>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
    pokename() {
      return {
        PokemonName: "A",
      };
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
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
}
</style>
