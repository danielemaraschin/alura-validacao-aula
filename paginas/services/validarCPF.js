export const validarCPF = input =>  {
    const cpfNumeros = input.value.replace(/\D/g, "");

    if (ehUmCpfComNumerosRepetidos (cpfNumeros)) {
        input.setCustomValidity("Este não é um CPF válido");
        return;
    }

const primeiraParteCPF = cpfNumeros.substr(0,9).split("");
const primeiroDigitoCPF = Number(cpfNumeros.chartAt(9)); 
const primeiroDigitoCalculado = calcularDigito(primeiraParteCPF,10);
// para vermos se é um cpf válido, devemos verificar o valor do digito
// multiplicando cada numero do cpf do 10 ao 2.
//024.495.290-63
//0x10,2x9,4x8,4x7... e vai somando esses resultados

if (primeiroDigitoCPF !== primeiroDigitoCalculado){
    input.setCustomValidity("Este não é um CPF válido");
    return;
}


const segundaParteCPF = cpfNumeros.substr(0,10).split("");
const segundoDigitoCPF = Number(cpfNumeros.chartAt(10)); 
const segundoDigitoCalculado = calcularDigito(primeiraParteCPF,11);

if (segundoDigitoCPF !== segundoDigitoCalculado){
    input.setCustomValidity("Este não é um CPF válido");
    return;
}

    input.setCustomValidity("");
    return;
};



const ehUmCpfComNumerosRepetidos = (cpf) => {
    const cfpsInvalidos =[
        "11111111111",
        "22222222222",
        "33333333333",
        "44444444444",
        "55555555555",
        "66666666666",
        "77777777777",
        "88888888888",
        "99999999999"
    ];
    return cfpsInvalidos.includes(cpf);
}
//multiplicador é o primeiro parametro pq eh o q recebe no calcular total e
// dps os parametros sao o do reduce (o resultado e o item que ele esta no array - ou seja, o numero atual)
//resultado + numero atual * multiplicador --
const calcularTotal = (multiplicador) => (resultado, numeroAtual) => resultado +numeroAtual*multiplicador--
const calcularDigito = (Partecpf, multiplicador) =>{
//valor total = multiplicacao dos numeros
// resto= total % MODULO 11 (TOTAL/11);
//digito = 11- resto 
//(em caso de o digito ser maior que 9 retorna 0)
//primeiro digito começa a multip em 10
//segundo digito comeca a multiplicacao em 11
    const total = Partecpf.reduce(calcularTotal(multiplicador),0);
    const resto = total % 11;
    
    const digito = 11 - resto;
    if (resto > 9){
        digito = 0;
    }
    	return digito;
}




