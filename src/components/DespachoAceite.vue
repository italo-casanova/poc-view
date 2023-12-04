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
       
        
        Detalles
        Inspeccion Realizada:
        <v-checkbox v-model="dispatchData.inspectionPerformedMerchandise" label="Mercaderia"></v-checkbox>
        <v-checkbox v-model="dispatchData.inspectionPerformedPacking" label="Embalajes"></v-checkbox>
        <v-checkbox v-model="dispatchData.inspectionPerformedBrand" label="Marcas"></v-checkbox>
        <v-checkbox v-model="dispatchData.inspectionPerformedOther" label="Otros"></v-checkbox>
  
        

        Inspeccion de Unidades
        <v-text-field v-model="dispatchData.unitInspection.tractorPlate" label="Placa tractor" required></v-text-field>
        <v-text-field v-model="dispatchData.unitInspection.cartPlate" label="Placa carreta" required></v-text-field>
        <v-text-field v-model="dispatchData.unitInspection.allegedNumber" label="Nº presinto" required></v-text-field>
        <v-text-field v-model="dispatchData.unitInspection.inspection1" label="Inspeccion 1 (conforme)" required></v-text-field>
        <v-text-field v-model="dispatchData.unitInspection.inspection2" label="Inspeccion 2 (conforme)" required></v-text-field>
        
       
        Inspeccion de Cargas
        <v-text-field v-model="dispatchData.cargoInspection.tractorPlate" label="Placa tractor" required></v-text-field>
        <v-text-field v-model="dispatchData.cargoInspection.cartPlate" label="Placa carreta" required></v-text-field>
        <v-text-field v-model="dispatchData.cargoInspection.weight" label="Peso" required></v-text-field>
        <v-text-field v-model="dispatchData.cargoInspection.observation" label="Observaciones" required></v-text-field>
  
        <v-text-field v-model="dispatchData.endDate" label="Fecha de fin" required></v-text-field>
        <v-text-field v-model="dispatchData.endTime" label="Hora de fin" required></v-text-field>
  
        
        <v-btn @click="submitData" color="success">Subir Datos</v-btn>
        &nbsp;
        <v-btn @click="resetForm" color="error">Cancelar/Volver</v-btn>
      </v-form>
    </v-container>
  </template>
  
  <script setup>
  import { ref, reactive } from 'vue';
  import axios from 'axios';
  
  const dispatchData = reactive({
    startDate: new Date(),
    startTime: new Time(),
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
    
   
 
    inspectionPerformedMerchandise:'',
    inspectionPerformedPacking:'',
    inspectionPerformedBrand:'',
    inspectionPerformedOther:'',

  
    unitInspection: {
      tractorPlate: '',
      cartPlate:'',
      allegedNumber: '',
      inspection1:'',
      inspection2: '',
      
    },
    cargoInspection: {
      tractorPlate: '',
      cartPlate:'',
      weight: 0,
      observation: '',
      
    },
    endDate: new Date(),
    endTime: new Time(),
  });
  
  
  
  
  
  
  const submitData = async () => {
      try {
        const response=await axios.post('http://127.0.0.1/api/v1/service/your-endpoint', dispatchData);
        console.log(response.data);
        
      } catch (error) {
        console.error(error);
        
      }
    
  };
  
  const resetForm = () => {
   dispatchData.startDate=new Date();
   dispatchData.startTime= new Time();
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
  

   dispatchData.inspectionPerformed= '';
  
  
   dispatchData.unitInspection.tractorPlate= '';
   dispatchData.unitInspection.cartPlate= '';
   dispatchData.unitInspection.allegedNumber= '';
   dispatchData.unitInspection.inspection1= '';
   dispatchData.unitInspection.inspection2= '';
  
 
   dispatchData.cargoInspection.tractorPlate= '';
   dispatchData.cargoInspection.cartPlate= '';
   dispatchData.cargoInspection.weight=0 ;
   dispatchData.cargoInspection.observation= '';
  
   dispatchData.endDate=new Date();
   dispatchData.endTime=new Time();
  
  
  
  
  };
  </script>
  
  <style>
  
  </style>