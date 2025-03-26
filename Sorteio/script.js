/*  */


function generateNumber() {

    const min = Math.ceil(document.querySelector(".input-min").value)
    const max = Math.floor(document.querySelector(".input-max").value)
    const result = Math.floor(Math.random() * (max - min + 1)) + min;

    if (min >= max) {
        alert("O valor 1 não pode ser maior ou igual ao valor 2")
    } else {
        alert(result)
    }
}
