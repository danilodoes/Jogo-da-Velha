document.addEventListener("DOMContentLoaded", () => { // função para rodar o código quando a página estiver toda carregada

  let squares = document.querySelectorAll(".square"); //armazenando todos os itens que tiverem "square" como classe

  squares.forEach(square => {
    square.addEventListener("click", pressed);
  });


  function pressed(event) {
    let square = event.target; // Onde foi clicado
    // console.log(square)
    let position = square.id // Retorna o ID de onde foi clicado
    // console.log(`Quem jogou foi o ${playerTime}. Na posição: ${position}`);

    if (move(position)) {
      setTimeout(() => {
        alert("O jogo acabou!");
      }, 20)    //utilizei esse timeout apenas para dar tempo de trocar o emoji para o vencedor.

    }; // passa qual posição foi clicada pra função no game.js, já conferindo se acabou o jogo.
    updateSquares();
  };


  function updateSquares() {
    let squares = document.querySelectorAll(".square");


    squares.forEach((square) => {
      let position = square.id;
      let symbol = board[position];
      console.log(`Posição: ${position}, Símbolo: ${symbol}`);

      if (symbol != "") {
        square.classList.add(symbol);
      }
    });
  }


})