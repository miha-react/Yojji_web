<template>
  <div id="app">
    <CompanyTitle />
    <AppImage />
    <Loading />
    <MenuSocial />
    <Canvas />
    <svg class="svg_cross" viewBox="0 0 380 380" style="enable-background:new 0 0 176.26 176.26;" xml:space="preserve" width="100px" height="100px">
      <path class="cross" d="M0,143.124L54.994,88.13L0,33.136L33.135,0L88.13,54.995L143.125,0l33.135,33.136L121.266,88.13l54.994,54.994  l-33.135,33.136L88.13,121.265L33.135,176.26L0,143.124z" fill="#D80027"/>
      <path class="circle_small" d="M200.71429 102.5 A 86.071426 86.071426 0 1 1  28.571434,102.5 A 86.071426 86.071426 0 1 1  200.71429 102.5 z" transform="matrix(0.9875519,0,0,0.9875519,6.7842273,18.775928)" style="fill:none;fill-opacity:1;stroke:#D80027;stroke-width:50.37815285;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"/>
    </svg>

    <svg class="svg_circle" viewBox="0 0 300 300">
      <path class="circle" style="fill:none;fill-opacity:1;stroke:#D80027;stroke-width:30.37815285;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" d="M 200.71429 102.5 A 86.071426 86.071426 0 1 1  28.571434,102.5 A 86.071426 86.071426 0 1 1  200.71429 102.5 z" transform="matrix(0.9875519,0,0,0.9875519,6.7842273,18.775928)"/>
    </svg>

    <svg class="svg_circle_small" viewBox="00 0 300 300" >
      <path class="circle_small" style="fill:none; fill-opacity:1;stroke:#D80027;stroke-width:50.37815285;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" d="M 200.71429 102.5 A 86.071426 86.071426 0 1 1  28.571434,102.5 A 86.071426 86.071426 0 1 1  200.71429 102.5 z" transform="matrix(0.9875519,0,0,0.9875519,6.7842273,18.775928)"/>
    </svg>

  </div>
</template>

<script>
import CompanyTitle from './components/CompanyTitle';
import Loading from './components/Loading';
import MenuSocial from './components/MenuSocial';
import Canvas from './components/AppCanvas';
import AppImage from './components/AppImage';
import './utils/MorphSVGPlugin';
import './utils/animate';

export default {
  name: 'App',
  components: { CompanyTitle, Loading, MenuSocial, Canvas, AppImage },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  height: inherit;
  width: 100%;
  position: relative;
}
html,
body {
  height: 100%;
  margin: 0;
}
body {
  background-image: url("assets/background.png");
  background-repeat: repeat;
}
.svg_circle{
  position: absolute;
  top: 30%;
  left: 10%;
  width: 200px;
  height: 200px;
}
.svg_cross{
  position: absolute;
  top: 8%;
  right: 35%;
  transform: rotate(-10grad);
}
.svg_circle_small{
  position: absolute;
  top: 45%;
  right: 15%;
  width: 80px;
  height: 100px;
}
.svg_cross .circle_small{
  visibility: hidden;
}


@media only screen and (max-width: 1600px){
  .svg_circle_small{
    right: 2%;
  }
}
@media only screen and (max-width: 1200px) {
  .svg_circle_small{
    top: 55%;
  }
}
@media only screen and (max-width: 1000px) {
 .svg_cross{
    right: 25%;
 }
}
@media only screen and (max-width: 750px ){
  .svg_cross{
    right: 15%;
  }
}
@media only screen and (max-width: 610px) {
  .svg_circle{
    top: 22%;
  }
  .svg_cross{
    right: 5%;
  }
}
@media only screen and (max-width: 500px) {
  .svg_cross{
    top: 15%;
    right: 0;
  }
}
@media only screen and (max-width: 414px){
  .svg_cross{
    top: 20%;
  }
  .svg_circle{
    width: 150px;
    top: 18%;
  }
}
@media only screen and (max-width: 320px){
  .svg_cross{
    display: none;
  }
  .svg_circle{
    display: none;
  }
}

@media only screen and (max-width: 375px) {
  .svg_cross{
    display: none;
  }
  .svg_circle{
    width: 150px;
    top: 20%;
  }
}

@media only screen and (max-height: 414px) {
  .svg_circle{
    width: 130px;
    top: 0;
  }
}
@media only screen and (max-height: 320px) {
  .svg_circle{
    display: none;
  }
  .svg_circle_small{
    top: 30%;
  }
}

</style>
