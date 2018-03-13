import TimelineMax from './TimelineMax';
import morphSVG from './MorphSVGPlugin';

document.addEventListener('DOMContentLoaded', () => {
  const tl = new TimelineMax();

  const cross = document.querySelector('.cross');
  const circle = document.querySelector('.circle_small');

  cross.addEventListener('click', () => {
    console.log('Test')
    tl.to(cross, 1, { morphSVG: circle }, '0');
  });
});
