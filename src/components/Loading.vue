<template>
<div class="loading">
<span class="coming">Coming soon...</span>
  <div class="image_holder">
    <img src="../assets/scale.png" alt="scale">
  </div>
</div>
</template>

<script>
export default {
  name: 'loading',
};
</script>

<style scoped>
.loading{
  position: absolute;
  top: 40%;
  left: 55%;
  transform: translateX(-50%);
  z-index: 10;
}
.coming{
  font-size: 62px;
  font-weight: bolder;
}
</style>
