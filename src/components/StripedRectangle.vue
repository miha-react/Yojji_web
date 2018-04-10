<template>
  <span class="rectangle"></span>
</template>

<style scoped>
.rectangle {
  position: absolute;
  right: 21%;
  top: 30px;
  display: block;
  width: 65px;
  height: 75px;
  background: repeating-linear-gradient( -45deg, #fff, #fff 4px, #000 3px, #000 5px );
}
@media (max-width: 900px) {
  .rectangle{
    display: none;
  }
}
</style>

<script>
export default {
  name: 'striped',
};
</script>
