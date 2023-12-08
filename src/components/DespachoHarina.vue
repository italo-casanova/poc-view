<template>
    <v-container>
      <v-form ref="form">
        <div class="titulo-despacho">
          DESPACHO DE HARINA DE PESCADO
        </div>
        <v-text-field class="v-container" v-model="dispatchData.startDate" label="Fecha de inicio"></v-text-field>
        <v-text-field class="v-container" v-model="dispatchData.startHour" label="Hora de inicio"></v-text-field>
        <v-text-field class="v-container" v-model="dispatchData.oi" label="OI"></v-text-field>
        <v-text-field class="v-container" v-model="dispatchData.client_RUC" label="RUC cliente"></v-text-field>
        <v-text-field class="v-container" v-model="dispatchData.producer" label="Productor"></v-text-field>
        <v-text-field class="v-container" v-model="dispatchData.customs_agent" label="Ag.Aduana"></v-text-field>
        <v-text-field class="v-container" v-model="dispatchData.locality" label="Localidad"></v-text-field>
        <v-text-field class="v-container" v-model="dispatchData.boarding_port" label="Puerto Embarque"></v-text-field>
        <v-text-field class="v-container" v-model="dispatchData.ship" label="Nave"></v-text-field>
        <v-text-field class="v-container" v-model="dispatchData.TM" label="TM"></v-text-field>
        <v-text-field class="v-container" v-model="dispatchData.instructive" label="Instructivo"></v-text-field>
        <div class="v-text-field">
          Inspectores:
        </div>
        <div v-for="(inspectors, index) in dispatchData.inspectors" :key="index">
        <v-text-field class="v-container" v-model="dispatchData.inspectors[index]" label="Inspector"></v-text-field>
        </div>
        <v-btn class="v-btn" fab color="orange darken-2" @click="addInspectors">
        <v-icon>mdi-plus</v-icon>
        </v-btn><br><br>


        <v-text-field class="v-container" v-model="dispatchData.thermometer_used" label="Termometro usado"></v-text-field>

        <div class="inspection-section">
          Detalles
        </div>
      
        <div class="v-text-field">
          Inspeccion Realizada:
        </div>
        <v-checkbox class="v-checkbox" v-model="dispatchData.merchandise" label="Mercadería"></v-checkbox>
        <v-checkbox class="v-checkbox" v-model="dispatchData.packaging" label="Embalajes"></v-checkbox>
        <v-checkbox class="v-checkbox" v-model="dispatchData.brands" label="Marcas"></v-checkbox>
        <v-checkbox class="v-checkbox" v-model="dispatchData.other1" label="Otro"></v-checkbox>
        <div class="v-text-field">
          Sobre:
        </div>
        <v-checkbox class="v-checkbox" v-model="dispatchData.concrete" label="Cemento"></v-checkbox>
        <v-checkbox class="v-checkbox" v-model="dispatchData.gravel" label="Ripio"></v-checkbox>
        <v-checkbox class="v-checkbox" v-model="dispatchData.stretcher" label="Parihuela"></v-checkbox>
        <v-checkbox class="v-checkbox" v-model="dispatchData.other2" label="Otro"></v-checkbox>
        
        <div class="v-text-field">
          Inspeccion de Unidades
        </div>
        <div v-for="(unit, index) in dispatchData.unitInspections" :key="index">
        <v-text-field class="v-label" v-model="unit.tractor_plate1" label="Placa tractor"></v-text-field>
        <v-text-field class="v-label" v-model="unit.cart_plate1" label="Placa carreta"></v-text-field>
        <v-text-field class="v-label" v-model="unit.precint_number" label="N° Precinto"></v-text-field>
        <v-text-field class="v-label" v-model="unit.inspection1" label="Inspección 1 (conforme):"></v-text-field>
        <v-text-field class="v-label" v-model="unit.inspection2" label="Inspección 2 (conforme):"></v-text-field>
        </div>

        <v-btn class="v-btn" fab color="orange darken-2" @click="addUnit">
        <v-icon>mdi-plus</v-icon>
        </v-btn><br><br>

        <div class="v-text-field">
          Inspeccion de Cargas
        </div>
        <div v-for="(cargo, index) in dispatchData.cargoInspections" :key="index">
        <v-text-field class="v-label" v-model="cargo.tractor_plate2" label="Placa tractor"></v-text-field>
        <v-text-field class="v-label" v-model="cargo.cart_plate2" label="Placa carreta"></v-text-field>
        <v-text-field class="v-label" v-model="cargo.weigth" label="Peso"></v-text-field>
        <v-text-field class="v-label" v-model="cargo.observations" label="Observaciones"></v-text-field>
        </div> 
        
        <v-btn class="v-btn" fab color="orange darken-2" @click="addCargo">
        <v-icon>mdi-plus</v-icon>
        </v-btn><br><br>

        <v-text-field class="v-container" v-model="dispatchData.endDate" label="Fecha de fin"></v-text-field>
        <v-text-field class="v-container" v-model="dispatchData.endHour" label="Hora de fin"></v-text-field>

        <v-btn @click="submitData" color=success>Subir Datos</v-btn> 
        &nbsp;
        <v-btn @click="resetForm, navegarS('Servicios')" color="error">Cancelar/Volver</v-btn>
      </v-form>
    </v-container>
  </template>
  
  <script setup>
  import { ref, reactive } from 'vue';
  import axios from 'axios';
  
  const dispatchData = reactive({
    startDate: new Date(),
    startHour:new Date(),
    oi:'',
    client_RUC:'',
    producer:'',
    customs_agent:'',
    locality:'',
    boarding_port:'',
    ship:'',
    TM:'',
    instructive:'',
    inspectors:[],
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
    endHour:new Date(),
    unitInspections: [],

    cargoInspections:[],
   




  });

  const addInspectors = () => {
  dispatchData.inspectors.push(''); // o push({ name: '' }) si es un objeto
};
  
  const addUnit = () => {
    dispatchData.unitInspections.push({
      tractor_plate1:'',
      cart_plate1:'',
      precint_number:'',
      inspection1:'',
      inspection2:'',
    });
  };

  const addCargo = () => {
    dispatchData.cargoInspections.push({
      tractor_plate2:'',
      cart_plate2:'',
      weigth:0,
      observations:'',
    });
  };


  const submitData = async () => {
      try {
        const response=await axios.post('http://127.0.0.1/api/v1/service/your-endpoint', dispatchData);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    
  };
  
  const resetForm = () => {
    dispatchData.startDate=new Date(),
    dispatchData.startHour=new Date(),
    dispatchData.oi='',
    dispatchData.client_RUC='',
    dispatchData.producer='',
    dispatchData.customs_agent='',
    dispatchData.locality='',
    dispatchData.boarding_port='',
    dispatchData.ship='',
    dispatchData.TM='',
    dispatchData.instructive='',
    dispatchData.inspectors=[],
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
    dispatchData.endHour=new Date(),
  

    dispatchData.unitInspections = [{
      tractor_plate1:'',
      cart_plate1:'',
      precint_number:'',
      inspection1:'',
      inspection2:'',
  }];

  dispatchData.cargoInspections = [{
    tractor_plate2:'',
    cart_plate2:'',
    weigth:0,
    observations:'',
  }];



  };
  import { useRouter } from 'vue-router'

  const router = useRouter();
  // Función para navegar a una vista determinada por su nombre de ruta
  const navegarS = (Servicios) => {
  router.push({ name: Servicios });
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