# Login Project

This is a login project developed using Node.js, Express, and MySQL. It consists of a basic user registration and login system, with login, registration, and dashboard pages.

## Prerequisites

Make sure you have the following software installed on your system:

    Node.js
    MySQL

## Project Structure

The project has the following file and directory structure:

    public/css/style.css: CSS file with styles for the project's pages.
    views/dashboard.ejs: View file for the dashboard page.
    views/login.ejs: View file for the login page.
    views/register.ejs: View file for the registration page.
    index.js: Main file that configures the server, defines routes, and implements project logic.

## Database

The project uses MySQL as the database. Follow the instructions below to set up the database:

    Make sure you have MySQL installed on your system.

    Create a database named "projeto_login" in MySQL.

    Open the index.js file and update the database connection information in the connection settings. You need to provide your database's username and password.

javascript

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'your_username',
    password: 'your_password',
    database: 'projeto_login'
});

    The index.js file establishes a connection to the database when the server starts.

## Functionality

The login project provides the following features:

    Login Page: Allows users to log in with their username, email, and password.
    Registration Page: Enables users to register with a username, email, and password.
    Dashboard: Displays a welcome message to the logged-in user.

## Accessing the Application

To access the login project on your local machine:

    1.Open a terminal or command prompt.

    2.Navigate to the project's directory.

    3.Run the following command to install the required dependencies:

npm install

Once the dependencies are installed, start the application by running the following command:

node index.js

The server will start running, and you can access the application by opening a web browser and navigating to http://localhost:3000.

## Contributing

Feel free to contribute to this project with any improvements. You can submit a pull request with your changes.