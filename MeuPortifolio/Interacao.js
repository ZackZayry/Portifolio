const botPor = document.querySelectorAll(".Title3");
const infPor = document.querySelectorAll(".Subtitulo");

function removeBotao()
{        
    //Passo 3 - Remover animação dos botões
    const botSel = document.querySelector(".Selecionado");//Buscar o btão com esta class
    if (botSel) { // Verifica se existe antes de tentar remover
        botSel.classList.remove("Selecionado");
    } 
}

function removeInf(indice)
{
    const infSel = document.querySelector(".Subtitulo.Selecionado");
    if (infSel) {
        infSel.classList.remove("Selecionado");
    }
}

botPor.forEach((botao, indice) => 
    {
        botao.addEventListener("click", ()=>
        {
            removeBotao();
    
            //Passo 4 - Adicionar animação dos botões
            botao.classList.add("Selecionado");//add a class
    
            removeInf(indice);
    
            //Passo 8 - Adicionar informações do Portifólio
            infPor[indice].classList.add("Selecionado");
        });
    }
    )