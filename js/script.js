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

};

btn.addEventListener('click', function (){
    txtOne.textContent = `[This week find Giotto at:]`;
    txtTwo.textContent = `Giotto live visuals/installation
    [Party: Groove Gremlins] 
    [Location: Barbossa 3956 A St Laurent Blvd]
    [Line-up: Asha B2B Runa, Skesa, Kai] 
    [Tix: $5/ free before 10pm]
    [Time: Wednesday February 7th (10pm-3am)] `; 
    txtThree.textContent = `
    Giotto opening DJ set 
    [Party: Embrace the pain]
    [Location: Nouvel Etablissement 5817 St Laurent Blvd]
    [Line-up: Giotto, Casakobrae, Paladium, Namanariii, Ketamina]
    [Tix: $8]
    [Time: Thursday February 8th (10pm-3am)]]`; 
    txtFour.textContent = `
    Giotto visual installation 
    [Party: RIP VAULT]
        [Location: The Ice-cream shop]
      [Line-up:Hatechild. x DJ StepMania [Deli Girls - NYC]
    Neo Edo x D.Blavatsky
    Beamskii x Johnny Runts
    Lafhomme x digital polyglot 
    Grenadim
    Ash Vestal [Live]]
      [Tix: $25] 
      [Time: Saturday February 10th (11pm-8am)]`;
    txtFive.textContent = `The world awakens as I ascend, painting the canvas of the sky, a masterpiece to `;
    txtSix.textContent = `comprehend.`;
    txtSeven.textContent = `I bring warmth and life to all I touch, chasing away darkness with a gentle clutch. `;
    txtEight.textContent = `A daily rebirth, a spectacle divine, illuminating the world, a symbol to define. `;
    txtNine.textContent = `Guess my identity as I rise, a cosmic artist with enchanting ties. I herald the start of a `;
    txtTen.textContent = `new day's story, an ancient, timeless, and splendid glory.`;
})
