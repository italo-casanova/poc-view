<template>
    <v-container>
      <v-row>
        <!-- Botón para Inspección y Muestreo de Harina de Pescado -->
        <v-col cols="12" md="4">
          <v-card>
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
            <v-card-title>Inspección y Muestreo de Aceite de Pescado</v-card-title>
            <v-card-actions>
              <v-btn color="primary" @click="navegarB('InspeccionMuestreoAceite')">Rellenar</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
  
        <!-- Agrega más columnas con v-card para los otros botones -->
        <v-col cols="12" md="4">
          <v-card>
            <v-card-title>Inspección y Muestreo de Superficies Inertes y Vivas</v-card-title>
            <v-card-actions>
              <v-btn color="primary" @click="navegarC('InspeccionSuperficies')">Rellenar</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>

        <v-col cols="12" md="4">
          <v-card>
            <v-card-title>Despacho de Aceite de Pescado</v-card-title>
            <v-card-actions>
              <v-btn color="primary" @click="navegarD('IdespachooAceite')">Rellenar</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>

        <v-col cols="12" md="4">
          <v-card>
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
  