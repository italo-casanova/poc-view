<template>
  <v-container>
    <v-form ref="form">
      <div class="titulo-despacho">
          INSPECCIÓN Y MUESTREO DE SUPERFICIES INERTES/VIVAS
        </div>
      <v-text-field class="v-container" v-model="formData.startDate" label="Fecha de Inicio"></v-text-field>
      <v-text-field class="v-container" v-model="formData.startTime" label="Hora de Inicio"></v-text-field>
      <v-text-field class="v-container" v-model="formData.oi" label="OI"></v-text-field>
      <v-text-field class="v-container" v-model="formData.aplicantsruc" label="RUC Solicitante"></v-text-field>
      <v-text-field class="v-container" v-model="formData.producer" label="Productor"></v-text-field>
      <v-text-field class="v-container" v-model="formData.amount" label="Cantidad"></v-text-field>
      <v-text-field class="v-container" v-model="formData.declaredweight" label="Peso (declarado)"></v-text-field>
      <v-text-field class="v-container" v-model="formData.address" label="Direccion"></v-text-field>
      <div class="v-text-field">
        Normas utilizadas
        </div>
      
      <v-checkbox class="v-checkbox" v-model="formData.usednorm_ntp" label="NTP ISO 2859-1"></v-checkbox>
      <v-checkbox class="v-checkbox" v-model="formData.usednorm_other" label="Otros"></v-checkbox>
      <div class="v-text-field">
        Instrumentos
        </div>
      <v-checkbox class="v-checkbox" v-model="formData.instruments_thermometer" label="Termometro Calibrado"></v-checkbox>
      <v-checkbox class="v-checkbox" v-model="formData.instruments_hyssop" label="Hisopos"></v-checkbox>
      
      <div class="inspection-section">
        Detalles de Muestreo
        </div>
      
      <div class="v-text-field">
        Superficies Inertes:
        </div>
        <div v-for="(superf, index) in formData.superfInspections" :key="index">
          <v-text-field class="v-label" v-model="superf.sampleDetailsinertsurfaces" label="Superficies inertes"></v-text-field>
          <v-text-field class="v-label" v-model="superf.sampleDetailsquantity" label="Cantidad"></v-text-field>
        </div>
      
       <!-- Botón para añadir otra unidad -->
       
       <v-btn class="v-btn" fab color="orange darken-2" @click="addSuperf">
        <v-icon>mdi-plus</v-icon>
        </v-btn><br><br>

      <v-text-field v-model="formData.endDate" label="Fecha de Fin"></v-text-field>
      <v-text-field v-model="formData.endTime" label="Hora de Fin"></v-text-field>
      <v-btn  @click="submitData" color="success">Subir Datos</v-btn>
      &nbsp;
      <v-btn @click="cancelForm, navegarS('Servicios')" color="error">Cancelar/Volver</v-btn>
    </v-form>
  </v-container>
</template>

<script setup>
import { ref, reactive } from 'vue';
import axios from 'axios';


const formData = reactive({
startDate: new Date,
startTime: new Date,
oi:'',
applicantsruc:0,
producer:'',
amount:0,
declaredweight:0,
address:'',
usednorm_ntp: '',
usednorm_other: '',
instruments_thermometer: '',
instruments_hyssop: '',
superfInspections: [],
end_date: new Date,
end_time:  new Date,
});

const submitData = async () => {
 
    try {
      await axios.post('http://127.0.0.1/api/v1/service', formData);
      // Handle success
    } catch (error) {
      // Handle error
    }
  
};
const addSuperf = () => {
    formData.superfInspections.push({
      sampleDetails_inertsurfaces: '',
      sampleDetails_quantity: '',
    });
  };

const resetData = () => {
formData.startDate =  new Date;
formData.startTime =  new Date;
formData.oi= '';
formData.aplicantsruc=0;
formData.producer='';
formData.amount=0;
formData.declaredweight=0;
formData.address='';
formData.usednorm_ntp='';
formData.usednorm_other='';
formData.instruments_thermometer='';
formData.instruments_hyssop='';
formData.endDate= new Date;
formData.endTime= new Date;
formData.superfInspections = [{
  sampleDetails_inertsurfaces: '',
  sampleDetails_quantity:'',
  }];
};



const cancelForm = () => {
  // Reset form or handle the cancel action
};

import { useRouter } from 'vue-router'

const router = useRouter();
// Función para navegar a una vista determinada por su nombre de ruta
const navegarS = (Servicios) => {
router.push({ name: Servicios });
};
</script>
<style scoped>
 .v-container {
    font-family: 'Segoe UI', sans-serif; /* Cambia por la familia de fuentes que prefieras */
    color: #333;
  }
  
  /* Estilos para los botones */
  .v-btn {
    background-color: #d35400; /* Un tono naranja, por ejemplo */
    color: white;
  }
  
  /* Estilos adicionales para la sección de inspección */
  .inspection-section {
    font-size: 20px;
    font-weight: bold;
    margin-top: 20px; /* Espacio arriba */
    padding-top: 10px; /* Espacio interior en la parte superior */
    border-top: 2px solid #d35400; /* Borde superior con un color a juego */
  }
  
  /* Estilos para los campos de texto */
  .v-text-field .v-label {
    color: #333; /* Color de la etiqueta del campo de texto */
  }
  
  /* Estilos para los checkboxes */
  .v-checkbox {
    margin-bottom: 10px; /* Espacio debajo del checkbox */
  }
   .titulo-despacho {
    font-size: 24px; /* Cambia el tamaño de fuente como necesites */
    font-weight: bold;
    color: #d35400; /* Cambia el color de fuente como necesites */
    margin-bottom: 20px; /* Espacio debajo del título */
    text-align: center; /* Centrar el título */
  }
  </style>