# :checkered_flag: Ótica HUB, uma loja de artigos ópticos!

Na HUB você pode comprar aquele óculos de grau ou solar pra ficar *"chavoso"*, vem pra HUB!

## :technologist: Membros da equipe

João Victor Carvalho de Oliveira - 499062

Thiago Viana Bezerra - 496254

## :people_holding_hands: Papéis ou tipos de usuário da aplicação

- Usuário logado
  - Administrador: Pode cadastrar, atualizar e remover produtos
  - Usuário comum: Pode adicionar produtos ao carrinho e/ou comprar
- Usuário não logado: Pode visualizar os produtos

## :spiral_calendar: Entidades ou tabelas do sistema

- Usuário
- Óculos
- Carrinho

## :triangular_flag_on_post: Principais funcionalidades da aplicação

- Acessível a todos:  
  - Os usuários poderão ler sobre nós da nossa empresa, assim como visualizar os produtos disponíveis no estoque.

- Acessível a usuários logados:
  - Os usuários poderão adicionar qualquer produto que esteja disponível no estoque ao carrinho, como também poderão comprar ,editar e excluir os produtos do seu carrinho.


## :desktop_computer: Tecnologias e frameworks utilizados

### **Frontend:**
- HTML, CSS, JavaScript e VueJS
### **Backend**
- Strapi

| Entidade| Criação | Leitura | Atualização | Remoção |
| --- | --- | --- | --- | --- |
| Usuario |   X     |    X    |     X       |
| Glasses |   X     |    X    |             |    X    |
| Cart    |   X     |    X    |     X       |    X    |

## :neckbeard: Rotas da API REST utilizadas

### Users
| Método HTTP | URL |
| --- | --- |
| GET | api//users/:idUser|
| GET | api/users/me?populate=role|
| POST | api//userId |
| POST | api/auth/local |
| PUT | api/users/:idUser |

### Cart
| Método HTTP | URL |
| --- | --- |
| GET | api/carts?filters[userId][id][$eq]=:idUser&populate=* |
| POST | api/carts |
| PUT | api/carts/:idCart |
| DELETE | api/carts/:idCart |


### Glasses
| Método HTTP | URL |
| --- | --- |
| GET | api/many-glasses?filters[type][$eq]=:glassesType|
| GET | api/many-glasses|
| POST | api/many-glasses|
| DELETE | api/many-glasses/:idGlasses |
