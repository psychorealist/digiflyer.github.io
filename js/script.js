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
  document.querySelector('#tixOne').style.opacity = 1 ;
  document.querySelector('#tixTwo').style.opacity = 1 ;
};

btn.addEventListener('click', function (){
    txtOne.textContent = `[This week find Giotto at:]`;
    txtTwo.textContent = `Giotto visual installation 
    [Party: No Waves EP Launch party]
     [Location: LE NINETY, 4361 Saint Denis]
     [Line-up: No waves // Public Appeal // Musique sensible (Mertin Hoak) // Beamski b2b 1800pastamoney //  ]
    [Tix: $5 online // $10 at the door ]  
    [Time: Saturday February 23rd (starts 7pm)] `; 
    txtThree.textContent = `Giotto Live Visuals  
    [Party: Laylit #65]
     [Location: Ausgang Plaza,  6524 Rue St-Hubert]
     [Line-up: Mounsz // Manalou // MNSA // Isa Boom //  ]
    [Tix: $30 online // $40 at the door ]  
    [Time: Saturday February 24th, 10pm -3am]`; 
    
   
})
