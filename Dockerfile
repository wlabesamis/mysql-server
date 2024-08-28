# Use the official MySQL image as the base image
FROM mysql:8.0

# Copy the initial SQL file to the Docker entrypoint directory
COPY initdb.sql /docker-entrypoint-initdb.d/init.sql