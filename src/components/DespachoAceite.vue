<template>
    <v-container>
      <v-form ref="star">
        <v-text-field v-model="dispatchData.startDate" label="Fecha de inicio" required></v-text-field>
        <v-text-field v-model="dispatchData.startTime" label="Hora de inicio" required></v-text-field>
        <v-text-field v-model="dispatchData.inspeccionOrder" label="OI" required></v-text-field>
        <v-text-field v-model="dispatchData.customerRUC" label="RUC Cliente" required></v-text-field>
        <v-text-field v-model="dispatchData.producer" label="Productor" required></v-text-field>
        <v-text-field v-model="dispatchData.customsAgent" label="Ag. Aduana" required></v-text-field>
        <v-text-field v-model="dispatchData.location" label="Localidad" required></v-text-field>
        <v-text-field v-model="dispatchData.embarkationPort" label="Puerto Embarque" required></v-text-field>
        <v-text-field v-model="dispatchData.ship" label="Nave" required></v-text-field>
        <v-text-field v-model="dispatchData.merchandiseWeight" label="TM" required></v-text-field>
        <v-text-field v-model="dispatchData.instruction" label="Instructivo" required></v-text-field>
        <v-text-field v-model="dispatchData.inspector" label="Inspector" required></v-text-field>
        <v-text-field v-model="dispatchData.usedThermometer" label="Termometro Usado" required></v-text-field>
       
        <!-- ... other fields similar to the ones for 'startDate' ... -->
        <v-textarea v-model="dispatchData.details" label="Detalles" required></v-textarea>
        <v-textarea v-model="dispatchData.inspection" label="Inspeccion realizada" required></v-textarea>
        <v-checkbox v-model="dispatchData.inspectionPerformed" label="Mercaderia" required></v-checkbox>
        <v-checkbox v-model="dispatchData.inspectionPerformed" label="Embalajes" required></v-checkbox>
        <v-checkbox v-model="dispatchData.inspectionPerformed" label="Marcas" required></v-checkbox>
        <v-checkbox v-model="dispatchData.inspectionPerformed" label="Otros" required></v-checkbox>
  
        <v-textarea v-model="dispatchData.unitInspection" label="Inspeccion de unidades" required></v-textarea>
        <v-text-field v-model="dispatchData.unitInspection.tractorPlate" label="Placa tractor" required></v-text-field>
        <v-text-field v-model="dispatchData.unitInspection.cartPlate" label="Placa carreta" required></v-text-field>
        <v-text-field v-model="dispatchData.unitInspection.allegedNumber" label="Nº presinto" required></v-text-field>
        <v-text-field v-model="dispatchData.unitInspection.inspection1" label="Inspeccion 1 (conforme)" required></v-text-field>
        <v-text-field v-model="dispatchData.unitInspection.inspection2" label="Inspeccion 2 (conforme)" required></v-text-field>
        
        <!-- ... additional unit inspection fields ... -->
        <v-textarea v-model="dispatchData.cargoInspection" label="Inspeccion de cargas" required></v-textarea>
        <v-text-field v-model="dispatchData.cargoInspection.tractorPlate" label="Placa tractor" required></v-text-field>
        <v-text-field v-model="dispatchData.cargoInspection.cartPlate" label="Placa carreta" required></v-text-field>
        <v-text-field v-model="dispatchData.cargoInspection.weight" label="Peso" required></v-text-field>
        <v-text-field v-model="dispatchData.cargoInspection.observation" label="Observaciones" required></v-text-field>
  
        <v-text-field v-model="dispatchData.endDate" label="Fecha de fin" required></v-text-field>
        <v-text-field v-model="dispatchData.endTime" label="Hora de fin" required></v-text-field>
  
        <!-- ... additional cargo inspection fields ... -->
        <v-btn @click="resetForm" color="error">Cancelar/Volver</v-btn>
      </v-form>
    </v-container>
  </template>
  
  <script setup>
  import { ref, reactive } from 'vue';
  import axios from 'axios';
  
  const dispatchData = reactive({
    startDate: new Date(),
    startTime: '',
    inspeccionOrder: '',
    customerRUC: '',
    producer: '',
    customsAgent: '',
    location: '',
    embarkationPort: '',
    ship: '',
    merchandiseWeight: 0,
    instruction: '',
    inspector: '',
    usedThermometer: '',
    
    // ... other form fields ...
    details: '',
    inspection:'',
    inspectionPerformed:'',
  
    unitInspection: {
      tractorPlate: '',
      cartPlate:'',
      allegedNumber: '',
      inspection1:'',
      inspection2: '',
      // ... additional unit inspection fields ...
    },
    cargoInspection: {
      tractorPlate: '',
      cartPlate:'',
      weight: 0,
      observation: '',
      // ... additional cargo inspection fields ...
    },
    endDate: new Date(),
    endTime: '',
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
   dispatchData.startDate=new Date();
   dispatchData.startTime= '';
   dispatchData.inspeccionOrder='';
   dispatchData.customerRUC='';
   dispatchData.producer='';
   dispatchData.customsAgent= '';
   dispatchData.location= '';
   dispatchData.embarkationPort= '';
   dispatchData.ship= '';
   dispatchData.merchandiseWeight= 0;
   dispatchData.instruction= '';
   dispatchData.inspector= '';
   dispatchData.usedThermometer= '';
  
   dispatchData.details= '';
   dispatchData.inspection= '';
   dispatchData.inspectionPerformed= '';
  
   dispatchData.unitInspection;
   dispatchData.unitInspection.tractorPlate= '';
   dispatchData.unitInspection.cartPlate= '';
   dispatchData.unitInspection.allegedNumber= '';
   dispatchData.unitInspection.inspection1= '';
   dispatchData.unitInspection.inspection2= '';
  
   dispatchData.cargoInspection
   dispatchData.cargoInspection.tractorPlate= '';
   dispatchData.cargoInspection.cartPlate= '';
   dispatchData.cargoInspection.weight=0 ;
   dispatchData.cargoInspection.observation= '';
  
   dispatchData.endDate=new Date();
   dispatchData.endTime='';
  
  
  
  
  };
  </script>
  
  <style>
  /* Your CSS here */
  </style>