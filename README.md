# CRUD MERN Stack
Operações CRUD usando MERN Stack

Inserção, leitura, alteração, exclusão, validação, paginação e busca de produtos

## Pre-requisitos
    - Node v10.11.0

## Stack
### Backend
    - Node
    - Express
    - Typescript
    - MongoDb (mLab)

### Frontend
    - React
    - Redux, Redux Forms, Redux Thunk
    - Semantic-ui
    - Axios 

## Instalação e build
    1. clone do repositório -> git clone https://github.com/maabreve/products-mern-stack.git
    
    2. build backend - ir ate a pasta backend -> npm install && npm start
    
    3. build frontend (novo console) - ir ate a pasta frontend -> npm install && npm start 


## Arquitetura Backend
    
    Node, Express, MongoDB, Typescript, Generics

    A arquitetura de backend foi desenhada seguindo OOP, design patterns e generics para criação de classes base com operações de CRUD implementadas. 

    Camadas:
    - models - aramzena estrutura dos documents Mongo
    - repositories - camada responsável pelas operações nos documentos da base de dados
    - services - camada responsável pelas regras de negócio
    - controllers - camada responsável pela manipulacao das chamadas HTTP
    

    Database:
    A configuração do servidor pode ser alterada em server/config/database.ts. 
    

## Frontend
    - React
    - Redux, Redux Form, Redux Thunk  - gerenciamento de estado
    - Semantic-ui - controles e estilo
    - Axios- chamadas http  
