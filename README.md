# strapi-tasks

Try it !

```bash
cd strapi
npm i
npm run start
```

```bash
cd front
npm i
npm run start
```

http://localhost:3000/


## Data model


| Task        |
| ----------- |
| id          |
| name        |
| description |
| step        |
| tags []     |


| Tag         |
| ----------- |
| id          |
| name        |
| description |
| step        |
| tags []     |


| Step        |
| ----------- |
| id          |
| name        |
| tasks []    |


## Structure

| Home        | -> | Tasks/id |
| ----------- | -- | -------- |
| tasks []    | <- | task     |
