# GoStack

### Getting Start - API

```
yarn install

docker run --name mongo_gostack -p 27017:27017 -d -t mongo
docker run --name postgres_gostack -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
docker run --name redis_gostack -p 6379:6379 -d -t redis:alpine

yarn sequelize db:migrate
```
