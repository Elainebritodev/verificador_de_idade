function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.getElementById('res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert(`[ERRO] Verifique os dados e tente novamente!`)
    }else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Masculino'

            if (idade >= 0 && idade < 10) {
                //bebe
                img.setAttribute('src', 'bebe_menino.jpg')
                document.body.style.background = '#008B8B'
            } else if (idade < 21) {
                //adolescente
                img.setAttribute('src', 'adolescente_menino.jpg')
                document.body.style.background = '#6495ED'
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'homem_adulto.jpg')
                document.body.style.background = '#DEB887'
            } else {
                //idoso
                img.setAttribute('src', 'homem_idoso.jpg')
                document.body.style.background = '#2F4F4F'
            }

        } else if (fsex[1].checked) {
            genero = 'Feminino'

            
            if (idade >= 0 && idade < 10) {
                //bebe
                img.setAttribute('src', 'bebe_menina.jpg')
                document.body.style.background = '#DAA520'
                

            } else if (idade < 21) {
                //adolescente
                img.setAttribute('src', 'adolescente_menina.jpg')
                document.body.style.background = '#4B0082'

            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'mulher_adulta.jpg')
                document.body.style.background = '#FFB6C1'

            } else {
                //idoso
                img.setAttribute('src', 'mulher_idosa.jpg')
                document.body.style.background = '#BC8F8F'
            }

        }
        res.style.textAlign = 'center'
        res.innerHTML = `Verificamos que se trata de pessoa do sexo ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}