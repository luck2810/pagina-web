// 1. Seleciona todos os botões de reação da página
const botoes = document.querySelectorAll('article button');

// 2. Adiciona o evento de clique para cada botão individualmente
botoes.forEach(botao => {
    // Cria o estado "curtiu" isolado dentro do escopo de cada botão
    let curtiu = false;

    botao.addEventListener('click', () => {
        console.log("fui clicado");
        
        // Seleciona o contador (span) apenas DESTE botão específico
        const texto = botao.querySelector("span");
        
        // Converte o texto atual para número para evitar erros de soma
        let quantidade = parseInt(texto.textContent);

        if (!curtiu) {
            texto.textContent = quantidade + 1;
            botao.style.backgroundColor = "#e1f5fe"; // Feedback visual opcional (fundo azul claro)
            curtiu = true;
        } else {
            texto.textContent = quantity - 1;
            botao.style.backgroundColor = ""; // Volta a cor original do CSS
            curtiu = false;
        }
    });
});
