document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const loginPopup = document.getElementById('loginPopup');
    const closePopup = document.getElementById('closePopup');

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

    // Enviar dados do formulário para o backend
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        fetch('http://localhost:3000/usuario/cadastrar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, password })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Usuário cadastrado com sucesso!');
                closeLoginPopup(); // Fecha o popup após o cadastro
            } else {
                alert('Erro ao cadastrar usuário: ' + data.message);
            }
        })
        .catch(error => {
            console.error('Erro:', error);
            alert('Erro ao cadastrar usuário.');
        });
    });

    // Mostrar o popup ao clicar no ícone de perfil
    document.getElementById('profileIcon').addEventListener('click', () => {
        loginPopup.style.display = 'block';
    });
});