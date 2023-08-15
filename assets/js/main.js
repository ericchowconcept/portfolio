
const header = document.querySelector('header');



//background and color of certain elements changes when scroll
window.addEventListener('scroll',() => {
    if (window.scrollY > 0){
        header.classList.add('fixed');
    }else {
        header.classList.remove('fixed');
    }
})

let prevScroll = window.scrollY;
window.onscroll = function() {
  const currentScroll = window.scrollY;
  //header disappears after 300px
  if (prevScroll > currentScroll) {
    header.style.top = "0";
  } else {
     header.style.top = "-7.2rem";
  }
  //header reappears when scroll up
  prevScroll = currentScroll;
}


