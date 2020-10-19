<template>
  <div class="turtle-list">
    <div class="data">
      <table class="ui celled table">
        <thead>
          <tr>
            <th style="width: 50px; text-align: centre">ID</th>
            <th>Species</th>
            <th>Location</th>
            <th style="width: 148px">Action</th>
          </tr>
        </thead>

        <tbody>
          <Turtle
            v-for="turtle in turtles"
            :key="turtle._id"
            :turtle="turtle"
            @onDelete="onDelete"
            @onEdit="onEdit"
          />
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
  methods: {
    onDelete(id) {
      //window.console.log("turtle list delete", id)
      this.$emit("onDelete", id);
    },
    onEdit(data) {
      //window.console.log("turtle list edit", data)
      this.$emit("onEdit", data);
    },
  },
};
</script>

<style scoped>
</style>
