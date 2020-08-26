import { validarDataNascimento } from "./validarDataNascimento";

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
    dataNascimento: input => validarDataNascimento (input)
  };

  if (validadoresEspecificos[tipo]){
      validadoresEspecificos[tipo](input);
  }

  if (!elementoEhValido){
    //adicionando as classes no elemento erro
    elementoErro.className = classeElementoErro;
    elementoErro.textContent = retornarMensagemDeErro( tipo, validity)

    );
    input.classList.add(classeInputErro);
    //add um texto 
    elementoErro.textContent = "Há um erro aqui!"
    //onde add esse elemento (queremos embaixo do campo = AFTER)
    input.after(elementoErro);
    if(adicionarErro){
      input.after(elementoErro);
      input.classList.add(classeInputErro);
    }
  } else{ //válido
    elementoErro.remove();
    input.classList.remove(classInputErro);
  }
};