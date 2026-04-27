function generateNumber(){

    const nbMin = document.getElementById('nbMin')
    const nbMax = document.getElementById('nbMax')
    const message = document.getElementById('message')
    const errorSound = document.querySelector('.soundError')
    const resultSound = document.querySelector('.soundResult')

if (nbMin.value == "" || nbMax.value == "") {
        message.innerHTML = "Preencha os dois números antes de sortear!"
        message.style.display = "block"

        errorSound.currentTime = 0
        errorSound.play()

    return
}


    const min = Math.ceil(nbMin.value)
    const max = Math.floor(nbMax.value)

if (max <= min) {
        message.innerHTML = "O número máximo precisa ser maior que o número mínimo!"
        message.style.display = "block"

        errorSound.currentTime = 0
        errorSound.play()

    return
}

    const result = Math.floor(Math.random() * (max - min + 1)) + min
    const resultScreen = document.getElementById('result')

    resultScreen.innerHTML = result
    resultScreen.style.display = "block"

    resultSound.currentTime = 0
    resultSound.play()

    nbMin.value = ""
    nbMax.value = ""

    message.style.display = "none"

    document.getElementById('btn').innerText = "Refazer Sorteio"
    
}