const avanca = document. querySelectorAll('.btn-proximo')

avanca.forEach(button => {
    button.addEventListenner('click', function (){
        const atual = document.querySelector('.ativo');
        const proximoPasso = 'passo' + this. getAttribute ('data-proximo');

        atual.classList.remove ('ativo');
        document.getElementById(proximoPasso).classList.add('ativo');
    })
})


