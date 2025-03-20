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
  document.querySelector('#locationOne').style.opacity = 1 ;
  document.querySelector('#locationTwo').style.opacity = 1 ;
  document.querySelector('#mIOne').style.opacity = 1 ;
  document.querySelector('#mITwo').style.opacity = 1 ;
};


btn.addEventListener('click', function (){
    txtOne.textContent = `[This week find Giotto at:]`;
    txtTwo.textContent = `Giotto Visuals and Installation
    [Party: Flush X Supernature ]
    [Line-up: Liv K // Divina // Paolo Askia // Dijipoune // Field Note // Crusty By Duffy (lights) ]
    [Time: Friday March 21st (10:30pm - 7am)] 
     `; 
//     txtThree.textContent = `Giotto Live Visuals (behind the scenes)
// [Party:Ciel Noir at l'Olympia]
// [Line-up: Codeine // Duster // Pelada // Model/Actriz // Snow Strippers ]
// [Time: Sunday March 31s (8pm - 2am)] 
//   `; 
    
   
})
