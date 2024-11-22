function criaCartao(categoria, pergunta, resposta) {
    let container = document.getElementById('container')
    let cartao = document.createElement('article')
    cartao.className = 'cartao'

    cartao.innerHTML = `
    <div class="cartao__conteudo">
    <h3>${categoria}</h3>
    <div class="cartao__conteudo__pergunta">
        <p>${pergunta}</p>
    </div>
    <div class="cartao__conteudo__resposta">
        <p>${resposta}</p>
    </div>
    </div>
    `

    let respostaEstaVisivel = false

    function viraCartao() {
        respostaEstaVisivel = !respostaEstaVisivel
        cartao.classList.toggle('active', respostaEstaVisivel)
    }
    cartao.addEventListener('click', viraCartao)


    container.appendChild(cartao)

}
document.addEventListener('mousemove', (e) => {
    // Cria uma estrela
    const star = document.createElement('div');
    star.className = 'star';
    
    // Posiciona a estrela na posição do mouse
    star.style.left = `${e.pageX}px`;
    star.style.top = `${e.pageY}px`;
    
    // Adiciona a estrela ao corpo do documento
    document.body.appendChild(star);
    
    // Remove a estrela após 1 segundo (tempo do fade-out)
    setTimeout(() => {
        star.remove();
    }, 1000);
});