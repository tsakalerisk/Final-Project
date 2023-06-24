# Final Project

## Requirements:

- Docker 🐋
- Patience

## To run the project:

```
docker compose up -d --build
```

or run `go.sh`. It does the exact same thing.

**IMPORTANT**: make sure to wait for the backend server to start, using (it takes some time because the build happens inside a docker container and maven may need to download some packages first):
```
docker logs -f backend
```

## When the project starts

When the backend server is up and running you can view the app at two endpoints:
- <http://localhost:3000> for the customer interface, like broswing items and placing orders
- <http://localhost:3000/admin> for the admin dashboard that includes full control over the data, such as CRUD operations on orders, people, and items.

## Backend

The REST API runs on <http://localhost:5000>, to view the swagger page visit <http://localhost:5000/Techpro>.

One thing to note is that when making POST requests, the server expects the input body in form data encoding, and not as JSON.

## Database

The database runs on <http://localhost:3306> and comes with an adminer microservice that runs on <http://localhost:8080> that makes queries to the databases much easier than using a local db client. The database credentials are `root` and `pass` and can be changed from the `.env` file.