let num = document.getElementById('valor')
let lista = document.getElementById('adc')
let res = document.getElementById('res')
let valores = []
function numero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}
function nalista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}
function adicionar(){
   if(numero(num.value) && !nalista(num.value, valores)){
    let n = Number(num.value)
    valores.push(n)
    let item = document.createElement('option')
    item.text = `Valor ${n} adicionado`
    lista.appendChild(item)
    res.innerHTML = ``
   
   }else{
    alert('Valor já adicionado ou invalido')
   }
   num.value = ``
   num.focus()

}
function finalizar(){
    if(valores.length == 0){
        alert('erro')
    }else{
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior)
                maior = valores[pos]
            if(valores[pos] < menor)
                menor = valores[pos]
            
        }
        media = soma / total
        res.innerHTML += `<p>Voce adicionou ${total} itens.<\p>`
        res.innerHTML += `<p>O menor valor adicionado foi ${menor}.<\p>`
        res.innerHTML += `<p>O maior valor adicionado foi ${maior}.<\p>`
        res.innerHTML += `<p>A soma entre o valores adicionados é ${soma}.<\p>`
        res.innerHTML += `<p>A media entre os valores é de ${media}.<\p>`
    }
}