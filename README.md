# FastFeet
Backend of a fictitious Shipping Company made with Node.js

### How to execute it:

- Clone the project
- Run yarn or npm command to download the packages
- Config the database configuration file
- Run the [sequelize](https://sequelize.org/master/manual/migrations.html) commands to generete the tables and seeds.
- `$yarn dev` or `$npm run dev` to start the server

### Routes:

- Route to login, expects a JSON with email and password

POST `http://localhost/login`

body: 

    {
      "email":"admin@fastfeet.com",
      "password":"123456"
    }

Return: 

    {
      "user": {
        "id": 1,
        "name": "Distribuidora FastFeet",
        "email": "admin@fastfeet.com"
      },
      "token": "login token"
    }




- Route to add a recipient, expects a JSON with name(required), rua, name, rua, numero, complemento, estado, cidade, cep.

*Need to pass the login token as a Bearer Token*

POST `http://localhost/store`

body: 

    {
      "name": "Pizza Planet",
      "rua": "rua 1",
      "cidade": "Goiânia",
      "estado": "GO",
      "cep": "74000000"
    }




- Route to update a recipient, expects a JSON with id(required), name, rua, name, rua, numero, complemento, estado, cidade, cep.

*Need to pass the login token as a Bearer Token*

PUT `http://localhost/store`

body: 

    {
      "id": 3,
      "name": "Canecafé",
      "rua": "Rua 20",
      "cidade": "Uberlândia",
      "estado": "MG",
      "cep": "20003303"
    }


