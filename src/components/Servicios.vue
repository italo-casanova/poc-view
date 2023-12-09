<template>
    <v-container>
      <v-row>
        <!-- Botón para Inspección y Muestreo de Harina de Pescado -->
        <v-col cols="12" md="4">
          <v-card>
            <v-img
                height="200px"
                src="https://pe.aivepet.com/wp-content/uploads/2022/07/002_461_IMG_17AAF007_Insects_Image2-scaled-1.jpg"
                ></v-img>
            <v-card-title>Inspección y Muestreo de Harina de Pescado</v-card-title>
            <v-card-actions>
              <v-btn color="primary" @click="navegarA('InspeccionHarinaPescado')">Rellenar</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
  
        <!-- Botón para Inspección y Muestreo de Aceite de Pescado -->
        <!-- Repite la estructura para cada acción, cambiando el título y la función de la API -->
        <v-col cols="12" md="4">
          <v-card>
            <v-img
                height="200px"
                src="https://sostenibilidad.tasa.com.pe/2019/assets/img/desempeno/aceite/foto.jpg"
                ></v-img>
            <v-card-title>Inspección y Muestreo de Aceite de Pescado</v-card-title>
            <v-card-actions>
              <v-btn color="primary" @click="navegarB('InspeccionMuestreoAceite')">Rellenar</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
  
        <!-- Agrega más columnas con v-card para los otros botones -->
        <v-col cols="12" md="4">
          <v-card>
            <v-img
                height="200px"
                src="https://laboratorioconamfi.com/wp-content/uploads/2020/02/a_superficie.jpg"
                ></v-img>
            <v-card-title>Inspección y Muestreo de Superficies Inertes y Vivas</v-card-title>
            <v-card-actions>
              <v-btn color="primary" @click="navegarC('InspeccionSuperficies')">Rellenar</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>

        <v-col cols="12" md="4">
          <v-card>
            <v-img
                height="200px"
                src="https://z-p3-scontent.flim3-3.fna.fbcdn.net/v/t31.18172-8/1149244_576239682419600_1412121476_o.jpg?_nc_cat=110&ccb=1-7&_nc_sid=c2f564&_nc_eui2=AeFlPr3Aj9783cvvro2kSCYqjBawe59YzxqMFrB7n1jPGkw_uvQl3A3nH6ZDSD4e7EPB5OFlqzRpm4GmUBu5r-o2&_nc_ohc=9DQtjE_qUwEAX-kdLtO&_nc_ht=z-p3-scontent.flim3-3.fna&oh=00_AfBMNjYdenIh0IBQ7UGXZAc8b1NfI-oD1O577zVK451gHw&oe=659B51A8"
                ></v-img>
            <v-card-title>Despacho de Aceite de Pescado</v-card-title>
            <v-card-actions>
              <v-btn color="primary" @click="navegarD('IdespachooAceite')">Rellenar</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>

        <v-col cols="12" md="4">
          <v-card>
            <v-img
                height="200px"
                src="https://www.diarioeltigrense.com/wp-content/uploads/2023/06/harina-trigo_camion.jpg"
                ></v-img>
            <v-card-title>Despacho de Harina de Pescado</v-card-title>
            <v-card-actions>
              <v-btn color="primary" @click="navegarE('IdespachooHarina')">Rellenar</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>

      </v-row>
    </v-container>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import axios from 'axios';
  
 

  import { useRouter } from 'vue-router'

    const router = useRouter();
    // Función para navegar a una vista determinada por su nombre de ruta
    const navegarA = (InspeccionHarinaPescado) => {
    router.push({ name: InspeccionHarinaPescado });
    };

    const navegarB = (InspeccionMuestreoAceite) => {
    router.push({ name: InspeccionMuestreoAceite });
    };

    const navegarC = (InspeccionSuperficies) => {
    router.push({ name: InspeccionSuperficies });
    };


    const navegarD = (IdespachooAceite) => {
    router.push({ name: IdespachooAceite });
    };

    const navegarE = (IdespachooHarina) => {
    router.push({ name: IdespachooHarina });
    };

  </script>
  
  <style scoped>
  /* Agrega estilos aquí si es necesario */
  </style>
  