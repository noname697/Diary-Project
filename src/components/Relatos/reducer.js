export const UPDATE_SCREEN_WIDTH = "UPDATE_SCREEN_WIDTH";


const reducer = (estado, acao) => {
  switch (acao.tipo) {
    case UPDATE_SCREEN_WIDTH:
      return {
        ...estado,
        larguraDaTela: acao.larguraDaTela,
        limiteDeCaracteres:
          acao.larguraDaTela > 1024
            ? 150
            : acao.larguraDaTela > 600
            ? 100
            : 30,
      };
    default:
      return estado;
  }
};

export default reducer;