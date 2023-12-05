## Tecnologias utilizadas

* Node.js (21.3.0)
* TypeScript
* Express.js
* Prisma ORM
* PostgreSQL
* Joi


## Rodando localmente

1. Clone o projeto

```bash
  git clone https://github.com/thiago-arend/api-vent.git
```

#

2. Abra o terminal dentro da pasta onde você clonou o repositório. Entre no diretório do projeto

```bash
  cd api-vent
```

#

3. Instale as dependências

```bash
  npm install
```

#

4. Copie o conteúdo do arquivo '.env.example' e cole em um arquivo '.env' recém criado. Em seguida, altere as variáveis DATABASE_URL (deve conter a string de conexão com seu banco de dados postgreSQL) e JWT_SECRET (deve conter uma senha para geração do token JWT)


#

5. Rode o comando para geração do banco de dados de desenvolvimento

```bash
  npm run dev:migration:run
```

#

8. Rode o comando para subir o servidor

```bash
  npm run dev
```

## Lista de rotas

<details>
<summary> 
<b><font color="#D9730D">POST</font></b><font> /user 
</summary>
<br>

* Cria um usuário
#
* Input:

```typescript
{ 
  name: string,
  email: string,
  password: string,
}
```
#
* Output: 

```typescript
{
	id: number,
    name: string,
    email: string,
    password: string,
	createdAt: Date,
	updatedAt: Date,
}
```
#
* Regras
  * Todos os campos são obrigatórios; se um deles estiver faltando ou não estiver no formato correto será retornado <font color="red">422 (Unprocessable Entity)</font>
  * Em caso de e-mail já cadastrado, será retornado <font color="red">409 (Conflict)</font>

</details>

<details>
<summary> 
<b><font color="#D9730D">POST</font></b><font> /login 
</summary>
<br>

* Realiza o login do usuário
#
* Input:

```typescript
{ 
	email: string,
	password: string
}
```
#
* Output: 

```typescript
{
	id: number,
    token: string // token JWT
    userId: number,
    createdAt: Date,
	updatedAt: Date,
}
```
#
* Regras
  * Todos os campos são obrigatórios; se um deles estiver faltando ou não estiver no formato correto será retornado <font color="red">422 (Unprocessable Entity)</font>
  * Em caso de e-mail e/ou senha incorretos, sera retornado <font color="red">401 (Unauthorized)</font>

</details>

<details>
<summary> 
<b><font color="#448375">GET</font></b><font> /users
</summary>
<br>

* Lista todos os usuários
#
* Headers: string no formato "Bearer token"
* Output: array de objetos com usuários

```typescript
[
    {
        id: number,
        name: string,
        email: string,
        password: string,
        createdAt: Date,
        updatedAt: Date,
    },
    ...
]
```
#
* Regras
  * Caso o token fornecido seja inválido, será retornado <font color="red">401 (Unauthorized)</font>
  * Caso o token fornecido tenha expirado (mais de 30 minutos), será retornado <font color="red">401 (Unauthorized)</font>

</details>