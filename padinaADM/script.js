document.addEventListener('DOMContentLoaded', () => {
    const addProductBtn = document.getElementById('addProductBtn');
    const deleteProductBtn = document.getElementById('deleteProductBtn');
    const formContainer = document.getElementById('formContainer');

    // Função para adicionar um produto
    addProductBtn.addEventListener('click', () => {
        formContainer.style.display = 'block';
        formContainer.innerHTML = `
            <p>Nome do produto: <input type="text" id="name" name="name" placeholder="Digite o nome do produto"></p>
            <p>Descrição do produto: <input type="text" id="description" name="description" placeholder="Digite a descrição"></p>
            <p>Preço do produto: <input type="number" id="price" name="price" placeholder="Digite o preço"></p>
            <p>Link da imagem: <input type="text" id="imagem_link" name="imagem_link" placeholder="Digite o link da imagem"></p>
            <button id="submitProductBtn">Adicionar produto</button>
        `;

        document.getElementById('submitProductBtn').addEventListener('click', () => {
            const name = document.getElementById('name').value;
            const description = document.getElementById('description').value;
            const price = document.getElementById('price').value;
            const imagem_link = document.getElementById('imagem_link').value;

            if (!name || !description || !price || !imagem_link) {
                alert('Por favor, preencha todos os campos.');
                return;
            }

            const productData = {
                name: name,
                description: description,
                price: parseFloat(price),
                imagem_link: imagem_link
            };

            fetch('http://localhost:3333/produto/cadastrar', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(productData)
            })
            .then(response => response.json())
            .then(data => {
                console.log('Resposta da API:', data); // Para depuração
                if (data.success) {
                    alert('Produto cadastrado com sucesso!');
                    formContainer.style.display = 'none';
                } else {
                    alert('Erro ao cadastrar produto: ' + data.message);
                }
            })
            .catch(error => {
                console.error('Erro ao cadastrar produto:', error);
                alert('Erro ao cadastrar produto.');
            });
        });
    });

    // Função para deletar um produto
    deleteProductBtn.addEventListener('click', () => {
        formContainer.style.display = 'block';
        formContainer.innerHTML = `
            <p>ID do produto para deletar: <input type="number" id="productId" name="productId" placeholder="Digite o ID do produto"></p>
            <button id="submitDeleteProductBtn">Deletar produto</button>
        `;

        document.getElementById('submitDeleteProductBtn').addEventListener('click', () => {
            const productId = document.getElementById('productId').value;

            if (!productId) {
                alert('Por favor, informe o ID do produto.');
                return;
            }

            fetch(`http://localhost:3333/produto/deletar/${productId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => response.json())
            .then(data => {
                console.log('Resposta da API:', data); // Para depuração
                if (data.success) {
                    alert('Produto deletado com sucesso!');
                    formContainer.style.display = 'none';
                } else {
                    alert('Erro ao deletar produto: ' + data.message);
                }
            })
            .catch(error => {
                console.error('Erro ao deletar produto:', error);
                alert('Erro ao deletar produto.');
            });
        });
    });
});