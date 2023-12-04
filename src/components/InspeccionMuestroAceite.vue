<template>
    <v-container>
      <v-form ref="form">
        <v-text-field v-model="formData.startDate" label="Fecha de Inicio"></v-text-field>
        <v-text-field v-model="formData.startTime" label="Hora de Inicio"></v-text-field>
        <v-text-field v-model="formData.applicants_code" label="RUC Solicitante" value="visualInspection"></v-text-field>
        <v-text-field v-model="formData.productor" label="Productor" value="visualInspection"></v-text-field>
        <v-text-field v-model="formData.amount" label="Cantidad" value="visualInspection"></v-text-field>
        <v-text-field v-model="formData.weight" label="Peso" value="visualInspection"></v-text-field>
        <v-text-field v-model="formData.address" label="Direccion" value="visualInspection"></v-text-field>
        <v-select v-model="formData.storage" :items="storageOptions" label="Inspeccion Realizada" hide-details search-input="disabled"></v-select>
        <v-checkbox v-model="formData.inspectionType" label="Inspección Visual de Mercadería" value="visualInspection"></v-checkbox>
        <v-checkbox v-model="formData.inspectionType" label="Inspección Embalaje y Marcas" value="visualInspection"></v-checkbox>
        <v-checkbox v-model="formData.inspectionType" label="Muestreo" value="visualInspection"></v-checkbox>
        <v-checkbox v-model="formData.inspectionType" label="Control de Peso" value="visualInspection"></v-checkbox>
        <v-checkbox v-model="formData.inspectionType" label="Cantidad" value="visualInspection"></v-checkbox>
        <v-checkbox v-model="formData.inspectionType" label="Supervision de Embarque de Contenedores" value="visualInspection"></v-checkbox>
        <v-checkbox v-model="formData.inspectionType" label="Supervision de Descarga de Contenedores" value="visualInspection"></v-checkbox>
        <v-checkbox v-model="formData.inspectionType" label="Inspección de Lineas de Carga/Descarga" value="visualInspection"></v-checkbox>
        <v-checkbox v-model="formData.inspectionType" label="Inspección de Tanques/Cisternas" value="visualInspection"></v-checkbox>
        <v-checkbox v-model="formData.inspectionType" label="Supervision AFORO" value="visualInspection"></v-checkbox>
        <v-checkbox v-model="formData.inspectionType" label="Precintado" value="visualInspection"></v-checkbox>
        <v-checkbox v-model="formData.inspectionType" label="Temperatura" value="visualInspection"></v-checkbox>
        <v-checkbox v-model="formData.inspectionType" label="Otros" value="visualInspection"></v-checkbox>
        <v-select v-model="formData.storage" :items="normativaOptions" label="Normativas, procedimientos e instructivos"></v-select>
        <v-select v-model="formData.storage" :items="storageOptions" label="Equipos utilizados" hide-details search-input="disabled"></v-select>
        <v-checkbox v-model="formData.equipmentType" label="Codigo de Wincha" value="visualInspection"></v-checkbox>
        <v-checkbox v-model="formData.equipmentType" label="Codigo de Termometro" value="visualInspection"></v-checkbox>
        <v-select v-model="formData.storage" :items="envaseOptions" label="Tipo de envase para muestra"></v-select>
        <v-select v-model="formData.storage" :items="zonaOptions" label="Zona de almacenamiento"></v-select>
        <v-select v-model="formData.storage" :items="proteccionOptions" label="Proteccion para almacenamiento"></v-select>
        <v-select v-model="formData.storage" :items="superficieOptions" label="Superficie para almacenamiento"></v-select>
        <v-select v-model="formData.storage" :items="embalajeOptions" label="Embalajes/Envases"></v-select>
        <v-text-field v-model="formData.startDate" label="Fecha de Fin"></v-text-field>
        <v-text-field v-model="formData.startTime" label="Hora de Fin"></v-text-field>
        <v-btn  @click="submitData()">Subir Datos</v-btn>
        <v-btn @click="cancelForm">Cancelar/Volver</v-btn>
      </v-form>
    </v-container>
  </template>

  <script setup>
  import { ref, reactive } from 'vue';
  import axios from 'axios';

  const formData = reactive({
    startDate: '',
    startTime: '',
    applicants_code:'',
    productor:'',
    amount:'',
    weight:'',
    address:'',
    equipmentType:[],
    inspectionType: [],
    storage: '',
  });



  const storageOptions = ['Seca', 'Húmeda', 'Bajo techo', 'A la intemperie'];
  const embalajeOptions = ["Flexitanks", "Ecobulks", "Cilindro", "Isotanks", "Otros"];
  const superficieOptions = ["Cemento", "Tierra", "Parihuela", "Otras"];
  const proteccionOptions = ["A la intemperie", "Bajo techo", "Otras"];
  const zonaOptions = ["Seca", "Limpia", "Húmeda", "Sucia"];
  const envaseOptions = ["PET 500 ml", "Vidrio 500 ml", "PET 250 ml", "Vidrio 250 ml", "Otros"];
  const normativaOptions = ["ISO 5555", "FOSFA", "INS-P-H&N.237", "INS-I-H&N.183", "Otras"];


  const submitData = async (values) => {
    try {
      const response = await axios.post('http://127.0.0.1:8080/api/v1/inspection/create', values);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  const cancelForm = () => {
    formData.startDate="";
    formData.startTime="";
    formData.applicants_code="";
    formData.productor="";
    formData.amount="";
    formData.weight="";
    formData.address="";
    formData.inspectionType="";
    formData.equipmentType="";
  };


  </script>

