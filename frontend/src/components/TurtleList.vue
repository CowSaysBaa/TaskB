<template>
  <div class="turtle-list">
    <div class="data">
      <table class="ui celled table">
        <thead>
          <tr>
            <th style="width: 50px; text-align: centre">#</th>
            <th>Species</th>
            <th>Location</th>
            <th style="width: 148px">Action</th>
          </tr>
        </thead>

        <tbody>
          <Turtle v-for="turtle in turtles" :key="turtle.id" :turtle="turtle" />
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Turtle from "./Turtle";

export default {
  name: "TurtleList",
  components: {
    Turtle,
  },
  props: {
    turtles: {
      type: Array,
    },
  },
};
</script>

<style scoped>
</style>
