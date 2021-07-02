<template>
  <div >
    <h1>Edit Employee</h1>

    <b-form @submit.prevent="updateEmployee()" method="post">
      
      <b-form-group id="name-group" label="Name:" label-for="name">
        <b-form-input
          id="name"
          v-model="employee.Name"
          type="text"
          placeholder="Enter Name"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="location-group" label="Location:" label-for="location">
        <b-form-input
          id="location"
          v-model="employee.Location"
          type="text"
          placeholder="Enter location"
          required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" class="my-2" >Update Employee</b-button>
    </b-form>
  </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            employee: {},
            errorMessage: "",
        };
    },
    created() {
        axios
            .get(`/servicestack/employees/${this.$route.params.id}`)
            .then((res) => {
                this.employee = res.data;
            });
    },
    methods: {
        updateEmployee() {
            const employees = {
                Id: this.$route.params.id,
                Name: this.employee.Name,
                Location: this.employee.Location,
            };
            axios
                .put("/servicestack/employees/", employees)
                .then((response) => {
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
