<template>
    <v-container>
      <v-form ref="star">
        <div class="titulo-despacho">
          DESPACHO DE ACEITE DE PESCADO
        </div>
        <v-text-field class="v-container" v-model="dispatchData.startDate" label="Fecha de inicio" required></v-text-field>
        <v-text-field class="v-container" v-model="dispatchData.startTime" label="Hora de inicio" required></v-text-field>
        <v-text-field class="v-container" v-model="dispatchData.inspeccionOrder" label="OI" required></v-text-field>
        <v-text-field class="v-container" v-model="dispatchData.customerRUC" label="RUC Cliente" required></v-text-field>
        <v-text-field class="v-container" v-model="dispatchData.producer" label="Productor" required></v-text-field>
        <v-text-field class="v-container" v-model="dispatchData.customsAgent" label="Ag. Aduana" required></v-text-field>
        <v-text-field class="v-container" v-model="dispatchData.location" label="Localidad" required></v-text-field>
        <v-text-field class="v-container" v-model="dispatchData.embarkationPort" label="Puerto Embarque" required></v-text-field>
        <v-text-field class="v-container" v-model="dispatchData.ship" label="Nave" required></v-text-field>
        <v-text-field class="v-container" v-model="dispatchData.merchandiseWeight" label="TM" required></v-text-field>
        <v-text-field class="v-container" v-model="dispatchData.instruction" label="Instructivo" required></v-text-field>
        <v-text-field class="v-container" v-model="dispatchData.inspector" label="Inspector" required></v-text-field>
        <v-text-field class="v-container" v-model="dispatchData.usedThermometer" label="Termometro Usado" required></v-text-field>

        <div class="inspection-section">
          Detalles
        </div>
        <div class="v-text-field">
          Inspeccion Realizada:
        </div>
        <v-checkbox class="v-checkbox" v-model="dispatchData.inspectionPerformedMerchandise" label="Mercaderia"></v-checkbox>
        <v-checkbox class="v-checkbox" v-model="dispatchData.inspectionPerformedPacking" label="Embalajes"></v-checkbox>
        <v-checkbox class="v-checkbox" v-model="dispatchData.inspectionPerformedBrand" label="Marcas"></v-checkbox>
        <v-checkbox class="v-checkbox" v-model="dispatchData.inspectionPerformedOther" label="Otros"></v-checkbox>


        <div class="v-text-field">
          Inspeccion de Unidades
        </div>
        <div v-for="(unit, index) in dispatchData.unitInspections" :key="index">
        <v-text-field class="v-label" v-model="unit.tractorPlate" label="Placa tractor" required></v-text-field>
        <v-text-field class="v-label" v-model="unit.cartPlate" label="Placa carreta" required></v-text-field>
        <v-text-field class="v-label" v-model="unit.allegedNumber" label="Nº presinto" required></v-text-field>
        <v-text-field class="v-label" v-model="unit.inspection1" label="Inspeccion 1 (conforme)" required></v-text-field>
        <v-text-field class="v-label" v-model="unit.inspection2" label="Inspeccion 2 (conforme)" required></v-text-field>
        </div>
        <!-- Botón para añadir otra unidad -->
       
        <v-btn class="v-btn" fab color="orange darken-2" @click="addUnit">
        <v-icon>mdi-plus</v-icon>
        </v-btn><br><br>

        <div class="v-text-field">
          Inspeccion de Cargas
        </div>
        <div v-for="(cargo, index) in dispatchData.cargoInspections" :key="index">
          <v-text-field class="v-label" v-model="cargo.tractorPlate" label="Placa tractor" required></v-text-field>
          <v-text-field class="v-label" v-model="cargo.cartPlate" label="Placa carreta" required></v-text-field>
          <v-text-field class="v-label" v-model="cargo.weight" label="Peso" required></v-text-field>
          <v-text-field class="v-label" v-model="cargo.observation" label="Observaciones" required></v-text-field>
        </div> 

        
        <!-- Botón para añadir otra unidad -->
        <v-btn class="v-btn" fab color="orange darken-2" @click="addCargo">
        <v-icon>mdi-plus</v-icon>
        </v-btn><br><br>

        <v-text-field class="v-container" v-model="dispatchData.endDate" label="Fecha de fin" required></v-text-field>
        <v-text-field class="v-container" v-model="dispatchData.endTime" label="Hora de fin" required></v-text-field>


        <v-btn @click="submitData" color="success">Subir Datos</v-btn>
        &nbsp;
        <v-btn @click="resetForm" color="error">Cancelar/Volver</v-btn>
      </v-form>
    </v-container>
  </template>

  <script setup>
  import { ref, reactive } from 'vue';
  import axios from 'axios';

  // axios.defaults.withCredentials = true;


  const dispatchData = reactive({
    startDate: new Date(),
    startTime: new Date(),
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


    unitInspections: [],

    cargoInspections:[],

    endDate: new Date(),
    endTime: new Date(),
  });


  const addUnit = () => {
    dispatchData.unitInspections.push({
      tractorPlate: '',
      cartPlate: '',
      allegedNumber: '',
      inspection1: '',
      inspection2: '',
    });
  };

  const addCargo = () => {
    dispatchData.cargoInspections.push({
      tractorPlate: '',
      cartPlate: '',
      weight: 0,
      observation:'',
    });
  };


  const submitData = async () => {
      try {
        const response=await axios.post('http://127.0.0.1:8080/api/v1/inspections/create', dispatchData);
        console.log(response.data);

      } catch (error) {
        console.error(error);

      }

  };

  const resetForm = () => {
   dispatchData.startDate=new Date();
   dispatchData.startTime= new Date();
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


   dispatchData.unitInspections = [{
    tractorPlate: '',
    cartPlate: '',
    allegedNumber: '',
    inspection1: '',
    inspection2: '',
  }];

  dispatchData.cargoInspections = [{
    tractorPlate: '',
    cartPlate: '',
    weight: 0,
    observation:'',
  }];


   dispatchData.endDate=new Date();

  };
  </script>

<style scoped>
/* Estilos generales del contenedor y la tipografía */
.v-container {
  font-family: 'Segoe UI', sans-serif; /* Cambia por la familia de fuentes que prefieras */
  color: #333;
}

/* Estilización del título */
.titulo-despacho {
  font-size: 24px; /* Cambia el tamaño de fuente como necesites */
  font-weight: bold;
  color: #d35400; /* Cambia el color de fuente como necesites */
  margin-bottom: 20px; /* Espacio debajo del título */
  text-align: center; /* Centrar el título */
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
</style>

