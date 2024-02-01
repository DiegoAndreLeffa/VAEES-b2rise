## API de e-commerce

### Iniciando a api

- Depois de fazer o clone api, abra ela no editor de código da sua escolha, abra o terminal e rode o comando `yarn` ou `npm install` para baixar as dependências da api.

- Para rodar a api, insera o comando `yarn run dev` ou `npm run dev` no terminal.

- Pronto, a api já esta rodando e pronta para fazer as suas requisição.

---


### Rotas

### Produtos

`POST /products`

Adiciona um novo produto ao catálogo.

Corpo da Requisição:

```
{
	"id": "8fde44cb-cac0-41c5-8643-786d81f40565",
	"title": "Adesivos Neon - Pacote com 15",
	"price": 7.99,
	"description": "Pacote com 15 adesivos neon vibrantes",
	"category": "Adesivos",
	"image": "caminhodasuaimagem6.jpg"
}
```
Retorno:

```
{
	"title": "Adesivos Neon - Pacote com 15",
	"price": 7.99,
	"description": "Pacote com 15 adesivos neon vibrantes",
	"category": "Adesivos",
	"image": "caminhodasuaimagem6.jpg",
	"id": "3fea86c9-443e-4176-bff2-514528e5714f"
}
```

`GET /products`

Lista todos os produtos cadastrados no catálogo.

### Query Parameters:

page, pageSize, category, priceFilter, title

Retorno:

```
[
	{
		"title": "Produto 1",
		"price": 19.99,
		"description": "Descrição do Produto 1",
		"category": "Categoria 1",
		"image": "caminho/para/imagem1.jpg",
		"id": "123456"
	},
	{
		"title": "Produto 2",
		"price": 29.99,
		"description": "Descrição do Produto 2",
		"category": "Categoria 2",
		"image": "caminho/para/imagem2.jpg",
		"id": "789012"
	},
	...
]
```

`GET /products/:id`

Busca um produto pelo seu ID.

Retorno:

```
{
	"title": "Produto 1",
	"price": 19.99,
	"description": "Descrição do Produto 1",
	"category": "Categoria 1",
	"image": "caminho/para/imagem1.jpg",
	"id": "123456"
}
```


`GET /products/category/:category`

Busca todos os produtos de uma determinada categoria.

Retorno:

```
[
	{
		"title": "Produto 1",
		"price": 19.99,
		"description": "Descrição do Produto 1",
		"category": "Categoria Específica",
		"image": "caminho/para/imagem1.jpg",
		"id": "123456"
	},
	{
		"title": "Produto 2",
		"price": 29.99,
		"description": "Descrição do Produto 2",
		"category": "Categoria Específica",
		"image": "caminho/para/imagem2.jpg",
		"id": "789012"
	},
	...
]
```


`PATCH /products/:id`

Atualiza as informações de um produto específico com base no ID fornecido.

Retorno:

```
{
	"title": "Produto Atualizado",
	"price": 24.99,
	"description": "Nova descrição do produto",
	"category": "Nova Categoria",
	"image": "caminho/para/nova/imagem.jpg",
	"id": "123456"
}
```

`DELETE /product/:id`

Remove um produto com base no ID fornecido.

Retorno:

Sem conteúdo (No Content)

### Usuarios

`POST /users`

Cria um novo usuário.

Corpo da Requisição:

```
{
    "email": "usuario1@example.com",
    "username": "user1",
    "password": "senha123",
    "first_name": "John",
    "last_name": "Doe"
}
```
Retorno:

```
{
	"email": "usuario1@example.com",
	"username": "user1",
	"first_name": "John",
	"last_name": "Doe",
	"id": "a46d8e05-076f-4c60-868f-461cf050cdb1"
}
```

`GET /users`

Obtém todos os usuários cadastrados.

Retorno:

```
[
	{
		"email": "usuario1@example.com",
		"username": "user1",
		"first_name": "John",
		"last_name": "Doe",
		"id": "a46d8e05-076f-4c60-868f-461cf050cdb1"
	},
	{
		"email": "usuario2@example.com",
		"username": "user2",
		"first_name": "Jane",
		"last_name": "Doe",
		"id": "b79c6f38-23b5-4ef9-a86a-9854d2a48eab"
	},
	...
]
```

`GET /users/:id`

Obtém informações de um usuário específico pelo seu ID.

Retorno:

```
{
	"email": "usuario1@example.com",
	"username": "user1",
	"first_name": "John",
	"last_name": "Doe",
	"id": "a46d8e05-076f-4c60-868f-461cf050cdb1"
}
```

`PATCH /users/:id`

Atualiza as informações do usuário com o `ID` fornecido.

Retorno:

```
{
	"email": "usuario1@example.com",
	"username": "user1",
	"first_name": "John",
	"last_name": "Doe",
	"id": "a46d8e05-076f-4c60-868f-461cf050cdb1"
}
```

`DELETE /users/:id`

Remove um usuário com base no ID fornecido.

Retorno:

Sem conteúdo (No Content)

### Ordens de Compra


`POST /orders`

Cria uma ordem de compra para um produto específico.

Corpo da Requisição:

```
{
	"nameUser": "user1",
	"nameProduct": "Camiseta Estampada - Modelo 1",
	"quantity": 10
}
```

Retorno:

```
{
	"id": "88eeb187-c3c2-4fad-bd83-cb544b9d2251",
	"quantity": 10,
	"price": "199.90",
	"purchaseOrder": {
		"id": "8c76c2e6-84b8-4276-9a07-f441d20f60c6",
		"date": "2024-02-01T13:11:15.281Z"
	},
	"product": {
		"id": "44dfb8f7-5241-464f-869e-b2e7b2a13c1f",
		"title": "Camiseta Estampada - Modelo 1",
		"price": "19.99",
		"description": "Camiseta com estampa exclusiva - Modelo 1",
		"category": "Camisetas",
		"image": "caminhodasuaimagem1.jpg"
	}
}
```

`GET /orders`

Recupera todas as ordens de compra com base nos parâmetros fornecidos.

### Query Parameters:

startDate, endDate, minPrice, maxPrice, minQuantity, maxQuantity

Retorno:

```
[
	{
		"id": "88eeb187-c3c2-4fad-bd83-cb544b9d2251",
		"quantity": 10,
		"price": "199.90",
		"purchaseOrder": {
			"id": "8c76c2e6-84b8-4276-9a07-f441d20f60c6",
			"date": "2024-02-01T13:11:15.281Z"
		},
		"product": {
			"id": "44dfb8f7-5241-464f-869e-b2e7b2a13c1f",
			"title": "Camiseta Estampada - Modelo 1",
			"price": "19.99",
			"description": "Camiseta com estampa exclusiva - Modelo 1",
			"category": "Camisetas",
			"image": "caminhodasuaimagem1.jpg"
		}
	},
	...
]
```