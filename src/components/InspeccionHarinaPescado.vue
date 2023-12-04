<template>
    <v-container>
      <v-form ref="form">
        <v-text-field v-model="formFields.startDate" label="Fecha de Inicio"></v-text-field>
        <v-text-field v-model="formFields.startTime" label="Hora de Inicio"></v-text-field>
        <v-text-field v-model="formFields.requester" label="Solicitante"></v-text-field>
        <v-text-field v-model="formFields.applicants_code" label="Ruc del solicitante"></v-text-field>
        <v-text-field v-model="formFields.address" label="Dirección"></v-text-field>
        <v-text-field v-model="formFields.oi" label="OI"></v-text-field>
        <v-text-field v-model="formFields.inspectors_code" label="Código de inspector(es)"></v-text-field>
        <v-text-field v-model="formFields.inspection_detail" label="Detalle de la inspección"></v-text-field>
        <v-text-field v-model="formFields.amount" label="Cantidad"></v-text-field>
        <v-text-field v-model="formFields.weight_declared" label="Peso declarado (TM)"></v-text-field>
        <v-text-field v-model="formFields.in_zone" label="En zona"></v-text-field>
        <v-text-field v-model="formFields.protection" label="En zona"></v-text-field>
        <v-text-field v-model="formFields.surface" label="Superficie"></v-text-field>
        <v-text-field v-model="formFields.type_of_package" label="Superficie"></v-text-field>
        <v-text-field v-model="formFields.used_thermometer" label="Termómetro empleado"></v-text-field>
        <v-text-field v-model="formFields.inspection_made" label="Inspección realizada"></v-text-field>
        <v-text-field v-model="formFields.norms_and_instructions" label="Normas e instructivos"></v-text-field>
        <v-text-field v-model="formFields.s_n_f_physic" label="N° muestras para fisicoquímico"></v-text-field>
        <v-text-field v-model="formFields.s_n_f_microbiologic" label="N° muestras para microbiológica"></v-text-field>
        <v-text-field v-model="formFields.end_date" label="Fecha de fin"></v-text-field>
        <v-text-field v-model="formFields.end_time" label="Hora de fin"></v-text-field>
        <v-btn @click="resetForm" color=success>Subir</v-btn>
        <v-btn @click="resetForm" color=error>Cancelar/Volver</v-btn>
      </v-form>
    </v-container>
  </template>
  
  <script setup>
  import { ref, reactive, toRefs } from 'vue';
  import axios from 'axios';
  
  const formFields = reactive({
    startDate: new Date(),
    startTime: '',
    requester: '',
    applicants_code:'',
    address:'',
    oi:'',
    inspectors_code:'',
    inspection_detail:'',
    amount:0,
    weight_declared:0,
    in_zone:'',
    protection:'',
    surface:'',
    type_of_package:'',
    used_thermometer:'',
    inspection_made:'',
    norms_and_instructions:'',
    s_n_f_physic:0,
    s_n_f_microbiologic:'',
    end_date:new Date(),
    end_time:'',
  });
  
  
  const submitForm = async () => {
      try {
        const response = await axios.post('http://127.0.0.1/api/v1/service', formFields);
        console.log(response.data);
        // Handle your response here
      } catch (error) {
        console.error(error);
        // Handle your error here
    }
  };
  
  const resetForm = () => {
    formFields.startDate = new Date();
    formFields.startTime = '';
    formFields.requester= '';
    formFields.applicants_code='';
    formFields.address='';
    formFields.oi='';
    formFields.inspectors_code='';
    formFields.inspection_detail='';
    formFields.amount=0;
    formFields.weight_declared=0;
    formFields.in_zone='';
    formFields.protection='';
    formFields.surface='';
    formFields.type_of_package='';
    formFields.used_thermometer='';
    formFields.inspection_made='';
    formFields.norms_and_instructions='';
    formFields.s_n_f_physic=0;
    formFields.s_n_f_microbiologic='';
    formFields.end_date=new Date();
    formFields.end_time='';
    };
  
  </script>
  
  <style scoped>
  </style>