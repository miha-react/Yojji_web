import TimelineMax from './TimelineMax';
import morphSVG from './MorphSVGPlugin';
import TweenLite from './TweenLite';

document.addEventListener('DOMContentLoaded', () => {
  // const tl = new TimelineMax();
  const svgCross = document.querySelector('.svg_cross');
  const cross = document.querySelector('.cross');
  const circle = document.querySelector('.circle_small');

  function transformCrossToCircle() {
    if (svgCross.classList.contains('svg_cross') &&
      !svgCross.classList.contains('transformToCircle')) {
      TweenLite.to(cross, 0.5, { morphSVG: circle });
      svgCross.classList.toggle('transformToCircle');
    } else {
      TweenLite.to(cross, 0.5, { morphSVG: cross });
      svgCross.classList.toggle('transformToCircle');
    }
  }
  svgCross.addEventListener('click', transformCrossToCircle);
});
