// Selecionar elementos do DOM
const hamburger = document.getElementById('hamburger');
const navbarLinks = document.getElementById('navbarLinks');

// Adicionar evento de clique ao hamburger
hamburger.addEventListener('click', () => {
    // Alternar a classe 'active' para o menu hamburger
    hamburger.classList.toggle('active');
    
    // Alternar a visibilidade dos links do navbar
    navbarLinks.classList.toggle('active');
});
