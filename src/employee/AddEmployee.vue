<template>
  <div>
        <h1>Add Employee</h1>

    <b-form @submit.prevent="addEmployee" method="post">
  
    <b-form-group
        id="name-group"
        label="Name:"
        label-for="name">

        <b-form-input
          id="name"
          v-model="employee.Name"
          type="text"
          placeholder="Enter name"
          required></b-form-input>

      </b-form-group>

      <b-form-group
        id="location-group"
        label="Location:"
        label-for="location">

        <b-form-input
          id="location"
          v-model="employee.Location"
          type="text"
          placeholder="Enter location"
          required></b-form-input>

      </b-form-group>

     <b-button type="submit" class="my-2" >Add Employee</b-button>

    </b-form>
    <p> {{errorMessage}} </p>
  </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            employee: {
                Name: "",
                Location: "",
            },
            errorMessage: "",
        };
    },
    methods: {
        addEmployee() {
            axios
                .post("/servicestack/employees/", this.employee)
                .then((response) => {
                    console.log('respo',response);
                    if (response.status === 200) {
                        this.$router.push("/employees");
                    } else {
                        this.errorMessage = response.errorMessage;
                    }
                })
                .catch((error) => {
                    this.errorMessage = error;
                });
        },
    },
};
</script>