# E-commerce Site Web Application

This project was part of my second-year software development studies at Metropolia University of Applied Sciences.

## Introduction

Our team addressed the growing need for power solutions by creating an E-commerce site.

## Features

- Authorization with JSON Web Tokens for secure user authentication
- Fully hashed passwords stored in a database for enhanced security
- Password recovery system with a time-limited random URL (valid for 1 hour)
- Favorites feature (stored in the database) and Shopping cart (stored in local storage) for educational purposes
- Orders stored in a database for easy tracking and management
- ... And more

## Technologies Used

- MongoDB
- Express.js
- React
- Node.js

## Installation

Follow these steps to install and set up the project locally. Make sure you have [MongoDB](https://www.mongodb.com/try/download/community) installed.

```bash
# Clone the repository
git clone https://github.com/yourusername/yourproject.git

# Navigate to the project directory
cd Ecommerce-site

# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install

# Run the server in backend folder
npm run dev

# Run the app in frontend folder
npm start

