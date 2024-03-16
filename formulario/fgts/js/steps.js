var myForm1 = document.getElementById("myForm1");
var myForm2 = document.getElementById("myForm2");
var myForm3 = document.getElementById("myForm3");
var myForm4 = document.getElementById("myForm4");
var myForm5 = document.getElementById("myForm5");

var Next1 = document.getElementById("next1");
var Next2 = document.getElementById("next2");
var Next3 = document.getElementById("next3");
var Next4 = document.getElementById("next4");
var Next5 = document.getElementById("next5");

var Back1 = document.getElementById("back1");
var Back2 = document.getElementById("back2");
var Back3 = document.getElementById("back3");
var Back4 = document.getElementById("back4");

var progress = document.getElementById("progress");

// Função para validar o campo de nome
function validateNome() {
    var nomeInput = document.getElementById("nome");
    var nomeValue = nomeInput.value.trim();
    return nomeValue !== "" && !/\d/.test(nomeValue); // Verifica se não há números no nome
}

// Função para verificar se um CPF é válido
function isValidCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, '');
    if (cpf === '') return false;
    // Elimina CPFs invalidos conhecidos
    if (
        cpf.length !== 11 ||
        cpf === '00000000000' ||
        cpf === '11111111111' ||
        cpf === '22222222222' ||
        cpf === '33333333333' ||
        cpf === '44444444444' ||
        cpf === '55555555555' ||
        cpf === '66666666666' ||
        cpf === '77777777777' ||
        cpf === '88888888888' ||
        cpf === '99999999999'
    ) {
        return false;
    }
    // Valida 1o digito
    let add = 0;
    for (let i = 0; i < 9; i++) {
        add += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let rev = 11 - (add % 11);
    if (rev === 10 || rev === 11) {
        rev = 0;
    }
    if (rev !== parseInt(cpf.charAt(9))) {
        return false;
    }
    // Valida 2o digito
    add = 0;
    for (let i = 0; i < 10; i++) {
        add += parseInt(cpf.charAt(i)) * (11 - i);
    }
    rev = 11 - (add % 11);
    if (rev === 10 || rev === 11) {
        rev = 0;
    }
    if (rev !== parseInt(cpf.charAt(10))) {
        return false;
    }
    return true;
}

// Função para validar o número de telefone
function validateTelefone() {
    var telefoneInput = document.getElementById("celular");
    var telefone = telefoneInput.value.trim();
    // Regex para validar o formato do número de telefone com código de país +55
    const phoneRegex = /^\+55\s\(\d{2}\)\s9\s\d{4}-\d{4}$/;
    return phoneRegex.test(telefone);
}

// Função para verificar se uma data de nascimento é válida
function isValidDateOfBirth(dateString) {
    // Regex para validar o formato da data (dd/mm/yyyy)
    const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
    if (!dateRegex.test(dateString)) return false;

    // Verifica se a data é uma data válida
    const parts = dateString.split('/');
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10);
    const year = parseInt(parts[2], 10);
    const date = new Date(year, month - 1, day);
    return (
        date.getFullYear() === year &&
        date.getMonth() + 1 === month &&
        date.getDate() === day
    );
}

// Evento de clique para o botão "Próximo" do Formulário 1
Next1.onclick = function() {
    if (validateNome()) {
        myForm1.style.left = "-700px";
        myForm2.style.left = "80px";
        progress.style.left = "25%";
    } else {
        alert("Por favor, preencha o campo Nome.");
    }
}

// Evento de clique para o botão "Voltar" do Formulário 2
Back1.onclick = function() {
    myForm1.style.left = "80px";
    myForm2.style.left = "700px";
    progress.style.left = "0%";
}

// Evento de clique para o botão "Próximo" do Formulário 2
Next2.onclick = function() {
    var cpfInput = document.getElementById("cpf");
    var cpfValue = cpfInput.value.trim();

    if (isValidCPF(cpfValue)) {
        myForm2.style.left = "-700px";
        myForm3.style.left = "80px";
        progress.style.left = "50%";
    } else {
        alert("Por favor, preencha o campo CPF corretamente.");
    }
}
// Evento de clique para o botão "Voltar" do Formulário 3
Back2.onclick = function() {
    myForm2.style.left = "80px";
    myForm3.style.left = "700px";
    progress.style.left = "25%";
}

// Evento de clique para o botão "Próximo" do Formulário 3
Next3.onclick = function() {
    if (validateTelefone()) {
        myForm3.style.left = "-700px";
        myForm4.style.left = "80px";
        progress.style.left = "75%";
    } else {
        alert("Por favor, preencha o campo Telefone corretamente.");
    }
}

// Evento de clique para o botão "Voltar" do Formulário 4
Back3.onclick = function() {
    myForm3.style.left = "80px";
    myForm4.style.left = "700px";
    progress.style.left = "50%";
}

// Evento de clique para o botão "Enviar" do Formulário 5
Next4.onclick = function(event) {
    if (!isFormSubmitted) { // Verifica se o formulário já foi enviado
        var nomeInput = document.getElementById("nome");
        var nomeValue = nomeInput.value.trim();

        if (nomeValue === "" || /\d/.test(nomeValue)) {
            alert("Por favor, preencha o campo de Nome corretamente.");
            return false; // Impede o envio do formulário se houver erro de validação
        }

        if (!validateNascimento()) {
            alert("Por favor, preencha o campo de Nascimento corretamente.");
            return false; // Impede o envio do formulário se houver erro de validação
        }

        // Coleta os dados dos formulários 1, 2, 3 e 4
        var formData = collectFormData();

        // Obtém o número de telefone do formulário
        var telefone = document.getElementById("celular").value;

        // Atualiza o valor do atributo "value" do campo oculto "_redirect" com o número de telefone
        var redirectInput = document.querySelector('input[name="_redirect"]');
        redirectInput.value = "https://routeti.com.br/whatsapi/advogada-e126-4290-acf9.php?CallerID=" + telefone + "&mensagem=Parabéns%20você%20se%20inscrever%20no%20curso";

        // Envie o formulário
        document.getElementById("myForm4").submit();
    } else {
        // Impede o envio do formulário se já foi submetido
        event.preventDefault();
    }
};