<template>
    <v-sheet
          class="pa-0 mx-auto"
          color="#E8FDFF"
          :elevation="elevation"
    >
        <SuperimposedImages>
        <template v-slot:backimage>
            <v-img
                :src="require('@/assets/brodmann/brodmn-base-2.png')"
                contain
                height="600"
            />
        </template>
        <template v-slot:frontimage>
            <SvgRightHemisphereLateralView></SvgRightHemisphereLateralView>
        </template>
        </SuperimposedImages>
          
    </v-sheet>
</template>
<script lang="ts" setup>
    import {ref} from 'vue'
    import SuperimposedImages from '@/components/shared/SuperimposedImages.vue'
    import SvgRightHemisphereLateralView from './SvgRightHemisphereLateralView.vue';
    
    const elevation = ref(3)
</script>