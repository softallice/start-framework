## featherjs-api
featherjs와 sequelizer(ORM)을 사용하여 구성
- 로그인 및 사용자 관리 : mangoDB
- 비즈니스 로직 처리 : postgresql

## About

This project uses [Feathers](http://feathersjs.com). An open source web framework for building modern real-time applications.

## featherjs cli 명령어(기능요소 템플릿 자동 생성)

Feathers has a powerful command line interface. Here are a few things it can do:

```
$ npm install -g @feathersjs/cli          # Install Feathers CLI

$ feathers generate service               # Generate a new Service
$ feathers generate hook                  # Generate a new Hook
$ feathers help                           # Show all commands
```

## sequalize cli 명령어(기능요소 템플릿 자동 생성 및 마이그레이션)
예제 
```sh
sequelize migration:create --name="user"
```
```sh
sequelize-cli db:migrate                        Run pending migrations
  sequelize-cli db:migrate:schema:timestamps:add  Update migration table to have timestamps
  sequelize-cli db:migrate:status                 List the status of all migrations
  sequelize-cli db:migrate:undo                   Reverts a migration
  sequelize-cli db:migrate:undo:all               Revert all migrations ran
  sequelize-cli db:seed                           Run specified seeder
  sequelize-cli db:seed:undo                      Deletes data from the database
  sequelize-cli db:seed:all                       Run every seeder
  sequelize-cli db:seed:undo:all                  Deletes data from the database
  sequelize-cli db:create                         Create database specified by configuration
  sequelize-cli db:drop                           Drop database specified by configuration
  sequelize-cli init                              Initializes project
  sequelize-cli init:config                       Initializes configuration
  sequelize-cli init:migrations                   Initializes migrations
  sequelize-cli init:models                       Initializes models
  sequelize-cli init:seeders                      Initializes seeders
  sequelize-cli migration:generate                Generates a new migration file [aliases: migration:create]
  sequelize-cli model:generate                    Generates a model and its migration [aliases: model:create]
  sequelize-cli seed:generate                     Generates a new seed file [aliases: seed:create]
```

## Help

For more information on all the things you can do with Feathers visit [docs.feathersjs.com](http://docs.feathersjs.com).
