[GET] http://localhost:3000/

Hello World

[GET] http://localhost:3000/users > Return all users (200)

[GET] http://localhost:3000/users/1 > Return user with id 1 (200)
[GET] http://localhost:3000/users/2 > Return user with id 2 (200)
[GET] http://localhost:3000/users/34234asdasd > Return user with id 34234asdasd (200)

[POST] http://localhost:3000/users > Return the user created (201)

[DELETE] http://localhost:3000/users/:id > Return status user deleted (200)

[PUT] http://localhost:3000/users/:id > Return the user updated (200)


# Docker

docker compose up -d # Start the services in the background
docker compose down # Stop the services
docker compose down -v # Stop the services and remove the volumes
docker compose ps # List the services

# Prompt

Basado en @posts.service.ts y en @posts.controller.ts crea el CRUD para las categorias dentro del modulo @posts.module.ts esta es la estructura:

.
├── controllers
│   ├── posts.controller.spec.ts
│   └── posts.controller.ts
├── dto
│   ├── create-post.dto.ts
│   └── update-post.dto.ts
├── entities
│   ├── category.entity.ts
│   └── post.entity.ts
├── posts.module.ts
└── services
    ├── posts.service.spec.ts
    └── posts.service.ts


# For production

npm run build
npm run typeorm migration:run
npm run start:prod
