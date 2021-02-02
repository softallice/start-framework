# featherjs-api


docker run -d \
    --name postgresql \
    -p 5432:5432 \
    -e POSTGRES_USERNAME=myuser \
    -e POSTGRES_PASSWORD=mypassword \
    -e POSTGRES_DBNAME=mydb \
    -e POSTGRES_EXTENSIONS=citext \
    frodenas/postgresql


sequelize migration:create --name="user"
npx sequelize seed:generate --name user
sequelize seed:generate --name activities



sequelize db:migrate
sequelize db:seed:all


feathers generate service


curl --location --request GET 'http://localhost:3030/activities' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6ImFjY2VzcyJ9.eyJpYXQiOjE2MTEyMTk4MzMsImV4cCI6MTYxMTMwNjIzMywiYXVkIjoiaHR0cHM6Ly95b3VyZG9tYWluLmNvbSIsImlzcyI6ImZlYXRoZXJzIiwic3ViIjoiNjAwOTQyZmQyZTU2ODQwMTNhYTZlNDQyIiwianRpIjoiNDQ3ZmVmZmEtODk2OC00NzNjLThmYjQtMDA4ZGFjOGQ2MWU3In0.2dVV96JlaWh8n2P7drEC25yJtcLNeKq5le8e9hQVCWU'


## About

This project uses [Feathers](http://feathersjs.com). An open source web framework for building modern real-time applications.

## Getting Started

Getting up and running is as easy as 1, 2, 3.

1. Make sure you have [NodeJS](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.
2. Install your dependencies

   ```
   cd path/to/api-v-2
   npm install
   ```

3. Start your app

   ```
   npm start
   ```

## Testing

Simply run `npm test` and all your tests in the `test/` directory will be run.

## Scaffolding

Feathers has a powerful command line interface. Here are a few things it can do:

```
$ npm install -g @feathersjs/cli          # Install Feathers CLI

$ feathers generate service               # Generate a new Service
$ feathers generate hook                  # Generate a new Hook
$ feathers help                           # Show all commands
```

## Help

For more information on all the things you can do with Feathers visit [docs.feathersjs.com](http://docs.feathersjs.com).
