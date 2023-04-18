const controls = document.querySelectorAll('.control')

controls.forEach((item) => {
    item.addEventListener('change', calculate)
})

function calculate () {
    const squareValue = document.querySelector('.control.square').value
    const square2Value = document.querySelector('.control.square2').value
    const typeValue = document.querySelector('.control.type').value
    const serviceValue = document.querySelector('.control.service').value

    const outputValue = (+typeValue + +serviceValue) * +squareValue

    document.querySelector('.calculator .output').textContent = outputValue
}
