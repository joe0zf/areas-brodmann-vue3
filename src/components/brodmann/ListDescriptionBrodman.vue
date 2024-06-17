<template>
    <v-card
      class="mx-auto pa-2"
      color="#E8FDFF"
      height="85vh"
      style="overflow-y: auto"
      @keyup.escape="cleanAllVisibleAreas()"
    >
        <div class="text-subtitle-2 mt-4 mb-2">Síndrome prefrontal</div>
        <v-expansion-panels variant="accordion">
            <v-expansion-panel 
            v-for="item in sindromePreFrontalArr"
            :key="item.name"
            :title="item.name"
            >
                <v-expansion-panel-text>
                    <v-list color="#E8FDFF">
                        <!-- <v-list-subheader>Corteza prefrontal dorso lateral </v-list-subheader> -->
                        <v-list-item
                        v-for="(area, i) in item.brodmannAreas"
                        :key="i"
                        :value="area"
                        color="primary"
                        rounded="xl"
                        @click="handleClick(area)"
                        >
                        <template v-slot:prepend>
                            <v-icon :icon="area.icon"></v-icon>
                        </template>
                
                        <v-list-item-title v-text="area.text"></v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-expansion-panel-text>
            </v-expansion-panel>
        </v-expansion-panels>
        <div class="text-subtitle-2 mt-4 mb-2">Agnosias</div>
        <v-expansion-panels variant="accordion">
            <v-expansion-panel 
            v-for="item in agnosiasArr"
            :key="item.name"
            :title="item.name"
            >
                <v-expansion-panel-text>
                    <v-list color="#E8FDFF">
                        <!-- <v-list-subheader>Corteza prefrontal dorso lateral </v-list-subheader> -->
                        <v-list-item
                        v-for="(area, i) in item.brodmannAreas"
                        :key="i"
                        :value="area"
                        color="primary"
                        rounded="xl"
                        @click="handleClick(area)"
                        >
                        <template v-slot:prepend>
                            <v-icon :icon="area.icon"></v-icon>
                        </template>
                
                        <v-list-item-title v-text="area.text"></v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-expansion-panel-text>
            </v-expansion-panel>
        </v-expansion-panels>
        <div class="text-subtitle-2 mt-4 mb-2">Transtorno de déficit de atención e hiperactividad</div>
        <v-expansion-panels variant="accordion">
            <v-expansion-panel 
            v-for="item in hiperactividadArr"
            :key="item.name"
            :title="item.name"
            >
                <v-expansion-panel-text>
                    <v-list color="#E8FDFF">
                        <!-- <v-list-subheader>Corteza prefrontal dorso lateral </v-list-subheader> -->
                        <v-list-item
                        v-for="(area, i) in item.brodmannAreas"
                        :key="i"
                        :value="area"
                        color="primary"
                        rounded="xl"
                        @click="handleClick(area)"
                        >
                        <template v-slot:prepend>
                            <v-icon :icon="area.icon"></v-icon>
                        </template>
                
                        <v-list-item-title v-text="area.text"></v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-expansion-panel-text>
            </v-expansion-panel>
        </v-expansion-panels>
        <div class="text-subtitle-2 mt-4 mb-2">Dislexia</div>
        <v-expansion-panels variant="accordion">
            <v-expansion-panel 
            v-for="item in dislexiaArr"
            :key="item.name"
            :title="item.name"
            >
                <v-expansion-panel-text>
                    <v-list color="#E8FDFF">
                        <!-- <v-list-subheader>Corteza prefrontal dorso lateral </v-list-subheader> -->
                        <v-list-item
                        v-for="(area, i) in item.brodmannAreas"
                        :key="i"
                        :value="area"
                        color="primary"
                        rounded="xl"
                        @click="handleClick(area)"
                        >
                        <template v-slot:prepend>
                            <v-icon :icon="area.icon"></v-icon>
                        </template>
                
                        <v-list-item-title v-text="area.text"></v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-expansion-panel-text>
            </v-expansion-panel>
        </v-expansion-panels>
        <div class="text-subtitle-2 mt-4 mb-2">Afasias</div>
        <v-expansion-panels variant="accordion">
            <v-expansion-panel 
            v-for="item in afasiasArr"
            :key="item.name"
            :title="item.name"
            >
                <v-expansion-panel-text>
                    <v-list color="#E8FDFF">
                        <!-- <v-list-subheader>Corteza prefrontal dorso lateral </v-list-subheader> -->
                        <v-list-item
                        v-for="(area, i) in item.brodmannAreas"
                        :key="i"
                        :value="area"
                        color="primary"
                        rounded="xl"
                        @click="handleClick(area)"
                        >
                        <template v-slot:prepend>
                            <v-icon :icon="area.icon"></v-icon>
                        </template>
                
                        <v-list-item-title v-text="area.text"></v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-expansion-panel-text>
            </v-expansion-panel>
        </v-expansion-panels>
        <div class="text-subtitle-2 mt-4 mb-2">Agrafias</div>
        <v-expansion-panels variant="accordion">
            <v-expansion-panel 
            v-for="item in agrafiasArr"
            :key="item.name"
            :title="item.name"
            >
                <v-expansion-panel-text>
                    <v-list color="#E8FDFF">
                        <!-- <v-list-subheader>Corteza prefrontal dorso lateral </v-list-subheader> -->
                        <v-list-item
                        v-for="(area, i) in item.brodmannAreas"
                        :key="i"
                        :value="area"
                        color="primary"
                        rounded="xl"
                        @click="handleClick(area)"
                        >
                        <template v-slot:prepend>
                            <v-icon :icon="area.icon"></v-icon>
                        </template>
                
                        <v-list-item-title v-text="area.text"></v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-expansion-panel-text>
            </v-expansion-panel>
        </v-expansion-panels>
        <div class="text-subtitle-2 mt-4 mb-2">Acalculia</div>
        <v-expansion-panels variant="accordion">
            <v-expansion-panel 
            v-for="item in acalculiaArr"
            :key="item.name"
            :title="item.name"
            >
                <v-expansion-panel-text>
                    <v-list color="#E8FDFF">
                        <!-- <v-list-subheader>Corteza prefrontal dorso lateral </v-list-subheader> -->
                        <v-list-item
                        v-for="(area, i) in item.brodmannAreas"
                        :key="i"
                        :value="area"
                        color="primary"
                        rounded="xl"
                        @click="handleClick(area)"
                        >
                        <template v-slot:prepend>
                            <v-icon :icon="area.icon"></v-icon>
                        </template>
                
                        <v-list-item-title v-text="area.text"></v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-expansion-panel-text>
            </v-expansion-panel>
        </v-expansion-panels>
        <div class="text-subtitle-2 mt-4 mb-2">Parálisis cerebral infantil </div>
        <v-expansion-panels variant="accordion">
            <v-expansion-panel 
            v-for="item in paralisisCerebralInfantilArr"
            :key="item.name"
            :title="item.name"
            >
                <v-expansion-panel-text>
                    <v-list color="#E8FDFF">
                        <!-- <v-list-subheader>Corteza prefrontal dorso lateral </v-list-subheader> -->
                        <v-list-item
                        v-for="(area, i) in item.brodmannAreas"
                        :key="i"
                        :value="area"
                        color="primary"
                        rounded="xl"
                        @click="handleClick(area)"
                        >
                        <template v-slot:prepend>
                            <v-icon :icon="area.icon"></v-icon>
                        </template>
                
                        <v-list-item-title v-text="area.text"></v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-expansion-panel-text>
            </v-expansion-panel>
        </v-expansion-panels>
        <div class="text-subtitle-2 mt-4 mb-2">Discapacidad sensorial</div>
        <v-expansion-panels variant="accordion">
            <v-expansion-panel 
            v-for="item in discapacidadSensorialArr"
            :key="item.name"
            :title="item.name"
            >
                <v-expansion-panel-text>
                    <v-list color="#E8FDFF">
                        <!-- <v-list-subheader>Corteza prefrontal dorso lateral </v-list-subheader> -->
                        <v-list-item
                        v-for="(area, i) in item.brodmannAreas"
                        :key="i"
                        :value="area"
                        color="primary"
                        rounded="xl"
                        @click="handleClick(area)"
                        >
                        <template v-slot:prepend>
                            <v-icon :icon="area.icon"></v-icon>
                        </template>
                
                        <v-list-item-title v-text="area.text"></v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-expansion-panel-text>
            </v-expansion-panel>
        </v-expansion-panels>
    </v-card>
</template>
<script lang="ts" setup>
    interface AreaItem {
        text:string,
        icon:string,
        area:number,
        isActive:boolean
    }

    // import {ref} from 'vue';
    import {useAreaBrodmannStore} from '@/store/index'
    const store = useAreaBrodmannStore();
    const items =  [
        { text: 'Área de brodmann 32', icon: 'mdi-brain', area:32, isActive:false },
        { text: 'Área de brodmann 33', icon: 'mdi-brain', area:33, isActive:false },
        { text: 'Área de brodmann 34', icon: 'mdi-brain', area:34, isActive:false }
    ];
    const agnosiasArr = [
        {
            name:'Corteza occipital (visual)',
            brodmannAreas:[
                { text: 'Área de Brodmann 18', icon: 'mdi-brain', area:18, isActive:false },
                { text: 'Área de Brodmann 19', icon: 'mdi-brain', area:19, isActive:false },
            ]
        },
        {
            name:'Corteza temporo-occipital',
            brodmannAreas:[
                { text: 'Área de Brodmann 17', icon: 'mdi-brain', area:17, isActive:false },
            ]
        },
        {
            name:'Corteza temporal superior (auditiva)',
            brodmannAreas:[
                { text: 'Área de Brodmann 41', icon: 'mdi-brain', area:41, isActive:false },
                { text: 'Área de Brodmann 42', icon: 'mdi-brain', area:42, isActive:false },
            ]
        },
        {
            name:'Corteza somato sensorial primaria (tacto)',
            brodmannAreas:[
                { text: 'Área de Brodmann 1', icon: 'mdi-brain', area:1, isActive:false },
                { text: 'Área de Brodmann 2', icon: 'mdi-brain', area:2, isActive:false },
                { text: 'Área de Brodmann 3', icon: 'mdi-brain', area:3, isActive:false },
            ]
        },
        {
            name:'Corteza orbitofrontal (olfativa)',
            brodmannAreas:[
                { text: 'Área de Brodmann 11', icon: 'mdi-brain', area:11, isActive:false },
                { text: 'Área de Brodmann 12', icon: 'mdi-brain', area:12, isActive:false },
            ]
        },
    ]
    const sindromePreFrontalArr = [
        {
            name:'Corteza prefrontal dorso lateral',
            brodmannAreas:[
                { text: 'Área de Brodmann 46', icon: 'mdi-brain', area:46, isActive:false },
                { text: 'Área de Brodmann 10', icon: 'mdi-brain', area:10, isActive:false },
            ]
        },
        {
            name:'Corteza prefrontal orbitó frontal',
            brodmannAreas:[
                { text: 'Área de Brodmann 47', icon: 'mdi-brain', area:47, isActive:false },
                { text: 'Área de Brodmann 11', icon: 'mdi-brain', area:11, isActive:false },
            ]
        },
        {
            name:'Corteza  medial prefrontal',
            brodmannAreas:[
                { text: 'Área de Brodmann 32', icon: 'mdi-brain', area:32, isActive:false },
                { text: 'Área de Brodmann 24', icon: 'mdi-brain', area:24, isActive:false },
            ]
        },
    ]
    const hiperactividadArr = [
        {
            name:'Corteza prefrontal dorso lateral',
            brodmannAreas:[
                { text: 'Área de Brodmann 9', icon: 'mdi-brain', area:9, isActive:false },
                { text: 'Área de Brodmann 10', icon: 'mdi-brain', area:10, isActive:false },
            ]
        },
        {
            name:'Lóbulo parietal',
            brodmannAreas:[
                { text: 'Área de Brodmann 40', icon: 'mdi-brain', area:40, isActive:false },
                { text: 'Área de Brodmann 39', icon: 'mdi-brain', area:39, isActive:false },
            ]
        },
        // {
        //     name:'Corteza cingular anterior',
        //     brodmannAreas:[]
        // },
        // {
        //     name:'Ganglios basales',
        //     brodmannAreas:[]
        // },
    ]
    const dislexiaArr = [
        {
            name:'Lóbulo parietal, giro angular, giro angular inferior',
            brodmannAreas:[
                { text: 'Área de Brodmann 39', icon: 'mdi-brain', area:39, isActive:false },
                { text: 'Área de Brodmann 40', icon: 'mdi-brain', area:40, isActive:false },
            ]
        },
        {
            name:'Lóbulo temporal',
            brodmannAreas:[
                { text: 'Área de Brodmann 22', icon: 'mdi-brain', area:22, isActive:false },
            ]
        },
        // {
        //     name:'Lóbulo parietal temporal',
        //     brodmannAreas:[]
        // },
    ]
    const apraxiasArr = [
        {
            name:'Lóbulo frontal',
            brodmannAreas:[
                { text: 'Área de Brodmann 4', icon: 'mdi-brain', area:4, isActive:false },
                { text: 'Área de Brodmann 6', icon: 'mdi-brain', area:6, isActive:false },
            ]
        },
    ]
    const afasiasArr = [
        {
            name:'Área cortical y subcortical del hemisferio cerebral izquierdo (Afasia de broca)',
            brodmannAreas:[
                { text: 'Área de Brodmann 44', icon: 'mdi-brain', area:44, isActive:false },
                { text: 'Área de Brodmann 45', icon: 'mdi-brain', area:45, isActive:false },
            ]
        },
        {
            name:'Lóbulo temporal (Afasia de wernicke)',
            brodmannAreas:[
                { text: 'Área de Brodmann 41', icon: 'mdi-brain', area:41, isActive:false },
                { text: 'Área de Brodmann 42', icon: 'mdi-brain', area:42, isActive:false },
                { text: 'Área de Brodmann 22', icon: 'mdi-brain', area:22, isActive:false },
                { text: 'Área de Brodmann 37', icon: 'mdi-brain', area:37, isActive:false },
            ]
        },
        {
            name:'lóbulo parietal',
            brodmannAreas:[
                { text: 'Área de Brodmann 39', icon: 'mdi-brain', area:39, isActive:false },
                { text: 'Área de Brodmann 40', icon: 'mdi-brain', area:40, isActive:false },
            ]
        },
    ]
    const agrafiasArr = [
        {
            name:'Giro angular',
            brodmannAreas:[
                { text: 'Área de Brodmann 39', icon: 'mdi-brain', area:39, isActive:false },
            ]
        },
        {
            name:'Giro frontal inferior, también conocido como área de broca escrita ',
            brodmannAreas:[
                { text: 'Área de Brodmann 44', icon: 'mdi-brain', area:44, isActive:false },
                { text: 'Área de Brodmann 45', icon: 'mdi-brain', area:45, isActive:false },
            ]
        }
    ]
    const acalculiaArr = [
        {
            name:'Giro angular',
            brodmannAreas:[
                { text: 'Área de Brodmann 39', icon: 'mdi-brain', area:39, isActive:false },
            ]
        },
        {
            name:'Giro frontal inferior',
            brodmannAreas:[
                { text: 'Área de Brodmann 44', icon: 'mdi-brain', area:44, isActive:false },
                { text: 'Área de Brodmann 45', icon: 'mdi-brain', area:45, isActive:false },
            ]
        }
    ]
    const paralisisCerebralInfantilArr = [
        {
            name:'Corteza motora primaria',
            brodmannAreas:[
                { text: 'Área de Brodmann 4', icon: 'mdi-brain', area:4, isActive:false },
            ]
        },
        {
            name:'Corteza motora suplementaria',
            brodmannAreas:[
                { text: 'Área de Brodmann 6', icon: 'mdi-brain', area:6, isActive:false },
            ]
        }
    ]
    const discapacidadSensorialArr = [
        {
            name:'Corteza visual primaria (lóbulo occipital)',
            brodmannAreas:[
                { text: 'Área de Brodmann 17', icon: 'mdi-brain', area:17, isActive:false },
                { text: 'Área de Brodmann 18', icon: 'mdi-brain', area:18, isActive:false },
            ]
        },
        {
            name:'Corteza visual asociativa (lóbulo occipital y lóbulo parietal)',
            brodmannAreas:[
                { text: 'Área de Brodmann 19', icon: 'mdi-brain', area:19, isActive:false },
            ]
        },
        {
            name:'Corteza auditiva primaria (lóbulo temporal)',
            brodmannAreas:[
                { text: 'Área de Brodmann 41', icon: 'mdi-brain', area:41, isActive:false },
                { text: 'Área de Brodmann 42', icon: 'mdi-brain', area:42, isActive:false },
            ]
        },
        {
            name:'Corteza somatosensorial primaria (lóbulo parietal)',
            brodmannAreas:[
                { text: 'Área de Brodmann 1', icon: 'mdi-brain', area:1, isActive:false },
                { text: 'Área de Brodmann 2', icon: 'mdi-brain', area:2, isActive:false },
                { text: 'Área de Brodmann 3', icon: 'mdi-brain', area:3, isActive:false },
            ]
        }
    ]
    const handleClick = (item:AreaItem)=>{
        // alert(item.area)
        let itemActive = true; 
        // const res = items.findIndex(e=>e.area==item.area)
        // items.map(e=>({
        //     ...e,
        //     isActive:false
        // }))
        // items[res].isActive = itemActive;
        store.setAreaSelected(item.area, itemActive);
    }
    const cleanAllVisibleAreas = ()=>{
        const inActiveElements = items.filter(e => e.isActive);

        if (inActiveElements.length > 0) {
        inActiveElements.forEach(e => {
            store.setAreaSelected(e.area, false);
            e.isActive = false; 
        });
        }
    }
</script>