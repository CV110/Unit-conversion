/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const butonEl = document.getElementById("btn")
const inputEl = document.getElementById("input")
const length = document.getElementById("lengthvalue")
const volume = document.getElementById("volumevalue")
const mass = document.getElementById("massvalue")

butonEl.addEventListener("click", function() {
    convertLength()
    convertVolume()
    convertMass()
})

function convertLength() {
    let unit = Number(inputEl.value) 
    let metersconvert = unit*3.281
    let feetconvert = unit/3.281
    
    length.textContent = `${unit} meters = ${metersconvert.toFixed(3)} feet  |  ${unit} feet = ${feetconvert.toFixed(3)} meters`
}

function convertVolume() {
    let unit = Number(inputEl.value) 
    let litersconvert = unit*0.264
    let gallonsconvert = unit/0.264
    
    volume.textContent = `${unit} liters = ${litersconvert.toFixed(3)} gallons  |  ${unit} gallons = ${gallonsconvert.toFixed(3)} liters`
}

function convertMass() {
    let unit = Number(inputEl.value) 
    let kgconvert = unit*2.204
    let poundconvert = unit/2.204
    
    mass.textContent = `${unit} kilos = ${kgconvert.toFixed(3)} pounds  |  ${unit} pounds = ${poundconvert.toFixed(3)} kilos`
}