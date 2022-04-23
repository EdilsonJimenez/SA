<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <ul>
      Walter Josue Paredes Sol
    </ul>
    <ul>
      201504326
    </ul>
    <br/>
    <ul>
      Edilson Eduardo Jimenez Garcia
    </ul>
    <ul>
      201513364
    </ul>
    <ul>

    </ul>
        <br/>
    <ul>
      Software Avanzado B
    </ul>
        <ul>
      Cantidad de veces consumido: {{consumido}}
    </ul>
      <button>Consumir Endpoint</button>
  </div>

</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data:{
    consumido:0
  }
};
</script>

<!-- Add "scoped" attribute to ulmit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  ulst-style-type: none;
  padding: 0;
}
ul {
  display: inulne-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
