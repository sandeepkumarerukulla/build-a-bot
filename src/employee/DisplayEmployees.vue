<template>
  <div>
    <h1>Display Employees</h1>
    <br />

    {{errorMessage}}
    <br />

    <table class="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th>Name</th>
          <th>Location</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(employee, index) in employees" :key="index">
          <td>{{ employee.Id }}</td>
          <td>{{ employee.Name }}</td>
          <td>{{ employee.Location }}</td>
          <td class="action">
            <div>
                <span class="action" @click="navigateToEdit(employee.Id)">Edit</span>
                <span class="action" @click="deleteEmployee(employee.Id)">Delete</span>
           </div>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="add-button">
      <router-link :to="{ name: 'AddEmployee' }">
        <button class="button">Add Employee</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'DisplayEmployees',
    data() {
        return {
            employees: [],
            errorMessage: '',
        };
    },
    created() {
        axios.get('/servicestack/employees/').then((res) => {
            this.employees = res.data;
        });
    },
    methods: {
        navigateToEdit(id) {
            this.$router.push(`/edit/${id}`);
        },
        deleteEmployee(id) {
            axios.delete(`/servicestack/employees/${id}`)
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

<style scoped>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: center;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
.button {
  background-color: skyblue;
  border-radius: 2px;
}

button {
    margin-top: 20px;
  padding: 10px 20px;
  background-color: dodgerblue;
  border: 1px solid #ddd;
  color: white;
  cursor: pointer;
}

button:hover {
  background-color: royalblue;
}
.action {
    width: 200px;
    padding-right: 50px;
    padding-left: 30px;
    text-align: center;
    text-decoration: underline;
    cursor: pointer;
}
</style>
