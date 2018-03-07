<template>
   <div class="image_holder">
     <img src="../assets/man.png" alt="">
   </div>
</template>

<script>
export default {
  name: 'appImage',
};
</script>

<style scoped>
.image_holder{
  position: absolute;
  left: 10%;
  bottom: 0px;
  z-index: 1;
}
.image_holder img{
  display: block;
  max-width: 100%;
  height: auto;
}

</style>
