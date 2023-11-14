document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("signin");
  
    // Adiciona um evento de clique ao botão "Cadastre-se"
    const signupButton = document.querySelector('button[type="submite"]');
    signupButton.addEventListener("click", function () {
  
      // Simula o redirecionamento para a home
      alert("Redirecionando para a página de cadastro...");
      window.location.href = "paginaHome.html";
    });
  
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const usuarioInput = document.querySelector('input[type="text"]');
      const emailInput = document.querySelector('input[type="text"]');
      const passwordInput = document.querySelector('input[type="password"]');
      const password2Input = document.querySelector('input[type="password"]');
  
      const emailValue = emailInput.value.trim();
      const passwordValue = passwordInput.value.trim();
  
      // Verifica se o e-mail contém o "@" na string
      if (!isValidEmail(emailValue)) {
        alert("Por favor, insira um endereço de e-mail válido.");
        return;
      }
  
      if (emailValue === "" || passwordValue === "") {
        alert("Por favor, preencha todos os campos.");
      } else {
        // Verifica se o botão "terms" foi selecionado
        const TermsCheckbox = document.querySelector('input[type="checkbox"]');
        if (!TermsCheckbox.checked) {
  
          // Simula o envio de um código para o e-mail
          alert("Você deve concordar com os termos para se cadastrar.");
  
          // Limpa os campos do formulário (opcional)
          form.reset();
        } else {
          // Aqui vamos adicionar a lógica para enviar os dados do formulário para o servidor
  
          // Simula o redirecionamento para a próxima página
          alert("Redirecionando para a próxima página...");
          window.location.href = "proximaPagina.html";
          // Resetar o formulário após o redirecionamento (opcional)
          form.reset();
        }
      }
    });
  
    // Função para validar o formato do e-mail
    function isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  });