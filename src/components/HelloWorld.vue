<template>
  <v-container>
    <v-form ref="form">
      <v-text-field v-model="formData.startDate" label="Fecha de Inicio"></v-text-field>
      <v-text-field v-model="formData.startTime" label="Hora de Inicio"></v-text-field>
      <v-text-field v-model="formData.startTime" label="Hora de Inicio"></v-text-field>
      <v-text-field v-model="formData.inspectionType" label="RUC Solicitante" value="visualInspection"></v-text-field>
      <v-text-field v-model="formData.inspectionType" label="Productor" value="visualInspection"></v-text-field>
      <v-text-field v-model="formData.inspectionType" label="Cantidad" value="visualInspection"></v-text-field>
      <v-text-field v-model="formData.inspectionType" label="Peso" value="visualInspection"></v-text-field>
      <v-text-field v-model="formData.inspectionType" label="Direccion" value="visualInspection"></v-text-field>
      <v-select v-model="formData.storage" :items="storageOptions" label="Inspeccion Realizada"></v-select>
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
      <v-select v-model="formData.storage"
        :items="storageOptions" label="Normativas, procedimientos e instructivos"></v-select>
      <v-checkbox v-model="formData.inspectionType" label="ISO 5555" value="visualInspection"></v-checkbox>
      <v-checkbox v-model="formData.inspectionType" label="FOSFA" value="visualInspection"></v-checkbox>
      <v-checkbox v-model="formData.inspectionType" label="INS-P-H&N.237" value="visualInspection"></v-checkbox>
      <v-checkbox v-model="formData.inspectionType" label="INS-P-H&N.237" value="visualInspection"></v-checkbox>
      <v-checkbox v-model="formData.inspectionType" label="INS-I-H&N.183" value="visualInspection"></v-checkbox>
      <v-checkbox v-model="formData.inspectionType" label="Otras normas" value="visualInspection"></v-checkbox>
      <v-select v-model="formData.storage" :items="storageOptions" label="Equipos utilizados"></v-select>
      <v-checkbox v-model="formData.inspectionType" label="Codigo de Wincha" value="visualInspection"></v-checkbox>
      <v-checkbox v-model="formData.inspectionType" label="Codigo de Termometro" value="visualInspection"></v-checkbox>
      <v-select v-model="formData.storage" :items="storageOptions" label="Tipo de envase para muestra"></v-select>
      <v-checkbox v-model="formData.inspectionType" label="PET 500 ml" value="visualInspection"></v-checkbox>
      <v-checkbox v-model="formData.inspectionType" label="Vidrio 500 ml" value="visualInspection"></v-checkbox>
      <v-checkbox v-model="formData.inspectionType" label="PET 250 ml" value="visualInspection"></v-checkbox>
      <v-checkbox v-model="formData.inspectionType" label="Vidrio 250 ml" value="visualInspection"></v-checkbox>
      <v-checkbox v-model="formData.inspectionType" label="Otros tipos" value="visualInspection"></v-checkbox>
      <v-select v-model="formData.storage" :items="storageOptions" label="Zona de almacenamiento"></v-select>
      <v-checkbox v-model="formData.inspectionType" label="Seca" value="visualInspection"></v-checkbox>
      <v-checkbox v-model="formData.inspectionType" label="Limpia" value="visualInspection"></v-checkbox>
      <v-checkbox v-model="formData.inspectionType" label="Humeda" value="visualInspection"></v-checkbox>
      <v-checkbox v-model="formData.inspectionType" label="Sucia" value="visualInspection"></v-checkbox>
      <v-select v-model="formData.storage" :items="storageOptions" label="Proteccion para almacenamiento"></v-select>
      <v-checkbox v-model="formData.inspectionType" label="A la intemperie" value="visualInspection"></v-checkbox>
      <v-checkbox v-model="formData.inspectionType" label="Bajo techo" value="visualInspection"></v-checkbox>
      <v-checkbox v-model="formData.inspectionType" label="Otra proteccion" value="visualInspection"></v-checkbox>
      <v-select v-model="formData.storage" :items="storageOptions" label="Superficie para almacenamiento"></v-select>
      <v-checkbox v-model="formData.inspectionType" label="Cemento" value="visualInspection"></v-checkbox>
      <v-checkbox v-model="formData.inspectionType" label="Tierra" value="visualInspection"></v-checkbox>
      <v-checkbox v-model="formData.inspectionType" label="Parihuela" value="visualInspection"></v-checkbox>
      <v-checkbox v-model="formData.inspectionType" label="Otra superficie" value="visualInspection"></v-checkbox>
      <v-select v-model="formData.storage"
        :items="embalajeOptions" label="Embalajes/Envases"></v-select>
      <v-checkbox v-model="formData.inspectionType" label="Otros embalajes" value="visualInspection"></v-checkbox>
      <v-text-field v-model="formData.startDate" label="Fecha de Fin"></v-text-field>
      <v-text-field v-model="formData.startDate" label="Hora de Fin"></v-text-field>
      <v-btn  @click="submitData">Subir Datos</v-btn>
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
  // ... additional fields ...
  inspectionType: [],
  storage: '',
});



const storageOptions = ['Seca', 'Húmeda', 'Bajo techo', 'A la intemperie'];
const embalajeOptions = ["Flexitanks", "Ecobulks", "Cilindro", "Isotanks", "otros"];
const submitData = async (values) => {
  try {
    const response = await axios.post('http://127.0.0.1/api/v1/service', values);
    console.log(response.data);
    // Handle your response here
  } catch (error) {
    console.error(error);
    // Handle your error here
  }
}

const cancelForm = () => {
  // Reset the formData here or handle cancel action
};


</script>
