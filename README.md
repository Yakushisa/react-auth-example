### Stack:

- Reactjs
- React Router
- Express
- MongoDB
- Bootstrap 4


### Start MongoDB:
- mongod

### Start Server
- cd react-auth-example
- npm run server

### Start Application
- cd react-auth-example
- npm start


### Create Users
```shell
curl -X POST \
  http://localhost:3000/api/register \
  -H 'Content-Type: application/json' \
  -d '{
 "email": "example@example.com",
 "password": "password123"
}'
```
