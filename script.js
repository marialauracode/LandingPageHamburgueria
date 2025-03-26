// Pega o menu e os itens de navegação, conforme classificamos no html
const menu = document.querySelector('.menu')
const navMenu = document.querySelector('.nav-menu')

// Adicionando evento para alternar o estado do menu
menu.addEventListener('click', () => { // quando o usuário clicar no menu...

    // toggle ativa ou remove a classe 'ativo', que está personalizada no CSS
    // clicou uma vez = aparece
    // clicou de novo = some
    menu.classList.toggle('ativo')  // tanto para o menu...
    navMenu.classList.toggle('ativo') //... quanto para os itens de navegação
})
