export const validarCPF = input =>  {
    const cpfNumeros = input.value.replace(".", "");

    if (ehUmCpfComNumerosRepetidos (cpfNumeros)) {
        input.setCustomValidity("Este não é um CPF válido");
        return;
    }

const primeiraParteCPF = cpfNumeros.substr(0,9).split("");
const primeiroDigitoCPF = Number(cpfNumeros.chartAt(9)); 
const primeiroDigitoCalculado = calcularDigito(primeiraParteCPF,10);


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
const calcularTotal = (multiplicador) => (resultado, numeroAtual) => resultado +numeroAtual*multiplicador
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




