/*const almost = document.querySelector('#mon')
const wings = document.querySelector('#tue')
const hump = document.querySelector('#wed')
const tday = document.querySelector('#thurs')
const frid = document.querySelector('#fri')
const satu = document.querySelector('#sat')
*/
document.querySelector('#mon').addEventListener('click', monday)
document.querySelector('#tue').addEventListener('click', tuesday)
document.querySelector('#wed').addEventListener('click', wednesday)
document.querySelector('#thurs').addEventListener('click', thursday)
document.querySelector('#fri').addEventListener('click', friday)
document.querySelector('#sat').addEventListener('click', weeknd)
document.querySelector('#sun').addEventListener('click', sunda)

function monday () {
  almost.classList.toggle('hidden')
  wings.classList.add('hidden')
  hump.classList.add('hidden')
  thu.classList.add('hidden')
  frid.classList.add('hidden')
  wend.classList.add('hidden')
  sund.classList.add('hidden')
  
}
function tuesday () {
  almost.classList.add('hidden')
  wings.classList.toggle('hidden')
  hump.classList.add('hidden')
  thu.classList.add('hidden')
  frid.classList.add('hidden')
  wend.classList.add('hidden')
 sund.classList.add('hidden')
}
function wednesday () {
  almost.classList.add('hidden')
  wings.classList.add('hidden')
  hump.classList.toggle('hidden')
  thu.classList.add('hidden')
  frid.classList.add('hidden')
  wend.classList.add('hidden')
 sund.classList.add('hidden')
}
function thursday () {
  almost.classList.add('hidden')
  wings.classList.add('hidden')
  hump.classList.add('hidden')
  thu.classList.toggle('hidden')
  frid.classList.add('hidden')
  wend.classList.add('hidden')
 sund.classList.add('hidden')
}
function friday () {
  almost.classList.add('hidden')
  wings.classList.add('hidden')
  hump.classList.add('hidden')
  thu.classList.add('hidden')
  frid.classList.toggle('hidden')
  wend.classList.add('hidden')
 sund.classList.add('hidden')
}
function weeknd () {
  almost.classList.add('hidden')
  wings.classList.add('hidden')
  hump.classList.add('hidden')
  thu.classList.add('hidden')
  frid.classList.add('hidden')
  wend.classList.toggle('hidden')
 sund.classList.add('hidden')
}
function weeknd () {
  almost.classList.add('hidden')
  wings.classList.add('hidden')
  hump.classList.add('hidden')
  thu.classList.add('hidden')
  frid.classList.add('hidden')
  wend.classList.toggle('hidden')
   sund.classList.add('hidden')
}
function sunda () {
  almost.classList.add('hidden')
  wings.classList.add('hidden')
  hump.classList.add('hidden')
  thu.classList.add('hidden')
  frid.classList.add('hidden')
  wend.classList.add('hidden')
   sund.classList.toggle('hidden')
}