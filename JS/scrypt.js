function showElem(curent){
  curent.forEach(item => {
    if(item.isIntersecting){
      item.target.classList.add('block-show')
    }
    else{
      item.target.classList.remove('block-show')
    }
  });
}

let options = {
  threshold: [0.2]
};
let observer = new IntersectionObserver(showElem, options);
const elements = document.querySelectorAll('.serve');
for(elem of elements){
  observer.observe(elem);
}
// =========

const cube = document.querySelector('.cube-img');

window.addEventListener('scroll', ()=>{
  console.log( window.scrollY)
  cube.style.transform = `rotate(${(0.5 * window.scrollY)}deg)`;
})