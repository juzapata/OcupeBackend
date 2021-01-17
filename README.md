# Ocupe
Projeto final do Hackathon CCR - 2ª edição, realizado em grupo, em 2021.

### Link da Aplicação: https://ocupe-back-end.herokuapp.com/ocupe/

## Índice

* [Como utilizar](#como-utilizar-em-desenvolvimento)
* [Principais Tecnologias](#principais-tecnologias)
* [Rotas](#endpoints)


## Como Utilizar em Desenvolvimento

  ### install no terminal

  ```` 
    yarn install
  ````
  ou
  ````
    npm install
  ````
  ### run no terminal
  ```` 
    yarn dev
  ````
  ou
  ````
    npm dev
  ````
  
### Principais Tecnologias

* Node.js
* Express.js

## Endpoints

### Buscar Mentorado

* endpoint: https://ocupe-back-end.herokuapp.com/ocupe/get-mentored 
* método: GET
* response: 
```
"sucesso": BOOLEAN
"mentorado":{
        "name": STRING,
        "password": NUMBER,
        "contact": {
            "email": STRING,
            "phone": STRING
        },
        "fieldOfInteresting": STRING,
        "address": STRING,
        "stages": {
            "vocationalTest": BOOLEAN,
            "psychologist": BOOLEAN,
            "findMentor": BOOLEAN,
            "mentoring": BOOLEAN,
            "vacancies": BOOLEAN
        }
    }
```

### Buscar Mentores

* endpoint: https://ocupe-back-end.herokuapp.com/ocupe/get-mentors
* método: GET
* response: 
```
{
  "sucesso": BOOLEAN,
  "mentores": [
      {
          "name": STRING,
          "profession": STRING,
          "workfield": STRING,
          "contact": {
          "email": STRING,
          "phone": STRING
          },
          "schedule": STRING,
          "address": STRING"
      }
  ]
}
```