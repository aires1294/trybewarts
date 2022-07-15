const login = document.getElementById('email');
const senha = document.getElementById('password');
const buttonRegister = document.getElementById('entrar');
const checkBtn = document.getElementById('agreement');
const subBtn = document.getElementById('submit-btn');

function alerta() {
  if (login.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
buttonRegister.addEventListener('click', alerta);

checkBtn.addEventListener('click', () => {
  if (checkBtn.checked === true) {
    subBtn.disabled = false;
  } else {
    subBtn.disabled = true;
  }
});
