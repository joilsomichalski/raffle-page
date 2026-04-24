 function generateNumber(){

    const min = Math.ceil(document.getElementById('nbMin').value)
    const max = Math.floor(document.getElementById('nbMax').value)

    const message = document.getElementById('message')

if (document.getElementById('nbMin').value == "" || document.getElementById('nbMax').value == "") {
    message.innerHTML = "Preencha os dois números antes de sortear!"
    return
}    

    const result = Math.floor(Math.random() * (max - min + 1)) + min;
    const resultScreen = document.getElementById('result')

    resultScreen.innerHTML = result
    resultScreen.style.display = "block"

document.getElementById('nbMin').value = ""
document.getElementById('nbMax').value = ""

   document.getElementById('btn').innerText = "Refazer Sorteio"
 }