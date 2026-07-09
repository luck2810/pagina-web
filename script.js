// Seleciona todos os botões de reação da página
const botoes = document.querySelectorAll('article button');

// Aplica a lógica individualmente para cada botão
botoes.forEach(botao => {
    // Cada botão controla se foi clicado ou não de forma independente
    let curtiu = false;

    botao.addEventListener('click', () => {
        console.log("fui clicado");
        
        // Seleciona o <span> com o número dentro deste botão específico
        const texto = botao.querySelector("span");
        let quantidade = parseInt(texto.textContent, 10);

        // Se não tinha curtido: soma 1 e muda o fundo para azul
        if (!curtiu) {
            texto.textContent = quantidade + 1;
            botao.style.backgroundColor = "#e1f5fe"; 
            curtiu = true;
        } 
        // Se já tinha curtido: subtrai 1 e remove o fundo azul
        else {
            texto.textContent = quantidade - 1;
            botao.style.backgroundColor = ""; 
            curtiu = false;
        }
    });
});
