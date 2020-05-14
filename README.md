# js-stack
This is a base code for projects developed with the JavaScript language.

## Features

- Express
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
- `cd js-stack`
- `npm install`
- `npm run dev`
- optional: include _.env_ in your _.gitignore_

#### Postman

- Install [Postman](https://www.getpostman.com/apps) (or another software for http REST managment) to interact with REST API
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
  - Body Content: `{"name": "constanza", "username": "coni"}`
- Delete user created with:
  - URL: http://localhost:3000/v1/users/11
  - Method: DELETE
