const cpfNumeros = input.value.replace(".", "");

cpfNumeros = cpfNumeros.substr(0,5);

const ehUmCpfComNumerosRepetidos = (cpf) => {
    var cpfsInvalidos = ["11111111111",
    "22222222222",
    "33333333333",
    "44444444444",
    "55555555555",
    "66666666666",
    "77777777777",
    "88888888888",
    "99999999999"];
        
    for (var posicao = 0; posicao < cpfsInvalidos.length; posicao++) {
        if (cpf == cpfsInvalidos[posicao] ) {
            input.setCustomValidity("Este não é um CPF válido");
            return;
        }

    }
}

....................................
var NomeString = "DANIELE";

NomeString = NomeString.split("");
console.log(NomeString)

no console: 
retorna array = [D, A,N , I, E, L, E];

