<template>
    <v-card flat>
      <v-toolbar density="compact" color="#BEF9FF">
          <v-app-bar-nav-icon></v-app-bar-nav-icon>
          <v-toolbar-title>Areas de Brodmann</v-toolbar-title>
      </v-toolbar>
      <v-container fluid>
        <v-row>
          <v-col cols="12" sm="12" md="4">
            <RightHemisphereMedial/>
          </v-col>
          <v-col cols="12" sm="12" md="4">
            <RightHemisphereLateral/>
          </v-col>
          <v-col cols="12" sm="12" md="4">
            <ListDescriptionBrodman/>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
    
</template>
  
<script lang="ts" setup>
  // import { ref, Ref } from 'vue';
  import RightHemisphereMedial from '@/components/brodmann/RightHemisphereMedial.vue'
  import RightHemisphereLateral from '@/components/brodmann/RightHemisphereLateral.vue'
  import ListDescriptionBrodman from '@/components/brodmann/ListDescriptionBrodman.vue';
  // const helloText:Ref <string> = ref("Hola mundo");
</script>
  