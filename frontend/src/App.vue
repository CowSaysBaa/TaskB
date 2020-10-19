<template>
  <div id="app">
    <div class="ui fixed inverted menu vue-color">
      <div class="ui containter">
        <a href="#" class="header item">A LINK</a>
      </div>
    </div>

    <div class="ui main container">
      <Form />
      <TurtleList :turtles="turtles" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Form from "./components/Form";
import TurtleList from "./components/TurtleList";

export default {
  name: "App",
  components: {
    Form,
    TurtleList,
  },
  data() {
    return {
      url: "https://taskb-turtle-database.herokuapp.com/api/turtles",
      turtles: [],
    };
  },
  methods: {
    getTurtles() {
      axios.get(this.url, {	headers: {'Access-Control-Allow-Origin': '*'}}).then((data) => {
        this.turtles = data.data;
        console.log(data)
      });
    },
  },
  created() {
    this.getTurtles();
  },
};
</script>

<style>
.vue-color {
  background: blue;
}

.main.container {
  margin-top: 60px;
}

.submit-button {
  margin-top: 24px;
  float: right;
}
</style>
