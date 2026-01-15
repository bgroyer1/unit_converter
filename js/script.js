/* Global Variables */
const inputEl = document.querySelector('#input-el')
const convertBtn = document.querySelector('#convert-btn')
const pLength = document.querySelector('#p-length')
const pVolume = document.querySelector('#p-volume')
const pMass = document.querySelector('#p-mass')

/* Functions */
function generateSentence(domNode, userValue, imperialUnitValue, metricUnitValue, imperialUnitName, metricUnitName) {
  domNode.textContent = `${userValue} ${metricUnitName} = ${imperialUnitValue} ${imperialUnitName} | ${userValue} ${imperialUnitName} = ${metricUnitValue} ${metricUnitName}`
  return;
}

function convertLength(value) {
  const valueInFeet = value * 3.28084
  const valueInMeters = value * 0.3048
  generateSentence(pLength, value, valueInFeet, valueInMeters, 'feet', 'meters')
}

function convertVolume(value) {
  const valueInGallons = value * 0.264712
  const valueInLiters = value * 3.78541
  generateSentence(pVolume, value, valueInGallons, valueInLiters, 'gallons', 'liters')
}

function convertMass(value) {
  const valueInPounds = value * 2.20462
  const valueInKilograms = value * 0.453592
  generateSentence(pMass, value, valueInPounds, valueInKilograms, 'pounds', 'kilograms')
}

/* Event Listeners */
convertBtn.addEventListener('click', () => {
  const sanitizedNumber = Number(inputEl.value)
  if (!inputEl.value.trim() || isNaN(inputEl.value)) {
    alert('Please enter a valid number')
    return
  }
  convertLength(sanitizedNumber)
  convertVolume(sanitizedNumber)
  convertMass(sanitizedNumber)
})

