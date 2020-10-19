<template>
  <tr>
    <td>AA</td>
    <td>{{turtle.species}}</td>
    <td>{{turtle.location}}</td>
    <td>
      <button class="mini ui blue button">Edit</button>
      <button class="mini ui red button">Delete</button>
    </td>
  </tr>
</template>

<script>
export default {
  name: "Turtle",
  props: {
      turtle: {
          type: Object
      }
  }
};
</script>

<style scoped>
</style>
