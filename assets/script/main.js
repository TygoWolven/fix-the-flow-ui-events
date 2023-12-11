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

flow.addEventListener('keyup', jumpHigh)
function jumpHigh() {
  flow.classList.toggle('jump')
};

user.addEventListener('keydown', btnFlash)
function btnFlash() {
  user.classList.toggle('flash')
};

interface.addEventListener('keydown', btnFlash)
function btnFlash() {
  interface.classList.toggle('flash')
};