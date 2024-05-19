// Seleciona o botão de tema
const themeButton = document.querySelector('#theme-button');

// Função que atualiza o botão de tema, salva a opção no navegador e atualiza o documento HTML
function updateTheme(theme) {
  localStorage.setItem('theme', theme);
  document.querySelector('html').setAttribute('data-theme', theme);
  console.log(localStorage.getItem('theme'));
}

// Ao carregar a página, se não tiver tema salvo no navegador, deixar o navegador no tema escuro
if (localStorage.getItem('theme') == null) {
  updateTheme('dark');
}

// Se ao carregar, a página estiver no modo escuro, o botão fica desligado
// se não, fica ligado
if (localStorage.getItem('theme') == 'dark') {
  themeButton.checked = false;
  updateTheme('dark');
} else {
  themeButton.checked = true;
  updateTheme('light');
}

// Detecta clicks no botão de tema
themeButton.addEventListener('change', () => {
  if (themeButton.checked) {
    updateTheme('light');
  } else {
    updateTheme('dark');
  }
});
