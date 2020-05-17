# js-stack
This is a base code for projects developed with the JavaScript language.

## Features

- Express
- Environment Variables
- REST API
- MongoDB
- Jest
- Docker

## Requirements

- [node & npm](https://nodejs.org/en/)
- [git](https://git-scm.com/)
- [docker](https://www.docker.com/)

## Installation

- `git clone https://github.com/francijpg/js-stack.git`
  ### for the backend:
  - `cd js-stack/backend`
  - `npm install`
  - `npm run dev`
  ### for the frontend:
  - `cd js-stack/frontend`
  - `yarn install`
  - `yarn start`

- optional: include _.env_ in your _.gitignore_


#### Postman

- Install [Postman](https://www.getpostman.com/apps) (or another software for http REST managment, for example: [Insomnia](https://insomnia.rest/) ) to interact with REST API
- List default api users:
  - URL: http://localhost:3000/v1/users
  - Method: GET
- Create a user with:
  - URL: http://localhost:3000/v1/users
  - Method: POST
  - Body: raw + JSON (application/json)
  - Body Content: `{"name": "francisco", "username": "franci"}`
- Update a user with:
  - URL: http://localhost:3000/v1/users/11
  - Method: PUT
  - Body: raw + JSON (application/json)
  - Body Content: `{"name": "lindsey", "username": "lin"}`
- Delete user created with:
  - URL: http://localhost:3000/v1/users/11
  - Method: DELETE
