<template>
    <div class="container-images">
        <div class="back-image">
          <slot name="backimage"></slot>
        </div>
        <div class="front-image">
          <slot name="frontimage"></slot>
        </div>
    </div>
</template>

<script lang='ts' setup>
</script>

<style scoped>
.container-images{
  position: relative;
  height: 85vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center
}
.back-image, .front-image{
  position: absolute;
  width: 400px;
  height: 400px;
}
.front-image{
  z-index: 1;
}
</style>
  