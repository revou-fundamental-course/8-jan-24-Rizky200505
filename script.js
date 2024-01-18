const inputField = document.getElementById("squareSide")

inputField.addEventListener('input',function() {
    const inputValue = inputField.Value.trim()
    if(validateInput(inputValue)) {
        countButton.disabled = false
    } else {
        countButton.disabled = true
    }
})

function validateInput(input) {
    const integerRegex = /^-?\d+$/;
    return integerRegex.test(input)
}