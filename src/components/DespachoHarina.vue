<template>
    <v-container>
      <v-form ref="form">
        <v-text-field v-model="dispatchData.startDate" label="Fecha de inicio"></v-text-field>
        <v-text-field v-model="dispatchData.startHour" label="Hora de inicio"></v-text-field>
        <v-text-field v-model="dispatchData.oi" label="OI"></v-text-field>
        <v-text-field v-model="dispatchData.client_RUC" label="RUC cliente"></v-text-field>
        <v-text-field v-model="dispatchData.producer" label="Productor"></v-text-field>
        <v-text-field v-model="dispatchData.customs_agent" label="Ag.Aduana"></v-text-field>
        <v-text-field v-model="dispatchData.locality" label="Localidad"></v-text-field>
        <v-text-field v-model="dispatchData.boarding_port" label="Puerto Embarque"></v-text-field>
        <v-text-field v-model="dispatchData.ship" label="Nave"></v-text-field>
        <v-text-field v-model="dispatchData.TM" label="TM"></v-text-field>
        <v-text-field v-model="dispatchData.instructive" label="Instructivo"></v-text-field>
        <v-text-field v-model="dispatchData.inspectors" label="Inspectores"></v-text-field>
        <v-text-field v-model="dispatchData.thermometer_used" label="Termometro usado"></v-text-field>
        Detalles
          Inspección realizada
        <v-checkbox v-model="dispatchData.merchandise" label="Mercadería"></v-checkbox>
        <v-checkbox v-model="dispatchData.packaging" label="Embalajes"></v-checkbox>
        <v-checkbox v-model="dispatchData.brands" label="Marcas"></v-checkbox>
        <v-text-field v-model="dispatchData.other1" label="Otro"></v-text-field>
          Sobre
        <v-checkbox v-model="dispatchData.concrete" label="Cemento"></v-checkbox>
        <v-checkbox v-model="dispatchData.gravel" label="Ripio"></v-checkbox>
        <v-checkbox v-model="dispatchData.stretcher" label="Parihuela"></v-checkbox>
        <v-text-field v-model="dispatchData.other2" label="Otro"></v-text-field>
        Inspección de unidades
        <v-text-field v-model="dispatchData.tractor_plate1" label="Placa tractor"></v-text-field>
        <v-text-field v-model="dispatchData.cart_plate1" label="Placa carreta"></v-text-field>
        <v-text-field v-model="dispatchData.precint_number" label="N° Precinto"></v-text-field>
        <v-text-field v-model="dispatchData.inspection1" label="Inspección 1 (conforme):"></v-text-field>
        <v-text-field v-model="dispatchData.inspection2" label="Inspección 2 (conforme):"></v-text-field>
        Inspección de cargas
        <v-text-field v-model="dispatchData.tractor_plate2" label="Placa tractor"></v-text-field>
        <v-text-field v-model="dispatchData.cart_plate2" label="Placa carreta"></v-text-field>
        <v-text-field v-model="dispatchData.weigth" label="Peso"></v-text-field>
        <v-text-field v-model="dispatchData.temperature_prom" label="T° Prom"></v-text-field>
        <v-text-field v-model="dispatchData.observations" label="Observaciones"></v-text-field>
        <v-text-field v-model="dispatchData.endDate" label="Fecha de fin"></v-text-field>
        <v-text-field v-model="dispatchData.endHour" label="Hora de fin"></v-text-field>
        <!-- ... other fields ... -->
        <v-btn @click="submitData" color=success>Subir Datos</v-btn>
        <v-btn @click="resetForm" color=error>Cancelar/Volver</v-btn>
      </v-form>
    </v-container>
  </template>
  
  <script setup>
  import { ref, reactive } from 'vue';
  import axios from 'axios';
  
  const dispatchData = reactive({
    startDate: new Date(),
    startHour:'',
    oi:'',
    client_RUC:'',
    producer:'',
    customs_agent:'',
    locality:'',
    boarding_port:'',
    ship:'',
    TM:'',
    instructive:'',
    inspectors:'',
    thermometer_used:'',
    merchandise:'',
    packaging:'',
    brands:'',
    other1:'',
    concrete:'',
    gravel:'',
    stretcher:'',
    other2:'',
    endDate: new Date(),
    endHour:'',
    // ... other fields ...
    details:'',
    inspection_r:'',
    over:'',
     // ... other fields ...
    tractor_plate1:'',
    cart_plate1:'',
    precint_number:'',
    inspection1:'',
    inspection2:'',
    units_inspection:{
      tractor_plate1:'',
      cart_plate1:'',
      precint_number:'',
      inspection1:'',
      inspection2:'',
    },
    tractor_plate2:'',
    cart_plate2:'',
    weigth:0,
    temperature_prom:'',
    observations:'',
    charges_inspection:{
      tractor_plate2:'',
      cart_plate2:'',
      weigth:0,
      temperature_prom:'',
      observations:'',
    },
  });
  
  const submitData = async () => {
      try {
        const response=await axios.post('http://127.0.0.1/api/v1/service/your-endpoint', dispatchData);
        console.log(response.data);
        // Handle success response
      } catch (error) {
        console.error(error);
        // Handle error
      }
    
  };
  
  const resetForm = () => {
    dispatchData.startDate=new Date(),
    dispatchData.startHour='',
    dispatchData.oi='',
    dispatchData.client_RUC='',
    dispatchData.producer='',
    dispatchData.customs_agent='',
    dispatchData.locality='',
    dispatchData.boarding_port='',
    dispatchData.ship='',
    dispatchData.TM='',
    dispatchData.instructive='',
    dispatchData.inspectors='',
    dispatchData.thermometer_used='',
    dispatchData.merchandise='',
    dispatchData.packaging='',
    dispatchData.brands='',
    dispatchData.other1='',
    dispatchData.concrete='',
    dispatchData.gravel='',
    dispatchData.stretcher='',
    dispatchData.other2='',
    dispatchData.endDate=new Date(),
    dispatchData.endHour='',
    // ... other fields ...
    dispatchData.details='',
    dispatchData.inspection_r='',
    dispatchData.over='',
    dispatchData.units_inspection;
    dispatchData.units_inspection.tractor_plate1='',
    dispatchData.units_inspection.cart_plate1='',
    dispatchData.units_inspection.precint_number='',
    dispatchData.units_inspection.inspection1='',
    dispatchData.units_inspection.inspection2=''
    dispatchData.charges_inspection;
    dispatchData.charges_inspection.tractor_plate2='',
    dispatchData.charges_inspection.cart_plate2='',
    dispatchData.charges_inspection.weigth=0,
    dispatchData.charges_inspection.temperature_prom='',
    dispatchData.charges_inspection.observations
    // Reset the form logic
  };
  </script>
  
  <style>
  /* Your CSS here */
  </style>