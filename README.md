## Before starting the project, Please ensure the configuration of enviroment variables

### Authentication Service
```bash
ACCESS_TOKEN_SECRET="testsecret"
REFRESH_TOKEN_SECRET="testsecret"
REDIS_HOST=
REDIS_PORT=
REDIS_PASS=

DB_NAME=
DB_HOST=
DB_PORT=
DB_USERNAME=
DB_PASSWORD=

KAFKA_BROKER_URLS=
KAFKA_CLIENT_ID=
```

### User Service
```bash
ACCESS_TOKEN_SECRET="testsecret"
REFRESH_TOKEN_SECRET="testsecret"

DB_NAME=
DB_HOST=
DB_PORT=
DB_USERNAME=
DB_PASSWORD=

KAFKA_BROKER_URLS=
KAFKA_CLIENT_ID=
```

### Notification Service
```bash
KAFKA_BROKER_URLS=
KAFKA_CLIENT_ID=
```

### Company Service
```bash
ACCESS_TOKEN_SECRET="testsecret"
REFRESH_TOKEN_SECRET="testsecret"

DB_NAME=
DB_HOST=
DB_PORT=
DB_USERNAME=
DB_PASSWORD=

KAFKA_BROKER_URLS=
KAFKA_CLIENT_ID=
```
### Gateway 

```bash
AUTH_SERVICE_URL=
USER_SERVICE_URL=
COMPANY_SERVICE_URL=
```

## Now either ou can run locally or by running the docker-compose file

### If you are looking to run locally
### Clone the repo first 

```bash
git clone https://github.com/nabeel-ncz/saas-company-management.git
```

### Now, create env file in each services and declare all variables mentioned above
### You also want to run kafka broker with zookeeper & redis
### Then you can start all the services including gateway
### Now you able to access the project in the below host
```bash
http://locahost:4000
```

### If you need easily run the application you can just copy the docker compose file and run it after setting up the above mentioned environment variables.
### Then you will able to access the project in the below host
```bash
http://locahost:4000
```

## Thank you for reading this guide, I hope you understand 😊