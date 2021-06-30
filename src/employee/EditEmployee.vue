<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h1> Edit Employee</h1>
      </div>
      <form class="form-inline" v-on:submit.prevent="updateEmployee()">
          <div>
          <label>Id:</label>
          <label> {{employee.Id }} </label>
          <br />
        </div>
        <div>
          <label>Name:</label>
          <input type="text"  v-model="employee.Name" />
        </div>
        <div>
          <label>Location: </label>
          <input type="text" v-model="employee.Location" />
        </div>
        <input type="submit" class="button" value="Update Employee" />
      </form>

      {{ errorMessage }}
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'EditEmployee',
    data() {
        return {
            employee: {},
            errorMessage: '',
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
                .put('/servicestack/employees/', employees)
                .then((response) => {
                    if (response.status === 200) {
                        this.$router.push('/employees');
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
.form-inline {
  flex-flow: row wrap;
  align-items: center;
}

.form-inline label {
  margin: 5px 10px 5px 0;
}

.form-inline input {
  vertical-align: middle;
  margin: 5px 10px 5px 0;
  padding: 10px;
  background-color: #fff;
  border: 1px solid #ddd;
}

.form-inline .button {
  padding: 10px 20px;
  background-color: dodgerblue;
  border: 1px solid #ddd;
  color: white;
  cursor: pointer;
}

.form-inline .button:hover {
  background-color: royalblue;
}

@media (max-width: 800px) {
  .form-inline input {
    margin: 10px 0;
  }

  .form-inline {
    flex-direction: column;
    align-items: stretch;
  }
}

div {
    margin: 5px;
}
</style>
