<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-text-field
      v-model="client.name"
      :rules="nameRules"
      label="Nombre"
      required
    ></v-text-field>
    <v-text-field
      v-model="client.surname"
      :rules="surnameRules"
      label="Apellido"
      required
    ></v-text-field>
    <v-text-field
      v-model="client.email"
      :rules="emailRules"
      label="Correo"
      required
    ></v-text-field>
    <v-text-field
      v-model="client.ruc"
      :rules="rucRules"
      label="RUC"
      required
    ></v-text-field>
    <v-text-field
      v-model="client.dni"
      :rules="dniRules"
      label="DNI"
      required
    ></v-text-field>
    <v-text-field
      v-model="client.cellphone"
      :rules="cellphoneRules"
      label="Celular"
      required
    ></v-text-field>
    <v-text-field
      v-model="client.address"
      :rules="addressRules"
      label="Dirección"
      required
    ></v-text-field>
    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="submit"
    >
      Crear
    </v-btn>
    <v-btn color="error" @click="reset">Limpiar</v-btn>
  </v-form>

</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import ClientService from '@/services/client';
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
const apiData = ref([client]);

// Fetch data from the API when the component is mounted
onMounted(async () => {
  try {
    // Make a GET request to the API
    const response = await ClientService.create(apiData.value);

    // Update the reactive variable with the fetched data
    apiData.value = response.data;
  } catch (error) {
    console.error('Error fetching API data:', error);
  }
});
</script>
