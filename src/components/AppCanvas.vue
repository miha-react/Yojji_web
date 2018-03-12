<template>
  <div class="canvas_holder">
    <canvas></canvas>
  </div>
</template>

<script>
import '../utils/BB8';

export default {
  name: 'appCanvas',
};
</script>

<style scoped>
.canvas_holder{
  height: 200px;
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 3px;
  z-index: 0;
}
@media only screen and (max-width: 768px){
.canvas_holder{
  display: none;
}
}

</style>
