<template>
  <tr>
    <td>{{ turtle._id }}</td>
    <td>{{ turtle.species }}</td>
    <td>{{ turtle.location }}</td>
    <td>
      <button class="mini ui blue button" @click="onEdit">Edit</button>
      <button class="mini ui red button" @click="onDelete">Delete</button>
    </td>
  </tr>
</template>

<script>
export default {
  name: "Turtle",
  props: {
    turtle: {
      type: Object,
    },
  },
  methods: {
    onDelete() {
      //window.console.log("turtle delete " + this.turtle._id)
      this.$emit("onDelete", this.turtle._id);
    },
    onEdit() {
      //window.console.log("turtle edit " + this.turtle._id)
      this.$emit("onEdit", this.turtle);
    },
  },
};
</script>

<style scoped>
</style>
