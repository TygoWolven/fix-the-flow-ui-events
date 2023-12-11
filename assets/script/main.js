// Mijn Code

const frontend = document.getElementById('frontend'),
      design = document.getElementById('design'),
      and = document.getElementById('and'),
      development = document.getElementById('development'),
      sprint5 = document.getElementById('sprint5'),
      fix = document.getElementById('fix'),
      the = document.getElementById('the'),
      flow = document.getElementById('flow'),
      user = document.getElementById('user'),
      interface = document.getElementById('interface');

frontend.addEventListener('click', purpleColor)
function purpleColor() {
  frontend.classList.toggle('purple')
};

design.addEventListener('dblclick', designVanish)
function designVanish() {
  design.classList.toggle('vanish')
};

and.addEventListener('mouseover', rainbowEffect)
function rainbowEffect() {
  and.classList.toggle('rainbow')
};

development.addEventListener('wheel', typeMistake)
function typeMistake() {
  development.textContent = "Devlemopent"
};

sprint5.addEventListener('mouseenter', sprintSprinting)
function sprintSprinting() {
  sprint5.classList.toggle('sprint')
};

fix.addEventListener('mouseout', filterBlur)
function filterBlur() {
  fix.classList.toggle('blur')
};

the.addEventListener('mouseenter', dropFall)
function dropFall() {
  the.classList.toggle('dropping')
};

let interaction = document.querySelector('#flow')

interaction.addEventListener('click', jumpHandler)
interaction.addEventListener('animationend', jumpHandler)

function jumpHandler() {
  interaction.classList.toggle('jump')
}