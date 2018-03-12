<template>
  <div class="title_container">
    <h1 class="company_title">Yojii</h1>
    <span class="company_description">Software development</span>
    <span>UX / UI design</span>
  </div>

</template>

<script>
export default {
  name: 'companyTile',
};
</script>

<style scoped>
.title_container{
  position: absolute ;
  top: 0;
  left: 30%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 40px;
  z-index: 1;
}
.title_container::before{
  right: -37%;
  top: 7%;
  content: '';
  display: block;
  position: absolute;
  width: 150px;
  height: 77px;
  background: #eee;
  z-index: -1;
}
.title_container h1{
  margin: 0;
}
.company_description{
  margin: 15px 0 15px 0;
}
@media only screen and (max-width: 320px ){
.title_container{
  margin-top: 15px;
}
}

</style>
