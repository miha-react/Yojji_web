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
  bottom: 10px;
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
</style>
