## Description

Nest.JS Coffee API

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## New Project

```bash
npm i -g @nestjs/cli
```

```bash
nest new 'projectName'
```

### Extra packages for type validation

```bash
npm i class-validator class-transformer
```

```bash
npm i @nestjs/mapped-types
```

### Other packages:

### Config package for .env

```bash
npm i @nestjs/config
```

### Schema validation of .env vars

```bash
npm install @hapi/joi
npm install --save-dev @types/hapi__joi
```

### New Controller

```bash
nest generate controller
```

### New Service

```bash
nest generate service
```

### New Module

```bash
nest generate module
```

### New Class

```bash
nest generate class coffees/dto/create-coffee.dto --no-spec
```

```bash
nest generate class coffees/entities/flavor.entity --no-spec
```

```bash
nest g class common/dto/pagination-query.dto --no-spec
```

```bash
nest g class events/entities/event.entity --no-spec
```

### New Filter

```bash
nest g filter common/filters/http-exception
```

### Docker PostgeSQL DB

```bash
docker-compose up db -d
```

```bash
docker-compose down
```

### TypeORM migration

Config file: typeorm-cli.config.ts

Create migration up/down(undo) file:

```bash
npx typeorm migration:create src/migrations/CoffeeRefactor
```

Build first
npm run build

Run migration(s)
npx typeorm migration:run -d dist/typeorm-cli.config

Undo migration(s)
npx typeorm migration:revert -d dist/typeorm-cli.config

TypeOrm generate migrations automatically
npx typeorm migration:generate src/migrations/SchemaSync -d dist/typeorm-cli.config
