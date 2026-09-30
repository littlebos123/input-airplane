// changing parts
let background = document.getElementById("background")
let backgroundColorOutput = document.querySelector("output[for=background-color")
let wings = document.getElementById("wings")
let wingspanOutput = document.querySelector("output[for=wingspan]")
let body = document.getElementById("body")
let word = document.getElementById("word")
let airplaneSizeOutput = document.querySelector("output[for=airplane-size")
let airplaneRotationOutput = document.querySelector("output[for=airplane-rotation")

// inputs
let wordInput = document.getElementById("word-input")
let backgroundColor = document.getElementById("background-color")
let wingspan = document.getElementById("wingspan")
let airplaneSize = document.getElementById("airplane-size")
let airplaneRotation = document.getElementById("airplane-rotation")

// functions
function updateOutput(element, input) {
    element.textContent = input.value
}

function changeText(element, textInput) {
    element.textContent = textInput.value
}

function changeColor(element, colorInput) {
    element.style.background = colorInput.value
}

function stretchX(element, stretchInput) {
    element.style.transformOrigin = 'center'
    element.style.transform = `scaleX(${stretchInput.value})`
}

function changeScale(element, scaleInput) {
    element.style.scale = scaleInput.value
}

function changeRotation(element, rotationInput) {
    element.style.rotate = rotationInput.value + "deg"
}

// listeners

wordInput.addEventListener("input", function() {
    changeText(word, wordInput)
})

backgroundColor.addEventListener("input", function() {
    changeColor(background, backgroundColor)
    updateOutput(backgroundColorOutput, backgroundColor)
})

wingspan.addEventListener("input", function() {
    stretchX(wings, wingspan)

})

airplaneSize.addEventListener("input", function() {
    changeScale(wings, airplaneSize)
    changeScale(body, airplaneSize)
})

airplaneRotation.addEventListener("input", function() {
    changeRotation(wings, airplaneRotation)
    changeRotation(body, airplaneRotation)
})

// rotate, translate, scale

// add events listener in the slider

// make the same anchor point