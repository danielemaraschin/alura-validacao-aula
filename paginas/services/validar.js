import { validarDataNascimento } from "./validarDataNascimento.js";
import { validarCPF } from "./validarCPF.js";
import {recuperarEndereco} from "./recuperarEndereco.js";
import {validarPreco} from "./validarPreco.js";

const retornarMensagemDeErro = (tipo, validity) => {
  let mensagemDeErro = "";
  const tiposErro = [
  "valueMissing", 
  "typeMismatch",
  "tooShort",
  "rangeUnderflow",
  "customError",
  "patternMismatch"
];

  const mensagensDeErro = {
    email: {
      valueMissing: "o email é necessário",
      typeMismatch: "Este não é um e-mail válido"
    },

    senha: {
      valueMissing: "senha é necessária.",
      tooShort: "A senha deve ter no mínimo 4 caracteres;"
    }
    dataNascimento: {
      valueMissing: "Data de nascimento é necessária",
      rangeUnderflow: "A data mínima é 01/01/1901.",
      customError: "A idade mínima é 18 anos"
    }
    cpf: {
      valueMissing: "o CPF é necessário.",
      customError: "O CPF não é válido."
    }
    rg: {
      valueMissing: "o RG é necessário",
    }
    cep: {
      valueMissing: "o CEP é necessário",
      patternMismatch: "Este não é um cep válido",
      customError: "Este não é um cep válido",
    }
    logradouro: {
      valueMissing: "o lougradouro é necessário",
    }
    cidade: {
      valueMissing: "Cidade é necessária",
    }
    estado: {
      valueMissing: "o estado é necessário",
    }
    preco: {
      valueMissing: "o preço é necessário",
      customError:"O valor deve ser maior que zero."
    }
    nomeProduto: {
      valueMissing: "O nome do produto é necessário"
    }

  };

  tiposDeErro.forEach(erro => {
    if (validity[erro]) {
      mensagemDeErro = mensagensDeErro[tipo][erro];
    }
  });
  return mensagemDeErro;
};
export const validarInput = (input, adicionarErro = true) => {
  const classeElementoErro = "erro-validacao";
  const classeInputErro = "possui-erro-validacao";
  const elementoPai = input.parentNode;
  const elementoErroExiste = elementoPai.querySelector(".${classeElementoErro}"
  );
  const elementoErro = elementoErroExiste || document.createElement('div')
  const elementoEhValido = input.validity.valid;
  const tipo = input.dataset.tipo;
  const validadoresEspecificos = {
    dataNascimento: input => validarDataNascimento(input),
    cpf: input => validarCPF (input),
    cep: input => recuperarEndereco(input),
    preco: input => validarPreco(input)
  };

  if (validadoresEspecificos[tipo]) {
    validadoresEspecificos[tipo](input);
  }

  if (!elementoEhValido) {
    //adicionando as classes no elemento erro
    elementoErro.className = classeElementoErro;
    elementoErro.textContent = retornarMensagemDeErro(tipo, input.validity)
    //parametro tipo está no HTML, data-tipo,

    );
input.classList.add(classeInputErro);
//add um texto 
elementoErro.textContent = "Há um erro aqui!"
//onde add esse elemento (queremos embaixo do campo = AFTER)
input.after(elementoErro);
if (adicionarErro) {
  input.after(elementoErro);
  input.classList.add(classeInputErro);
}
  } else { //válido
  elementoErro.remove();
  input.classList.remove(classInputErro);
}
};