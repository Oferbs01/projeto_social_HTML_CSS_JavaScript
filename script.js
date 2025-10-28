// Função para aplicar máscaras aos campos de CPF, telefone e CEP
document.addEventListener("DOMContentLoaded", function () {
  const cpf = document.getElementById("cpf");
  const telefone = document.getElementById("telefone");
  const cep = document.getElementById("cep");
  const form = document.getElementById("formCadastro");

  // Máscara de CPF: 000.000.000-00
  cpf.addEventListener("input", function () {
    let valor = cpf.value.replace(/\D/g, "");
    valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
    valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
    valor = valor.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    cpf.value = valor;
  });

  // Máscara de telefone: (00) 00000-0000
  telefone.addEventListener("input", function () {
    let valor = telefone.value.replace(/\D/g, "");
    valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2");
    valor = valor.replace(/(\d{5})(\d{4})$/, "$1-$2");
    telefone.value = valor;
  });

  // Máscara de CEP: 00000-000
  cep.addEventListener("input", function () {
    let valor = cep.value.replace(/\D/g, "");
    valor = valor.replace(/^(\d{5})(\d)/, "$1-$2");
    cep.value = valor;
  });

  // Validação e envio do formulário
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const camposObrigatorios = form.querySelectorAll("[required]");
    let formValido = true;

    camposObrigatorios.forEach((campo) => {
      if (!campo.value.trim()) {
        campo.style.border = "2px solid red";
        formValido = false;
      } else {
        campo.style.border = "1px solid #fafafaff";
      }
    });

    if (!formValido) {
      alert("Por favor, preencha todos os campos obrigatórios corretamente.");
      return;
    }

    // Exibe mensagem de sucesso
    alert("✅ Cadastro realizado com sucesso!");
    form.reset();
  });
});
