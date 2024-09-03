### Instalação

## Clone o repositório:
    git clone <URL_DO_REPOSITORIO>
    cd nome-do-projeto

## Instale as dependências:
    npm install

## Inicie o servidor:
    npm start

    O servidor estara rodando na porta 3333

## Configuração do Banco de Dados:

    O banco de dados crud_api já está configurado com as tabelas users e products. Aqui está a configuração do banco:
    Banco de Dados: crud_api
    Tabelas: users, products

## A conexão com o banco de dados já está definida da seguinte forma:

    const mysql = require('mysql2');
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'crud_api'
    });

    connection.connect((err) => {
        if (err) {
            throw err;
        } else {
            console.log('Mysql conectado');
        }
    });

    module.exports = connection;
    Dados já inseridos:

    Um usuário administrador (adm) com email cleber@gmail.com e senha 220208.
    Produtos de exemplo com detalhes como nome, descrição, preço e imagem.

### Utilização da API

## Cadastro/Login de Usuário

    Endpoint: POST /usuario/cadastrar
    Descrição: Cadastra um novo usuário ou realiza o login se o e-mail já estiver cadastrado.
    Request Body:
    {
    "name": "Nome do Usuário",
    "email": "email@exemplo.com",
    "password": "sua_senha"
    }
    Response:
    201: Usuário cadastrado com sucesso.
    200: Login realizado com sucesso.
    401: Senha incorreta.
    500: Erro no servidor.

## Listagem de Usuários
    Endpoint: GET /usuario/listar
    Descrição: Retorna todos os usuários cadastrados.
    Response:
    201: Sucesso.
    400: Sem sucesso.

## Edição de Usuário
    Endpoint: PUT /usuario/editar/:id
    Descrição: Atualiza os dados de um usuário existente.
    Request Body:
    {
    "name": "Novo Nome",
    "email": "novoemail@exemplo.com"
    }

    Response:
    200: Usuário atualizado com sucesso.
    404: Usuário não encontrado.
    500: Erro no servidor.

## Deleção de Usuário
    Endpoint: DELETE /usuario/deletar/:id
    Descrição: Deleta um usuário pelo ID.
    Response:
    200: Usuário deletado com sucesso.
    404: Usuário não encontrado.
    500: Erro no servidor.

## Cadastro de Produto
    Endpoint: POST /produto/cadastrar
    Descrição: Cadastra um novo produto.
    Request Body:
    {
        "name": "Nome do Produto",
        "description": "Descrição do Produto",
        "price": "25,99",
        "imagem_link": "http://exemplo.com/imagem.jpg"
    }
    Response:
    201: Produto cadastrado com sucesso.
    500: Erro no servidor.

## Listagem de Produtos
    Endpoint: GET /produto/listar
    Descrição: Retorna todos os produtos cadastrados.
    Response:
    201: Sucesso.
    400: Sem sucesso.

## Deleção de Produto
    Endpoint: DELETE /produto/deletar/:id
    Descrição: Deleta um produto pelo ID.
    Response:
    200: Produto deletado com sucesso.
    404: Produto não encontrado.
    500: Erro no servidor.

## Favoritar Produto
    Endpoint: POST /produto/favoritar/:id
    Descrição: Adicionar um item aos favoritos pelo ID.
    Response:
    500: Erro no servidor
    404: Produto não encontrado
    500: Erro ao favoritar produto
    200: Produto favoritado com sucesso

## Lista de favoritos
    Endpoint: GET /produtos/favoritos
    Descrição: mostrar os items da lista dos favoritos.
    Response:
    500: Erro ao listar produtos favoritados
    404: Nenhum produto favoritado encontrado
    201: Produtos favoritados listados com sucesso

### Testes
    Os endpoints podem ser testados utilizando ferramentas como Postman, Insomnia ou o ThunderClient. Certifique-se de que o servidor esteja em execução e utilize as URLs conforme especificado acima.
