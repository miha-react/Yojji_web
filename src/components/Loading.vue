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
  left: 40%;
}
.coming{
  font-size: 62px;
  font-weight: bolder;
}
@media only screen and (max-width: 1600px ){
.loading{
  left: 50%;
}
}
@media only screen and (max-width: 1200px){
.loading{
  left: 55%;
}
}
@media only screen and (max-width: 1000px){
  .loading{
    left: 50%;
  }
}
@media only screen and (max-width: 900px){
  .coming{
    font-size: 52px;
  }
}
@media only screen and (max-width: 850px){
  .loading{
    left: 40%;
  }
}
@media only screen and (max-width: 710px) {
  .loading{
    left: 30%
  }
}
@media only screen and (max-width: 610px) {
  .loading{
    left: 10%;
  }
}
@media only screen and (max-width: 475px){
  .loading{
    left: 0;
  }
}
@media only screen and (max-width: 425px){
  .coming{
    font-size: 38px;
  }
  .loading img{
    max-width: 75%;
  }
}

@media only screen and (max-height: 320px) {
  .coming{
    font-size: 28px;
  }
  .loading{
    top: 54%;
  }
  .loading img{
    max-width: 65%;
  }
}
@media only screen and (max-width: 320px){
  .loading{
    top: 30%;
  }
}
</style>
