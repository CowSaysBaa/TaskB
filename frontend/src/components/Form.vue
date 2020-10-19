<template>
  <div class="form">
    <form class="ui form">
      <div class="fields">
        <div class="four wide field">
          <label>Turtle species</label>
          <input type="text" name="species" />
        </div>

        <div class="four wide field">
          <label>Turtle location</label>
          <input type="text" name="location" />
        </div>

        <div class="two wide field">
          <button class="ui primary button submit-button">Submit</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Form",
};
</script>

<style scoped>
</style>
