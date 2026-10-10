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
    txtTwo.textContent = `Giotto Chill Room Installation
    [Party: Ether X Naff ]
    [Line-up: OK EG (Live) // Notte Infinita // Miette // Asha ]
    [Time: Saturday October 10th (10:00pm - 7:00am)]
    [+ ????? suprise opening b2b ;)]
     `; 
    txtThree.textContent = `Giotto Fabric Works
[Party:Flush]
[Line-up: Zi! (Live) // Fieldnote (Live) // Dj Spirit // Dj Hermano // Sam Blake // Aduunya ]
[Time: Sunday March 31s (9pm - ?)] 
[Happy birthday Reid :)))]
  `; 
    
   
})
