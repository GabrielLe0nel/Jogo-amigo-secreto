let listaAmigos = [];

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function adicionarAmigo() {
    let campoNome = document.querySelector('#amigo');
    let nome = campoNome.value.trim();
    
    if (nome === '') {
        alert('Digite um valor válido!');
        return;
    }
    
    listaAmigos.push(nome); //o . push é usado para adicionar nomes à lista de amigos. No geral é utilizado para adicionar um novo elemento ao final de um array.
    atualizarListaAmigos();
    campoNome.value = '';
}

function atualizarListaAmigos() {
    let lista = document.querySelector('#listaAmigos');
    lista.innerHTML = '';
    
    listaAmigos.forEach(nome => {
        let li = document.createElement('li');
        li.textContent = nome;
        lista.appendChild(li); //utilizado para inserir os <li> (itens da lista) dentro da <ul> (lista não ordenada).
    });
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert('Adicione pelo menos um nome antes de sortear!');
        return;
        /*"
        O código verifica se listaAmigos.length === 0, ou seja, se não há nenhum nome na lista.
        Se a lista estiver vazia, exibe um alert ('Adicione pelo menos um nome antes de sortear!') para informar ao usuário que ele precisa adicionar pelo menos um nome antes de realizar o sorteio.
        O return; interrompe a execução da função naquele ponto, impedindo que o sorteio aconteça sem nomes na lista.");
            */
    }
    
    let indiceSorteado = Math.floor(Math.random() * listaAmigos.length); //O Math.floor serve para arredondar o número para baixo, garantindo que seja um índice válido do array.
    let nomeSorteado = listaAmigos[indiceSorteado];
    
    let resultado = document.querySelector('#resultado');
    resultado.innerHTML = `<li>Nome sorteado: ${nomeSorteado}</li>`;
}


/*
  ** COMENTÁRIOS EXPLICATIVOS DO CÓDIGO **

   let listaAmigos = []; 
      - Inicializa uma lista vazia para armazenar os nomes digitados pelo usuário.
      - Os colchetes [] indicam que é um array, ou seja, uma lista onde podemos adicionar vários valores.

   function adicionarAmigo()
      - Lê o nome digitado no campo de entrada.
      - Verifica se o campo não está vazio (senão exibe um alerta). {linha 12 a 15}
      - Adiciona o nome na lista e atualiza a exibição dos nomes na tela.
      - Limpa o campo de entrada para facilitar novas inserções.

   function atualizarListaAmigos()
      - Percorre a lista e exibe cada nome na tela dentro de uma lista (<ul>).
      - Limpa a lista antes de atualizar para evitar duplicação.

   function sortearAmigo()
      - Verifica se há nomes na lista antes de sortear.
      - Gera um número aleatório correspondente a um índice da lista.
      - Exibe o nome sorteado na tela. (por conta do INNERHTML fica vpisivel na tela)

   O código impede que o usuário tente sortear sem antes adicionar nomes, evitando erros.
*/
