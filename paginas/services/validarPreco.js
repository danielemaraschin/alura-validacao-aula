export const validarPreco = (input) => {
    const preco = input.formatToNumber();

    if(preco === 0) {
        input.setCustomValidity("O valor deve ser maior que zero.");
        return;
    }

    input.setCustomValidity("");
    return;
};