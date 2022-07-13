const login = document.getElementById('email');
const senha = document.getElementById('password');
const buttonRegister = document.getElementById('entrar');

function alerta() {
  if (login.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
buttonRegister.addEventListener('click', alerta);
