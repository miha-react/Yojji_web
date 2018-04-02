<template>
  <span class="rectangle"></span>
</template>

<style scoped>
.rectangle {
  position: absolute;
  left: 9%;
  bottom: 200px;
  display: block;
  width: 65px;
  height: 65px;
  border-radius: 50%;
  background: repeating-linear-gradient( -45deg, #fff, #fff 4px, #000 3px, #000 5px );
}
</style>

<script>
export default {
  name: 'striped',
};
</script>
