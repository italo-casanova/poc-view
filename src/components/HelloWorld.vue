<template>
   <form @submit="handleSubmit">
      <div>
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="formData.name" required />

        <label for="name">lastname:</label>
        <input type="text" id="name" v-model="formData.surname" required />
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="formData.email" required />

        <label for="ruc">RUC:</label>
        <input type="ruc" id="ruc" v-model="formData.ruc" required />

        <label for="dni">DNI:</label>
        <input type="dni" id="dni" v-model="formData.dni" required />

        <label for="cellphone">cellphone:</label>
        <input type="cellphone" id="cellphone" v-model="formData.cellphone" required />

        <label for="address">address:</label>
        <input type="address" id="address" v-model="formData.address" required />
      </div>
      <button type="submit">Submit</button>
    </form>

</template>

<script lang="ts" setup>
import { ref } from 'vue';
// import ClientService from '@/services/client';
import axios from 'axios';
import Client from '@/interface/Client';

const client: Client = {
    name: "",
    surname: "",
    email: "",
    ruc: "",
    dni: "",
    cellphone: "",
    address: ""
}

// Define a reactive variable to store the API data
const formData = ref(client);

const handleSubmit = async () => {
  try {
    const response = await axios.post('http://127.0.0.1:3000/api/v1/clients/create', formData.value);
    console.log('Data submitted successfully:', response.data);
  } catch (error) {
    console.error('Error submitting data:', error);
  }
};


</script>
