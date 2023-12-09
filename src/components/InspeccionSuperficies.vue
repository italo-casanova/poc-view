<template>
  <v-container>
    <v-form ref="form">
      <div class="titulo-despacho">
          INSPECCIÓN Y MUESTREO DE SUPERFICIES INERTES/VIVAS
        </div>
      <v-text-field v-model="formData.startDate" label="Fecha de Inicio"></v-text-field>
      <v-text-field v-model="formData.startTime" label="Hora de Inicio"></v-text-field>
      <v-text-field v-model="formData.oi" label="OI"></v-text-field>
      <v-text-field v-model="formData.aplicantsruc" label="RUC Solicitante"></v-text-field>
      <v-text-field v-model="formData.producer" label="Productor"></v-text-field>
      <v-text-field v-model="formData.amount" label="Cantidad"></v-text-field>
      <v-text-field v-model="formData.declaredweight" label="Peso (declarado)"></v-text-field>
      <v-text-field v-model="formData.address" label="Direccion"></v-text-field>
      Normas utilizadas
      <v-checkbox v-model="formData.usednorm_ntp" label="NTP ISO 2859-1"></v-checkbox>
      <v-checkbox v-model="formData.usednorm_other" label="Otros"></v-checkbox>
      Instrumentos
      <v-checkbox v-model="formData.instruments_thermometer" label="Termometro Calibrado"></v-checkbox>
      <v-checkbox v-model="formData.instruments_hyssop" label="Hisopos"></v-checkbox>
      Detalles de Muestreo
      <v-text-field v-model="formData.sampleDetails_inertsurfaces" label="Superficies inertes"></v-text-field>
      <v-text-field v-model="formData.sampleDetails_quantity" label="Cantidad"></v-text-field>
      <v-text-field v-model="formData.endDate" label="Fecha de Fin"></v-text-field>
      <v-text-field v-model="formData.endTime" label="Hora de Fin"></v-text-field>
      <v-btn  @click="submitData">Subir Datos</v-btn>
      &nbsp;
      <v-btn @click="cancelForm, navegarS('Servicios')" color="error">Cancelar/Volver</v-btn>
    </v-form>
  </v-container>
</template>

<script setup>
import { ref, reactive } from 'vue';
import axios from 'axios';


const formData = reactive({
startDate:"",
startTime:"",
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
sampleDetails_inertsurfaces: '',
sampleDetails_quantity:0,
end_date:"",
end_time: "",
});

const submitData = async () => {
 
    try {
      await axios.post('http://127.0.0.1/api/v1/service', formData);
      // Handle success
    } catch (error) {
      // Handle error
    }
  
};

const resetData = () => {
formData.startDate = '';
formData.startTime = '';
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
formData.sampleDetails_inertsurfaces='';
formData.sampleDetails_quantity=0;
formData.endDate='';
formData.endTime='';
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
   .titulo-despacho {
    font-size: 24px; /* Cambia el tamaño de fuente como necesites */
    font-weight: bold;
    color: #d35400; /* Cambia el color de fuente como necesites */
    margin-bottom: 20px; /* Espacio debajo del título */
    text-align: center; /* Centrar el título */
  }
  </style>