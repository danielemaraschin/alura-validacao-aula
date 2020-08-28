const cpfNumeros = input.value.replace(".", "");
var cpfsInvalidos = ["11111111111",
"22222222222",
"33333333333",
"44444444444",
"55555555555",
"66666666666",
"77777777777",
"88888888888",
"99999999999"];

function  ehUmCpfComNumerosRepetidos (){
    
    for (var posicao = 0; posicao < ehUmCpfComNumerosRepetidos.length; posicao++) {
            
        if (cpfNumeros == ehUmCpfComNumerosRepetidos[posicao] ) {
            input.setCustomValidity("Este não é um CPF válido");
            break;
        }
    }; 
};
