document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("Cadastro");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Evita o envio do formulário padrão
  
      const username = form.querySelector('input[type="text"]').value;
      const email = form.querySelector('input[type="text"]').value;
      const password = form.querySelector('input[type="password"]').value;
      const confirmPassword = form.querySelector('input[type="password"]').value;
      const termsCheckbox = form.querySelector('input[type="checkbox"]');
  
      // Verifica se o checkbox "Terms" está marcado
      if (!termsCheckbox.checked) {
        alert("Você precisa concordar com os termos para se cadastrar.");
        return; // Impede a submissão do formulário
      }
  
      // Verifica se o e-mail contém '@'
      if (email.indexOf('@') === -1) {
        alert("Por favor, insira um e-mail válido.");
        return;
      }
  
      // Verifica se as senhas são iguais
      if (password !== confirmPassword) {
        alert("As senhas não coincidem. Por favor, verifique.");
        return;
      }
  
      // Se todas as verificações passarem, redireciona para a página desejada
      alert("Cadastro realizado com sucesso! Redirecionando...");
      window.location.href = "sua_pagina_de_redirecionamento_cadastro.html";
    });
  
    // Adiciona um redirecionamento simples para o botão de login
    const loginButton = form.querySelector('button[type="submit"]');
    loginButton.addEventListener("click", function () {
      window.location.href = "sua_pagina_de_redirecionamento_login.html";
    });
  });