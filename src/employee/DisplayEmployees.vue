<template>
  <div>
    <h1>Display Employees</h1>
    <br />

    {{ errorMessage }}
    <br />

    <b-table hover :items="employees" :fields="fields" >
      <template #cell(actions)="row">
        <b-button
          size="sm"
          @click="navigateToEdit(row.item.Id)"
          class="mr-1 mx-1">Edit</b-button>
        <b-button size="sm" @click="deleteEmployee(row.item.Id)">
           Delete
        </b-button>
      </template>
    </b-table>

    <div>
      <router-link :to="{ name: 'AddEmployee' }">
        <!-- <button class="button">Add Employee</button> -->
        <b-button>Add Employee</b-button>
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            employees: [],
            fields: [
                { key: "Id", label: "ID" },
                { key: "Name", label: "Name" },
                { key: "Location", label: "Location" },
                { key: "actions", label: "Actions" },
            ],
            errorMessage: "",
        };
    },
    created() {
        axios.get("/servicestack/employees/").then((res) => {
            this.employees = res.data;
        });
    },
    methods: {
        navigateToEdit(id) {
            this.$router.push(`/edit/${id}`);
        },
        deleteEmployee(id) {
            axios
                .delete(`/servicestack/employees/${id}`)
                .then((response) => {
                    if (response.status === 200) {
                        this.$router.go();
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


