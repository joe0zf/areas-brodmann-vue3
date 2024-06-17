import { defineStore } from 'pinia'

export const useAreaBrodmannStore = defineStore('counter', {
  state: () => ({ 
    areaSelected:0,
    isActiveArea:false
  }),
  getters: {
    getAreaSelected: state => state.areaSelected,
    getIsActiveArea: state => state.isActiveArea
  },
  actions: {
    setAreaSelected(areaId:number, isActiveArea:boolean){
      this.areaSelected = areaId
      this.isActiveArea = isActiveArea
    },
  },
})
