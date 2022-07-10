const userIdade = document.getElementById('idade_user')
const nomeUsuario = document.getElementById('name_user')
const mensagem = document.getElementById('aviso')
const list = document.getElementById('lista_adicionados')
const testArry = []
function atribuir() {
    if(ageInfo (userIdade.value) && userNomesLista (nomeUsuario.value)) {
        testArry.push(Number(userIdade.value) + String(nomeUsuario.value))
            let elemento = document.createElement('option')
            elemento.text = `Nome de usuário: ${nomeUsuario.value}, idade: ${userIdade.value} anos.`
                list.appendChild(elemento)
                mensagem.innerHTML = ''
    }else {
        mensagem.style.color = 'red'
        mensagem.innerHTML = `Idade: ${userIdade.value} anos. Nome: ${nomeUsuario.value}. Você é menor de idade. 
        Não tente novamente!`
    }
    if(typeof nomeUsuario.value === 'number'){
        return false
    }
    
    userIdade.value = ''
    userIdade.focus()
    nomeUsuario.value = ''
    nomeUsuario.focus()
}
function ageInfo(n){
    if(Number(n) > 18 && Number(n) < 100) {
        return true
    }else {
        return false
    }
}
function userNomesLista(vle){
    if(typeof vle == 'string') {
        return true
    }else {
        return false
    }
}
