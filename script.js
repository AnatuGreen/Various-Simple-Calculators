function salePrice() {
    const originalPrice = Number(document.getElementById('originalPriceInput').value)
    const discountInput = Number(document.getElementById('discountInput').value)
    const amountSaved = (originalPrice * discountInput) / 100
    const salePrice = originalPrice - amountSaved
    document.getElementById('priceResult').innerText = salePrice
}

const reset5 = () => {
    document.getElementById('originalPriceInput').value = ''
    document.getElementById('discountInput').value = ''
}

function percentageDiff() {
    const secondValue = Number(document.getElementById('secondNum').value)
    const firstValue = Number(document.getElementById('firstNum').value)
    const step1 = secondValue - firstValue //substract the old number from the new number
    const step2 = step1 / firstValue //divide the increase by the old number
    const step3 = step2 * 100 //multiply the result of step2 by 100 to get the percentage difference
    document.getElementById('result').innerText = step3 + "%"
}

function reset() {
    document.querySelector('.percentagediff').value = ''
    document.querySelector('.percentagediff2').value = ''
    document.querySelector('#result').innerHTML = ''
}

function reset2() {
    document.querySelector('#thisPercent').value = ''
    document.querySelector('#ofThisNumb').value = ''
    document.querySelector('#PercentResult').innerHTML = ''
}

function reset3() {
    document.querySelector('#birthYear').value = ''
    document.querySelector('#targetYear').value = ''
    document.querySelector('#age').innerHTML = ''
}

function percentOf() {
    const thisPercent = Number(document.getElementById('thisPercent').value);
    const ofThisNumb = Number(document.getElementById('ofThisNumb').value)
    const calculation = (thisPercent / 100) * ofThisNumb
    document.getElementById('PercentResult').innerHTML = calculation + "%"
}

function ageDiff() {
    const birthYear = Number(document.getElementById('birthYear').value)
    const targetYear = Number(document.getElementById('targetYear').value)
    document.getElementById('age').innerHTML = targetYear - birthYear
}

function calculateBMI() {
    const wieghtKG = Number(document.getElementById('wieghtKG').value)
    let heightCM = Number(document.getElementById('heightCM').value)
    heightCM = (heightCM / 100) ** 2
    const checkObesity = wieghtKG / heightCM
    if (checkObesity >= 25) {
        document.getElementById("bmi").innerHTML = `Your BMI is ${checkObesity}. This is considered obese, you may want to talk to your doctor`
    } else if (checkObesity >= 18.5 && checkObesity <= 24.9) {
        document.getElementById("bmi").innerHTML = `Your BMI is ${checkObesity}. This is considered a healthy BMI range`
    }
}


const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
}

function copy() {
    const textToCopy = document.querySelector('.bmicheck').innerText
    copyToClipboard(textToCopy)
    console.log(textToCopy)
}


function saveText() {
    document.getElementById("savedText").innerText = document.getElementById("textInput").value
}


