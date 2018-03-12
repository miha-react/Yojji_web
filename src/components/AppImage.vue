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
  bottom: 0;
  z-index: 1;
}
.image_holder img{
  display: block;
  max-width: 100%;
  height: auto;
}
@media only screen and (max-width: 320px){
  .image_holder img{
    display: none;
  }
}
@media only screen and (max-width: 1400px ){

  .image_holder img{
    max-width: 85%;
  }
}
@media only screen and (max-width: 1000px ){
  .image_holder img{
    max-width: 80%;
  }
}
@media only screen and (max-width: 850px ){
  .image_holder{
    left: 0;
  }
}
@media only screen and (max-width: 800px){
  .image_holder img{
    max-width: 70%;
  }
}
</style>
