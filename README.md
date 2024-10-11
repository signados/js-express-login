# Express TypeScript App

npm install

# Test

npm run test

# Rutas

| URL path  | Método | Permisos | Descripción                                                                        |
| --------- | ------ | -------- | ---------------------------------------------------------------------------------- |
| /register | POST   | open     | Mandas un usuario nuevo y una contraseña y te devuelve un token                    |
| /login    | POST   | open     | Mandas un usuario y una contraseña de un usuario registrado y te devuelve un token |

# Docker

docker compose up --build

En el 3015 el server y en el 3315 la bd
En el compose los datos del .env o podría coger los datos del .env directamente
