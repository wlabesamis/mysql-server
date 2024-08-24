# Kitra Database
This repository contains a mysql database setup that stores user information, treasure locations, and associated monetary values.

## Prerequisites
Before you can run the application, make sure you have the following installed on your system:

- Docker
- Docker Compose

## Project Structure
- docker-compose.yml: Defines the Docker services, including the MySQL database.
- initdb.sql: SQL script to initialize the database with tables and sample data.

## Getting Started
Follow these steps to set up and run the Kitra Game API.

### 1. Clone the Repository
First, clone the repository to your local machine:
```
git clone https://github.com/wlabesamis/mysql-server.git
cd mysql-server
```
### 2. Set Up the MySQL Database
The docker-compose.yml file will set up a MySQL database container. The database will be initialized using the initdb.sql script.

### 3. Run the Application
To start the MySQL database, simply run:

```
docker-compose up -d
```
This command will:

- Pull the MySQL 8.0 image.
- Create a container named kitra_mysql.
- Set up the database using the environment variables defined in docker-compose.yml.
- Initialize the database with the structure and data provided in initdb.sql.


### 4. Access the MySQL Database
Once the container is running, you can connect to the MySQL database using the following credentials:

- Host: localhost
- Port: 3306
- Database: kitra_db
- User: kitra_user
- Password: kitra_password
- Root Password: kitra_root_password
You can access the database using any MySQL client or via the command line:

```
docker exec -it kitra_mysql mysql -u kitra_user -pkitra_password kitra_db
```

### 5. Verify the Database Initialization
Once inside the MySQL shell, you can verify that the database and tables have been created:

```
SHOW TABLES;
```

You should see the following tables:

- users
- treasures
- money_values

### 6. Stopping the Application
To stop the MySQL container, run:

```
docker-compose down
```

This will stop and remove the container, but the data will persist in the volume.

# Database Schema
## Tables
### 1. users: Stores user information.

- id: Primary key, auto-incremented.
- name: User's name.
- age: User's age.
- password: User's password.
- email: User's email.

#### 2. treasures: Stores treasure locations and names.

- id: Primary key, auto-incremented.
- latitude: Latitude of the treasure.
- longitude: Longitude of the treasure.
- name: Name of the treasure.

#### 3. money_values: Stores the monetary value associated with each treasure.

- treasure_id: Foreign key, references treasures(id).
- amt: Monetary value.

### Sample Data
The database is initialized with sample data for testing purposes, including users, treasures, and associated monetary values.

# Troubleshooting
If you encounter any issues while setting up or running the application, consider the following:

- Ensure Docker and Docker Compose are properly installed and running.
- Check that the docker-compose.yml file is correctly configured.
- Ensure there are no port conflicts on your machine (especially on port 3306).

For further assistance, refer to the Docker documentation or reach out to the project maintainer.

## License
This project is licensed under the MIT License.