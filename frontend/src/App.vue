<template>
  <div id="app">
    <div class="header">
      <div class="ui containter">
        <h1>Task B4</h1>
      </div>
    </div>

    <div class="ui main container">
      <Form :form="form" @onFormSubmit="onFormSubmit" />
      <TurtleList :turtles="turtles" @onDelete="onDelete" @onEdit="onEdit" />
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
      form: { species: "", location: "", isEdit: false },
    };
  },
  methods: {
    getTurtles() {
      axios.get(this.url).then((data) => {
        this.turtles = data.data.data;
      });
    },
    deleteTurtle(id) {
      axios
        .delete(`${this.url}/${id}`)
        .then(() => {
          this.getTurtles();
        })
        .catch((e) => {
          alert(e);
        });
    },
    createTurtle(data) {
      axios
        .post(this.url, {
          species: data.species,
          location: data.location,
        })
        .then(() => {
          this.getTurtles();
        })
        .catch((e) => {
          alert(e);
        });
    },
    editTurtle(data) {
      axios
        .put(`${this.url}/${data._id}`, {
          species: data.species,
          location: data.location,
        })
        .then(() => {
          this.getTurtles();
        })
        .catch((e) => {
          alert(e);
        });
    },
    onDelete(id) {
      //window.console.log("app delete", id);
      this.deleteTurtle(id);
    },
    onEdit(data) {
      //window.console.log("add edit", data);
      this.form = data;
      this.form.isEdit = true;
    },
    onFormSubmit(data) {
      // window.console.log("app onFormSubmit", data)
      if (data.isEdit) {
        this.editTurtle(data);
      } else {
        this.createTurtle(data);
      }
    },
  },
  created() {
    this.getTurtles();
  },
};
</script>

<style>
.main.container {
  margin-top: 60px;
}

.header {
  margin-top: 30px;
  text-align: center;
}
</style>
