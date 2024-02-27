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
btn.onclick = function() {
    document.querySelector('.progress-bar').style.opacity = 0;
    document.querySelector('.progress').style.opacity = 0;
  document.querySelector('.terminal').style.color = 'white';
  document.querySelector('.cl').style.animation = 0 ;
  document.querySelector('.terminal').style.color = 'white';
 //document.querySelector('#tixOne').style.opacity = 1 ;
  document.querySelector('#tixTwo').style.opacity = 1 ;
  document.querySelector('#locationOne').style.opacity = 1 ;
  document.querySelector('#locationTwo').style.opacity = 1 ;
  document.querySelector('#mIOne').style.opacity = 1 ;
  document.querySelector('#mITwo').style.opacity = 1 ;
};


btn.addEventListener('click', function (){
    txtOne.textContent = `[This week find Giotto at:]`;
    txtTwo.textContent = `Giotto Live Visuals and Installation
    [Party: unknown artist]
    [Line-up: Vika // Pretty Privilege // Sandinista ]
    [Time: Wednesday February 28th (10pm - 3am)] 
    [Tix: Free (limited capacity) ] `; 
    txtThree.textContent = `Giotto Live Visuals and Installation
[Party: Nuit Blanche at the Phi Center]
[Line-up: C Lia // Cheba Iman // Crissmarqueur ]
[Time: Wednesday March 2nd (9pm - 3am)] 
 [Tix: Free (limited capacity) ] `; 
    
   
})
