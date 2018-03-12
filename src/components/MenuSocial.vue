<template>
<div class="social_container">
  <ul class="social">
    <li><a href="#">Contact us via email</a></li>
    <li><a href="#">Linkedin</a></li>
    <li><a href="#">Facebook</a></li>
  </ul>
</div>
</template>

<script>
export default {
  name: 'menuSocial',
};
</script>

<style scoped>
.social_container{
  position: absolute;
  bottom: 20px;
  right: 5%;
  z-index: 10;
}
.social{
  display: flex;
  justify-content: space-between;
  list-style: none;
}
.social li{
  padding-right: 30px;
}
.social li a{
  text-underline-position: under;
  color: black;
  text-decoration-style: solid;
}
@media only screen and (max-width: 1200px){
.social_container{
  right: 5%;
}
}
@media only screen and (max-width: 900px){
.social_container{
  right: 5%;
}
.social{
  flex-direction: column;
}
.social li{
  margin-bottom: 10px;
}
.social li:last-child{
  margin-bottom: 0;
}
}
@media only screen and (max-width: 320px ){
.social_container{

}
}
</style>
