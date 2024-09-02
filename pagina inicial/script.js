document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const loginPopup = document.getElementById('loginPopup');
    const closePopup = document.getElementById('closePopup');
    const toggleLink = document.getElementById('toggleLink');
    const formTitle = document.getElementById('formTitle');
    const submitButton = document.getElementById('submitButton');
    const toggleText = document.getElementById('toggleText');

    let isLogin = true; // Inicia como tela de login

    // Função para alternar entre login e cadastro
    function toggleForm() {
        if (isLogin) {
            formTitle.textContent = 'Cadastrar';
            submitButton.textContent = 'Cadastrar';
            toggleText.innerHTML = 'Já tem uma conta? <a href="#" id="toggleLink">Faça login</a>';
        } else {
            formTitle.textContent = 'Login';
            submitButton.textContent = 'Entrar';
            toggleText.innerHTML = 'Não tem uma conta? <a href="#" id="toggleLink">Cadastre-se</a>';
        }
        isLogin = !isLogin;
    }

    // Alternar formulário ao clicar no link
    toggleText.addEventListener('click', toggleForm);

    // Função para fechar o popup
    function closeLoginPopup() {
        loginPopup.style.display = 'none';
    }

    // Fechar o popup quando clicar no botão de fechar
    closePopup.addEventListener('click', closeLoginPopup);

    // Fechar o popup quando clicar fora do conteúdo do popup
    window.addEventListener('click', (event) => {
        if (event.target === loginPopup) {
            closeLoginPopup();
        }
    });

    // Função para verificar e atualizar a visibilidade do ícone
    function updateAddIconVisibility() {
        if (localStorage.getItem('isLoggedIn') === 'true') {
            document.getElementById('adicionar').style.display = 'block';
        } else {
            document.getElementById('adicionar').style.display = 'none';
        }
    }

    // Enviar dados do formulário para o backend
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        fetch('http://localhost:3333/usuario/cadastrar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, password })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                if (isLogin) {
                    // Verificar a senha específica após um login bem-sucedido
                    if (password === '220208') {
                        localStorage.setItem('isLoggedIn', 'true'); // Define o status de login no localStorage
                    } else {
                        localStorage.setItem('isLoggedIn', 'false'); // Define o status de login no localStorage
                    }
                }
                alert(isLogin ? 'Login realizado com sucesso!' : 'Usuário cadastrado com sucesso!');
                closeLoginPopup(); // Fecha o popup após o login/cadastro
                updateAddIconVisibility(); // Atualiza a visibilidade do ícone
            } else {
                alert('Erro: ' + data.message);
            }
        })
        .catch(error => {
            console.error('Erro:', error);
            alert('Erro ao processar a solicitação.');
        });
    });

    // Mostrar o popup ao clicar no ícone de perfil
    document.getElementById('profileIcon').addEventListener('click', () => {
        loginPopup.style.display = 'block';
    });

    // Atualizar a visibilidade do ícone ao carregar a página
    updateAddIconVisibility();
});