# CRUD Chat App

A simple chat application built with Node.js, Express, MongoDB (Mongoose), and EJS that supports full CRUD functionality for messages.

## 🚀 Features
- Create new chat messages
- Read/display all chats
- Update/edit existing messages
- Delete chats
- Uses MongoDB for storage
- Clean EJS frontend

## 🛠 Tech Stack
- Node.js
- Express.js
- MongoDB (Mongoose)
- EJS (Embedded JavaScript)
- HTML/CSS

## 📦 Installation

```bash
git clone https://github.com/Kumarayoningithub/CRUD_Chat_App.git
cd CRUD_Chat_App
npm install


## Make sure MongoDB is running locally:
mongod

Start the server:
node index.js

Visit http://localhost:8080/chats in your browser.


## 📁 Folder Structure

CRUD_Chat_App/
├── models/
│   └── chat.js
├── views/
│   ├── index.ejs
│   ├── new.ejs
│   └── edit.ejs
├── public/
│   └── style.css (optional)
├── index.js
├── init.js
└── package.json

