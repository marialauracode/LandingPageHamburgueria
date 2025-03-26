// Selecionando os elementos do menu e navegação
const menu = document.querySelector('.menu')
const navMenu = document.querySelector('.nav-menu')

// Adicionando evento para alternar o estado do menu
menu.addEventListener('click', () => {
    menu.classList.toggle('ativo') // Alterna a classe 'ativo' no menu
    navMenu.classList.toggle('ativo') // Alterna a classe 'ativo' na lista de navegação
})
