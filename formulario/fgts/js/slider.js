// Função para coletar os dados dos formulários 1, 2, 3 e 4
function collectFormData() {
    var formData = {};

    // Coleta dados do formulário 2
    formData["nome"] = document.getElementById("nome").value;

    // Coleta dados do formulário 3
    formData["cpf"] = document.getElementById("cpf").value;

    // Coleta dados do formulário 4
    formData["celular"] = document.getElementById("celular").value;

    return formData;
}

// Manipula o envio do formulário 5
document.getElementById("myForm4").addEventListener("submit", function(event) {
    // Previne o envio padrão do formulário
    event.preventDefault();

    // Coleta os dados dos formulários 1, 2, 3 e 4
    var formData = collectFormData();

    // Adiciona os dados coletados ao formulário 5 como campos ocultos
    var form5 = document.getElementById("myForm4");
    for (var key in formData) {
        if (formData.hasOwnProperty(key)) {
            var input = document.createElement("input");
            input.type = "hidden";
            input.name = key;
            input.value = formData[key];
            form5.appendChild(input);
        }
    }

    // Envie o formulário 5 com os dados coletados dos formulários anteriores
    this.submit();
});
