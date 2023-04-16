
// Variaveis
let modal = document.querySelector('dialog')
let decryptTxtArea = document.querySelector('#decryptTxtArea')
let encryptTxtArea = document.querySelector('#encryptTxtArea')
let h4 = document.querySelector('h4')
let h3 = document.querySelector('h3')
let imgModal = document.querySelector('#imgModal')
let icons = document.querySelectorAll('.fa-brands');


// Criptografias.
function criptografia(e) {
    return e.replace(/e/igm, 'enter').replace(/i/igm, 'imes').replace(/a/igm, 'ai').replace(/o/igm, 'ober').replace(/u/igm, 'ufat')
}

function descriptografia(e) {
    return e.replace(/enter/igm, 'e').replace(/imes/igm, 'i').replace(/ai/igm, 'a').replace(/ober/igm, 'o').replace(/ufat/igm, 'u')
}


// Função fechar modal dos botões criptografar e descriptografar
function fecharModal(x, y) {
    setTimeout(() => {
        modal.close()
        modal.style.display = "none"
        x.value = y
    }, 1000)
}

// Função botão criptografar
function criptografar() {
    if (encryptTxtArea.value.length != 0) {
        imgModal.setAttribute('src', './img/Security On.gif')
        modal.style.display = "flex"
        modal.showModal()
        fecharModal(decryptTxtArea, criptografia(encryptTxtArea.value))
        encryptTxtArea.value = ""
        h4.innerHTML = 'Criptografando ...'
        h3.innerHTML = ''
        focus()
    } else {
        imgModal.setAttribute('src', './img/No data-bro.svg')
        h4.innerHTML = 'Sem nada por aqui!'
        modal.style.display = "flex"
        modal.showModal()
        focus()

        setTimeout(() => {
            modal.close()
            modal.style.display = "none"
        }, 2000)
    }
}

// Função botão descriptografar
function descriptografar() {
    if (decryptTxtArea.value.length != 0) {
        imgModal.setAttribute('src', './img/Security On.gif')
        modal.style.display = "flex"
        modal.showModal()
        fecharModal(decryptTxtArea, descriptografia(decryptTxtArea.value))
        h4.innerHTML = 'Descriptografando ...'
        h3.innerHTML = ''
        focus()
    } else {
        imgModal.setAttribute('src', './img/No data-bro.svg')
        h4.innerHTML = 'Nada por aqui!'
        modal.style.display = "flex"
        modal.showModal()
        focus()

        setTimeout(() => {
            modal.close()
            modal.style.display = "none"
        }, 2000)
    }
}

// Função botão copiar
function copiar() {
    if (decryptTxtArea.value.length != 0) {
        decryptTxtArea.select()
        document.execCommand('copy')
        h3.innerHTML = 'Copiado!'
    } else {
        h3.innerHTML = "Copiar o nada é fácil, o difícil é colar em algum lugar. Selecione algo antes de tentar copiar!"
    }
}

// Efeito Hover nas logos
icons.forEach(icons => {
    icons.addEventListener('mouseover', () => {
        icons.classList.add('fa-bounce');
    });

    icons.addEventListener('mouseout', () => {
        icons.classList.remove('fa-bounce');
    });
});


// Desabilitar o fechamento do modal através do ESC
modal.addEventListener('keydown', (e) => {
    if (e.keyCode === 27) { // 27 é o código da tecla ESC
        e.preventDefault();
    }
});
