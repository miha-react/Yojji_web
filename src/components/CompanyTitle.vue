<template>
  <div class="title_container">
    <h1 class="company_title">Yojji</h1>
    <span class="company_description">JavaScript full stack
      development and product design</span>
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
  top: 40px;
  left: 30%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  z-index: 1;
}
.title_container::before{
  left: 0;
  top: 0;
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
  text-align: left;
}

</style>
