<template>
  <div id="app">
    <CompanyTitle />
    <Loading />
    <MenuSocial />
    <Canvas />
    <StripedRectangle />
    <StripedCircle />
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
import './utils/animate';
import StripedRectangle from './components/StripedRectangle';
import StripedCircle from './components/StripedCircle';

export default {
  name: 'App',
  components: {
    StripedRectangle,
    StripedCircle,
    CompanyTitle,
    Loading,
    MenuSocial,
    Canvas,
    AppImage,
  },
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
  background-image: url('assets/background.png');
  background-repeat: repeat;
}
.svg_cross {
  position: absolute;
  top: 25%;
  right: 5%;
  transform: rotate(-10grad);
}
.svg_circle {
  position: absolute;
  top: 30%;
  left: 10%;
  width: 200px;
  height: 200px;
}
.svg_circle_small {
  position: absolute;
  top: 45%;
  right: 15%;
  width: 80px;
  height: 100px;
}
.svg_cross .circle_small {
  visibility: hidden;
}
@media (max-width: 600px) {
  .svg_circle,
  .svg_circle_small {
    display: none;
  }
}
</style>
