import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

const container = document.querySelector("[data-scroll-container]");

if (container) {
    const locomotiveScroll = new LocomotiveScroll({
        el: container,
        smooth: true
    });

    console.log("Locomotive Scroll initialized");
} else {
    console.error("Missing [data-scroll-container] in HTML");
}
const btn = document.querySelector('.cl'); 
const txtOne = document.querySelector('.one');
const txtTwo = document.querySelector('.two');
const txtThree = document.querySelector('.three');
const txtFour = document.querySelector('.four');
const txtFive = document.querySelector('.five');
const txtSix = document.querySelector('.six');
const txtSeven = document.querySelector('.seven');
const txtEight = document.querySelector('.eight');
const txtNine = document.querySelector('.nine');
const txtTen = document.querySelector('.ten');
const info = document.querySelector('.info');
btn.onclick = function() {
    document.querySelector('.progress-bar').style.opacity = 0;
    document.querySelector('.progress').style.opacity = 0;
  document.querySelector('.terminal').style.color = 'white';
  document.querySelector('.cl').style.animation = 0 ;
  document.querySelector('.terminal').style.color = 'white';
//  document.querySelector('#tixOne').style.opacity = 1 ;
//   document.querySelector('#tixTwo').style.opacity = 1 ;
//   document.querySelector('#locationOne').style.opacity = 1 ;
//   document.querySelector('#locationTwo').style.opacity = 1 ;
//   document.querySelector('#mIOne').style.opacity = 1 ;
//   document.querySelector('#mITwo').style.opacity = 1 ;
 document.querySelectorAll('.info').forEach((element) => {
    element.style.opacity = 1;
});
};


btn.addEventListener('click', function (){
    txtOne.textContent = `[This week find Giotto at:]`;
    txtTwo.textContent = `Giotto Visuals Installation
    [Party: Rue Yi Live ]
    [Line-up: Rue Yi Band // Ritual Instincts  // Richard ]
    [Time: Thursday October 22nd (Doors at 7:30pm)]
     `; 
    txtThree.textContent = `Giotto materials Installation
[Party: Final Flip]
[Line-up: ?????????????????????? ]
[Time: Friday - Sunday ] 
[ Bye bye Parquette its been a pleasure ]
  `; 
    
   
})
