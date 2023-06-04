const form = document.querySelector('form')
const emailInput =  document.querySelector("#email")
const productQuantity = document.querySelector(".quantity")

const increaseButton = document.querySelector(".increase-quantity")

console.log("emailInput",emailInput)

function handleFormSubmit(e){
e.preventDefault()
console.log("e", e)
const inputEmailValue = emailInput.value
console.log("inputEmailValue",inputEmailValue)
}


function handleIncreaseButtonClick(e){
    // productQuantity.innerText
    // const productQuantity.innerText + 1
    const currentValue = Number(productQuantity.innerText)+ 1
    productQuantity.innerHTML =currentValue
    console.log("productQuantity.innerText", currentValue)
}

//attach event
form.addEventListener('submit', handleFormSubmit)


increaseButton.addEventListener('click', handleIncreaseButtonClick)