/*
    Variaveis -> 3 formas de criar no Javascript onde podem ser guardados o que quiser tais como numeros e textos.
    - var --- Não é mais utilizado
    -let -> pode ser alterado o valor após criada
    -const -> constante (valor não pode ser alterado após ser criado)
*/

/*
    Função -> Trechos de código que só é executado quando é chamado
*/

const form = document.querySelector(".formulario-fale-conosco")
const mask = document.querySelector(".form-mask")

function showform(){
    form .style.left = "50%"
    form.style.transform = "translateX(-50%)"
    mask.style.visibility = "visible"
}

function hiddenform(){
    form .style.left = "-300px"
    form.style.transform = "translateX(0)"
    mask.style.visibility = "hidden"
}