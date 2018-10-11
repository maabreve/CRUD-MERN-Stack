# CRUD MERN Stack
Operações CRUD usando MERN Stack

Inserção, Leitura, Alteração, Exclusão, Validação, Paginação e Busca de Produtos

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

## Instalação e start 
    1. clone do repositório -> git clone https://github.com/maabreve/products-mern-stack.git
    
    2. start backend - ir ate a pasta backend -> npm install && npm start
    
    3. start frontend (novo console) - ir ate a pasta frontend -> npm install && npm start 


## Backend Architecture
    
    Node, Express, MongoDB, Typescript, Generics

    A arquitetura de backend foi desenhada seguindo OOP, design patterns, com as seguintes camadas e suas respectivas responsabilidades:

    - models - aramzena estrutura dos documents Mongo
    
    - repositories - camada responsável pelas operações nos documentos na base de dados
    
    - services - camada responsável pelas regras de negócio
    
    - controllers - camada responsável pela manipulacao das chamadas HTTP
    

    