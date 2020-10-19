<template>
  <div class="form">
    <form class="ui form">
      <div class="fields">
        <div class="four wide field">
          <label>Turtle species</label>
          <input
            type="text"
            name="species"
            @change="handleChange"
            :value="form.species"
          />
        </div>

        <div class="four wide field">
          <label>Turtle location</label>
          <input
            type="text"
            name="location"
            @change="handleChange"
            :value="form.location"
          />
        </div>

        <div class="two wide field">
          <button :class="btnClass" @click="onFormSubmit">
            {{ btnName }}
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Form",
  data() {
    return {
      btnName: "Submit",
      btnClass: "ui primary button submit-button",
    };
  },
  props: {
    form: {
      type: Object,
    },
  },
  methods: {
    handleChange(event) {
      const { name, value } = event.target;
      let form = this.form;
      form[name] = value;
      this.form = form;
    },
    onFormSubmit(e) {
      e.preventDefault();

      if (this.formValidation()) {
        // window.console.log("Ready to submit form");
        this.$emit("onFormSubmit", this.form);

        this.btnName = "Submit";
        this.btnClass = "ui primary button submit-button";

        this.clearFormFields();
      }
    },
    formValidation() {
      if (document.getElementsByName("species")[0].value === "") {
        alert("Turtle species is empty");
        return false;
      }

      if (document.getElementsByName("location")[0].value === "") {
        alert("Turtle location is empty");
        return false;
      }
      return true;
    },
    clearFormFields() {
      this.form.species = "";
      this.form.location = "";
      this.form.isEdit = false;

      document.querySelector("form").reset();
    },
  },
  updated() {
    if (this.form.isEdit) {
      (this.btnName = "Update"),
        (this.btnClass = "ui red button submit-button");
    }
  },
};
</script>

<style scoped>
.submit-button {
  margin-top: 24px;
}
</style>
