function cadastrar(event) {//Função executada durante a submissão do form
    event.preventDefault(); //previne o carregamento padrão

    //VALIDAÇÃO DO NOME
    let nome = document.getElementById("nome").value; //busca o valor do input do nome
    if (nome.trim().length < 4) { //Verifica se o nome tem pelo menos 4 caracteres
        alert("Nome completo deve ter pelo menos 4 caracteres");
        return;
        //caso não atenda, exibe uma mensagem de erro e sai do método
    }

    //VALIDAÇÃO DO EMAIL
    /*seu código aqui */
    let email = document.getElementById("email").value; //Busquei o valor do campo email
    email = email.trim(); //Tirei os caracteres em branco

    let regexEmail = new RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$");

    if (!regexEmail.test(email)){
        alert("Email inválido");
        return;
    }

    //VALIDAÇÃO DO CPF
    /*seu código aqui */

    //VALIDAÇÃO DO CURSO
    /*seu código aqui */

    //VALIDAÇÃO DA DATA DE NASCIMENTO
    /*seu código aqui */

    //VALIDAÇÃO DO GÊNERO
    /*seu código aqui */

    //Caso obtenha sucesso, exibe uma mensagem de sucesso e sai do método
    alert("Cadastrado com sucesso!");
    //Limpar campos
}