# CRUD App with Node.js and MongoDB

This repository contains a simple CRUD (Create, Read, Update, Delete) application built with Node.js and MongoDB, featuring a basic HTML frontend.

### Features

- ***Create:*** *Add new entries via a form.*
- ***Read:*** *Instantly display new entries in a list below the form.*
- ***Update:*** *Edit existing entries directly from the list.*
- ***Delete:*** *Remove entries from the list.*

### Technologies Used

- ***Node.js:*** *Server-side JavaScript runtime.*
- ***Express.js:*** *Web framework for Node.js.*
- ***MongoDB:*** *NoSQL database for storing data.*
- ***Mongoose:*** *ODM (Object Data Modeling) library for MongoDB and Node.js.*
- ***HTML:*** *Basic frontend with a dynamic form and item list.*

# Getting Started

## Prerequisites

- ***[Node.js](https://nodejs.org/en)*** *and* ***[npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)*** installed on your machine.
- ***[MongoDB](https://www.mongodb.com/docs/manual/installation/)*** installed and running, or use a cloud MongoDB service like MongoDB Atlas.

## Installation

### Clone the repository:

>***Command Line***
>
>git clone https://github.com/GitFreakDK/CRUD-APP.git
>
>cd CRUD-APP

### Install dependencies:

>***Command Line***
>
>npm on
>
>npm install
>
>npm install --save dotenv
>
>***OR***
>
>npm install --save dotenv-extended

I have Given with current dependencies if shows any error make sure to remove ***node_modules*** this file and reinstall by dependency commands.

### Set up environment variables:

#### Create a .env file in the root directory with the following content:

>***Make File .env***
>
>MONGODB_URI=your_mongodb_connection_string
>PORT=3000
>
>***Like This***
>
>MONGO_URI=mongodb://localhost:27017/cruddb
>PORT=3000

Don't need to worry i've given within the project. If there is changes need to be changed.

### Run the application:

>npm start

- The app will be accessible at ***[START](http://localhost:3000)***.

### Usage

- *The HTML page features a form for adding new entries.<br> 
Once an entry is added, it immediately appears in a list below the form.<br> 
Each item in the list displays.*
- ***Edit:*** *An option to modify the item directly from the list.*
- ***Delete:*** *An option to remove the item from the list.*

### How It Works

- ***Add Entry:*** *Fill out the form and submit it. The form uses JavaScript to send the data to the server via an AJAX request.*
- ***Instant Update:*** *The new entry is dynamically added to the list below the form without needing to refresh the page.*
- ***Edit Entry:*** *Click "Edit" on an item to bring up an editable form, allowing you to change the item's details directly within the list.*
- ***Delete Entry:*** *Click "Delete" to remove the item from the database and the list.*

# Acknowledgments

- [Express.js](https://expressjs.com/)<br>
- [Mongoose](https://mongoosejs.com/)<br>
- [MongoDB](https://www.mongodb.com/)<br>

Feel free to contribute or provide feedback!

