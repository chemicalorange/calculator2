const controls = document.querySelectorAll('.control')
const dropdowns = document.querySelectorAll('.dropdown')
controls.forEach((item) => {
    item.addEventListener('input', calculate)
})

dropdowns.forEach((item) => {
    item.addEventListener('click', calculate)
})

function calculate () {
    const squareValue = document.querySelector('.control.square').value
    const square2Value = document.querySelector('.control.square2').value
    const typeValue = document.querySelector('.control.type').value
    const serviceValue = document.querySelector('.control.service').value

    const outputValue = (+typeValue + +serviceValue + +square2Value) * +squareValue

    document.querySelector('.calculator .output').textContent = outputValue
}

const range = document.querySelector('.range')
const rangeInput = range.querySelector('input')

rangeInput.addEventListener('input', () => {
    range.querySelector('.range-marker').style.left = (+rangeInput.value / +rangeInput.max  * 90) + '%'
})
