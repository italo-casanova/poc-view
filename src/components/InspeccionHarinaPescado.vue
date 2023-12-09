<template>
    <v-container>
      <v-form ref="form">
        <div class="titulo-despacho">
          INSPECCIÓN Y MUESTREO DE HARINA DE PESCADO
        </div>
        <v-text-field class="v-container" v-model="formFields.startDate" label="Fecha de Inicio"></v-text-field>
        <v-text-field class="v-container" v-model="formFields.startTime" label="Hora de Inicio"></v-text-field>
        <v-text-field class="v-container" v-model="formFields.requester" label="Solicitante"></v-text-field>
        <v-text-field class="v-container" v-model="formFields.applicants_code" label="Ruc del solicitante"></v-text-field>
        <v-text-field class="v-container" v-model="formFields.address" label="Dirección"></v-text-field>
        <v-text-field class="v-container" v-model="formFields.oi" label="OI"></v-text-field>
        <div class="v-text-field">
          Inspectores:
        </div>
        <div v-for="(inspector, index) in formFields.inspector" :key="index">
        <v-text-field class="v-container" v-model="formFields.inspector[index]" label="Código de inspector(es)" required></v-text-field>
        </div>
        <v-btn class="v-btn" fab color="orange darken-2" @click="addInspector">
        <v-icon>mdi-plus</v-icon>
        </v-btn><br><br>

        <div class="inspection-section">
          Detalle de la inspección
        </div>
        
        <div class="v-text-field">
          Mercaderia:
        </div>
        <v-text-field class="v-container" v-model="formFields.amount" label="Cantidad"></v-text-field>
        <v-text-field class="v-container" v-model="formFields.weight_declared" label="Peso declarado (TM)"></v-text-field>
        <v-select class="v-container" v-model="formFields.storage3" :items="zonaOptions" label="Zona de almacenamiento"></v-select>
        <v-select class="v-container" v-model="formFields.storage4" :items="proteccionOptions" label="Proteccion para almacenamiento"></v-select>
        <v-select class="v-container" v-model="formFields.storage5" :items="superficieOptions" label="Superficie para almacenamiento"></v-select>
        <v-select class="v-container" v-model="formFields.storage6" :items="embalajeOptions" label="Embalajes/Envases"></v-select>
        <v-text-field class="v-container" v-model="formFields.used_thermometer" label="Termómetro empleado"></v-text-field>

        <div class="v-text-field">
          Inspección realizada:
        </div>
        <v-checkbox class="v-checkbox" v-model="formFields.inspectionType1" label="Inspección Visual de Mercadería" ></v-checkbox>
        <v-checkbox class="v-checkbox" v-model="formFields.inspectionType2" label="Inspección Embalaje y Marcas" ></v-checkbox>
        <v-checkbox class="v-checkbox" v-model="formFields.inspectionType3" label="Muestreo" ></v-checkbox>
        <v-checkbox class="v-checkbox" v-model="formFields.inspectionType4" label="Control de Peso" ></v-checkbox>
        <v-checkbox class="v-checkbox" v-model="formFields.inspectionType5" label="Cantidad" ></v-checkbox>
        <v-checkbox class="v-checkbox" v-model="formFields.inspectionType6" label="Supervision de Embarque de Contenedores" ></v-checkbox>
        <v-checkbox class="v-checkbox" v-model="formFields.inspectionType7" label="Supervision de Descarga de Contenedores" ></v-checkbox>
        <v-checkbox class="v-checkbox" v-model="formFields.inspectionType8" label="Inspección de Lineas de Carga/Descarga" ></v-checkbox>
        <v-checkbox class="v-checkbox" v-model="formFields.inspectionType9" label="Inspección de Tanques/Cisternas"></v-checkbox>
        <v-checkbox class="v-checkbox" v-model="formFields.inspectionType10" label="Supervision AFORO" ></v-checkbox>
        <v-checkbox class="v-checkbox" v-model="formFields.inspectionType11" label="Precintado" ></v-checkbox>
        <v-checkbox class="v-checkbox" v-model="formFields.inspectionType12" label="Temperatura" ></v-checkbox>
        <v-checkbox class="v-checkbox" v-model="formFields.inspectionType13" label="Otros" ></v-checkbox>

        <v-select class="v-container" v-model="formFields.storage1" :items="normativaOptions" label="Normativas, procedimientos e instructivos"></v-select>

        <v-text-field class="v-container" v-model="formFields.s_n_f_physic" label="N° muestras para fisicoquímico"></v-text-field>
        <v-text-field class="v-container" v-model="formFields.s_n_f_microbiologic" label="N° muestras para microbiológica"></v-text-field>

        <v-text-field class="v-container" v-model="formFields.end_date" label="Fecha de fin"></v-text-field>
        <v-text-field class="v-container" v-model="formFields.end_time" label="Hora de fin"></v-text-field>
        <v-btn @click="submitData" color=success>Subir</v-btn>
        &nbsp;
        <v-btn @click="resetForm, navegarS('Servicios')" color="error">Cancelar/Volver</v-btn>
      </v-form>
    </v-container>
  </template>
  
  <script setup>
  import { ref, reactive, toRefs } from 'vue';
  import axios from 'axios';
  
  const normativaOptions = ["ISO 5555", "FOSFA", "INS-P-H&N.237", "INS-I-H&N.183", "Otras"];
  const embalajeOptions = ["Flexitanks", "Ecobulks", "Cilindro", "Isotanks", "Otros"];
  const superficieOptions = ["Cemento", "Tierra", "Parihuela", "Otras"];
  const proteccionOptions = ["A la intemperie", "Bajo techo", "Otras"];
  const zonaOptions = ["Seca", "Limpia", "Húmeda", "Sucia"];

  const formFields = reactive({
    startDate: new Date(),
    startTime: new Date(),
    requester: '',
    applicants_code:'',
    address:'',
    oi:'',
    inspector: [],
    inspectors_code:'',
    inspectionType1:'',
    inspectionType2:'',
    inspectionType3:'',
    inspectionType4:'',
    inspectionType5:'',
    inspectionType6:'',
    inspectionType7:'',
    inspectionType8:'',
    inspectionType9:'',
    inspectionType10:'',
    inspectionType11:'',
    inspectionType12:'',
    inspectionType13:'',
    storage1: '',
    storage3: '',
    storage4: '',
    storage5: '',
    storage6: '',
    amount:0,
    weight_declared:0,
    used_thermometer:'',
    inspection_made:'',
    s_n_f_physic:0,
    s_n_f_microbiologic:0,
    end_date:new Date(),
    end_time:new Date(),
  });
  const addInspector = () => {
  formFields.inspector.push(''); // o push({ name: '' }) si es un objeto
};
  
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
    formFields.startTime = new Date();
    formFields.requester= '';
    formFields.applicants_code='';
    formFields.address='';
    formFields.oi='';
    formFields.inspector = [{
    inspector: '',
    }];
    formFields.inspectors_code='';
    formFields.inspectionType1="";
    formFields.inspectionType2="";
    formFields.inspectionType3="";
    formFields.inspectionType4="";
    formFields.inspectionType5="";
    formFields.inspectionType6="";
    formFields.inspectionType7="";
    formFields.inspectionType8="";
    formFields.inspectionType9="";
    formFields.inspectionType10="";
    formFields.inspectionType11="";
    formFields.inspectionType12="";
    formFields.inspectionType13="";
    formFields.amount=0;
    formFields.weight_declared=0;
    formFields.storage3="";
    formFields.storage4="";
    formFields.storage5="";
    formFields.storage6="";
    formFields.used_thermometer='';
    formFields.inspection_made='';
    formFields.storage1="";
    formFields.s_n_f_physic=0;
    formFields.s_n_f_microbiologic=0;
    formFields.end_date=new Date();
    formFields.end_time=new Date();
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