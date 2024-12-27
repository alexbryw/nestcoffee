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

## MongoDB docker

```bash
# start detached
docker-compose up -d

# down
docker-compose down

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
