<template>
    <v-container>
      <v-form ref="form">
        <div class="titulo-despacho">
          INSPECCIÓN Y MUESTREO DE ACEITE DE PESCADO
        </div>
        <v-text-field class="v-container" v-model="formData.startDate" label="Fecha de Inicio"></v-text-field>
        <v-text-field class="v-container" v-model="formData.startTime" label="Hora de Inicio"></v-text-field>
        <v-text-field class="v-container" v-model="formData.applicants_code" label="RUC Solicitante" ></v-text-field>
        <v-text-field class="v-container" v-model="formData.productor" label="Productor" ></v-text-field>
        <v-text-field class="v-container" v-model="formData.amount" label="Cantidad" ></v-text-field>
        <v-text-field class="v-container" v-model="formData.weight" label="Peso" ></v-text-field>
        <v-text-field class="v-container" v-model="formData.address" label="Direccion" ></v-text-field>
        <div class="inspection-section">
          Detalles
        </div>
        <div class="v-text-field">
          Inspeccion Realizada:
        </div>

        <v-checkbox class="v-checkbox" v-model="formData.inspectionType1" label="Inspección Visual de Mercadería" ></v-checkbox>
        <v-checkbox class="v-checkbox" v-model="formData.inspectionType2" label="Inspección Embalaje y Marcas" ></v-checkbox>
        <v-checkbox class="v-checkbox" v-model="formData.inspectionType3" label="Muestreo" ></v-checkbox>
        <v-checkbox class="v-checkbox" v-model="formData.inspectionType4" label="Control de Peso" ></v-checkbox>
        <v-checkbox class="v-checkbox" v-model="formData.inspectionType5" label="Cantidad" ></v-checkbox>
        <v-checkbox class="v-checkbox" v-model="formData.inspectionType6" label="Supervision de Embarque de Contenedores" ></v-checkbox>
        <v-checkbox class="v-checkbox" v-model="formData.inspectionType7" label="Supervision de Descarga de Contenedores" ></v-checkbox>
        <v-checkbox class="v-checkbox" v-model="formData.inspectionType8" label="Inspección de Lineas de Carga/Descarga" ></v-checkbox>
        <v-checkbox class="v-checkbox" v-model="formData.inspectionType9" label="Inspección de Tanques/Cisternas"></v-checkbox>
        <v-checkbox class="v-checkbox" v-model="formData.inspectionType10" label="Supervision AFORO" ></v-checkbox>
        <v-checkbox class="v-checkbox" v-model="formData.inspectionType11" label="Precintado" ></v-checkbox>
        <v-checkbox class="v-checkbox" v-model="formData.inspectionType12" label="Temperatura" ></v-checkbox>
        <v-checkbox class="v-checkbox" v-model="formData.inspectionType13" label="Otros" ></v-checkbox>

        <v-select class="v-container" v-model="formData.storage1" :items="normativaOptions" label="Normativas, procedimientos e instructivos"></v-select>
        
        <div class="v-text-field">
          Equipos Utilizados:
        </div>
        <v-checkbox class="v-checkbox" v-model="formData.equipmentType1" label="Wincha" value="visualInspection"></v-checkbox>
        <v-text-field v-model="formData.equipmentType11" label="Código de Wincha"></v-text-field>
        <v-checkbox class="v-checkbox" v-model="formData.equipmentType2" label="Termometro" value="visualInspection"></v-checkbox>
        <v-text-field v-model="formData.equipmentType22" label="Código de Termometro"></v-text-field>

        <div class="v-text-field">
          Muestra:
        </div>
        <v-select class="v-container" v-model="formData.storage2" :items="envaseOptions" label="Tipo de envase para muestra"></v-select>
        <div class="v-text-field">
          Mercaderia:
        </div>
        <v-select class="v-container" v-model="formData.storage3" :items="zonaOptions" label="Zona de almacenamiento"></v-select>
        <v-select class="v-container" v-model="formData.storage4" :items="proteccionOptions" label="Proteccion para almacenamiento"></v-select>
        <v-select class="v-container" v-model="formData.storage5" :items="superficieOptions" label="Superficie para almacenamiento"></v-select>
        <v-select class="v-container" v-model="formData.storage6" :items="embalajeOptions" label="Embalajes/Envases"></v-select>

        <v-text-field class="v-container" v-model="formData.endDate" label="Fecha de Fin"></v-text-field>
        <v-text-field class="v-container" v-model="formData.endTime" label="Hora de Fin"></v-text-field>
        <v-btn  @click="submitData()" color="success">Subir Datos</v-btn>
        &nbsp;
        <v-btn @click="cancelForm, navegarS('Servicios')" color="error">Cancelar/Volver</v-btn>
      </v-form>
    </v-container>
  </template>

  <script setup>
  import { ref, reactive } from 'vue';
  import axios from 'axios';

  const formData = reactive({
    startDate: new Date(),
    startTime: new Date(),
    applicants_code:'',
    productor:'',
    amount:'',
    weight:0,
    address:'',
    equipmentType1:'',
    equipmentType11:'',
    equipmentType2:'',
    equipmentType22:'',
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
    storage2: '',
    storage3: '',
    storage4: '',
    storage5: '',
    storage6: '',
    endDate: new Date(),
    endTime: new Date(),
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
    formData.startDate=new Date;
    formData.startTime=new Date;
    formData.applicants_code="";
    formData.productor="";
    formData.amount="";
    formData.weight=0;
    formData.address="";
    formData.inspectionType1="";
    formData.inspectionType2="";
    formData.inspectionType3="";
    formData.inspectionType4="";
    formData.inspectionType5="";
    formData.inspectionType6="";
    formData.inspectionType7="";
    formData.inspectionType8="";
    formData.inspectionType9="";
    formData.inspectionType10="";
    formData.inspectionType11="";
    formData.inspectionType12="";
    formData.inspectionType13="";
    formData.equipmentType1="";
    formData.equipmentType11="";
    formData.equipmentType2="";
    formData.equipmentType22="";
    formData.storage1="";
    formData.storage2="";
    formData.storage3="";
    formData.storage4="";
    formData.storage5="";
    formData.storage6="";
    formData.endDate=new Date;
    formData.endTime=new Date;
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
  </style>