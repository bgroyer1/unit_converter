/* Global Variables */
const inputEl = document.querySelector('#input-el')
const convertBtn = document.querySelector('#convert-btn')
const pLength = document.querySelector('#p-length')

/* Functions */
function convertLength(value) {
  const valueInFeet = value * 3.28084
  const valueInMeters = value * 0.3048
  pLength.textContent = `${value} meters = ${valueInFeet} feet | ${value} feet = ${valueInMeters} meters`
}

/* Event Listeners */
convertBtn.addEventListener('click', () => {
  convertLength(parseFloat(inputEl.value))
})

