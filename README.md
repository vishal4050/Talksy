# Talksy 💬

A real-time chat application built with modern web technologies for seamless communication.

## 🚀 Features

- **Real-time messaging** - Instant message delivery with Socket.IO
- **User authentication** - Secure user registration and login
- **Profile management** - Customizable user profiles with image uploads
- **Responsive design** - Works perfectly on desktop and mobile devices
- **Modern UI** - Clean and intuitive user interface
- **Image sharing** - Share images through Cloudinary integration
- **Online status** - See who's online in real-time

## 🛠️ Tech Stack

### Frontend
- **React.js** - User interface library
- **CSS3** - Styling and animations
- **Socket.IO Client** - Real-time communication

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **Socket.IO** - Real-time bidirectional communication
- **MongoDB** - Database for storing messages and user data
- **Cloudinary** - Image upload and management

## 📋 Prerequisites

Before running this application, make sure you have the following installed:
- Node.js (v14 or higher)
- npm or yarn
- MongoDB Atlas account
- Cloudinary account

## Steps to SetUp the Project

1. **Clone github repo**
2. **Navigate to client folder**
3. **In cmd run** `npm install`
4. **To start the front-end run** `npm start`
5. **Navigate to server folder**
6. **In cmd run** `npm install`
7. **Edit the File name** `.example.env to .env`
8. **Provide Mongodb URI** (https://www.mongodb.com/cloud/atlas/register) **and Cloudinary secrets** (https://cloudinary.com/) **to setup .env**
9. **To start server run** `npm start`

## 🔧 Detailed Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/vishal4050/Talksy.git
cd Talksy
```

### 2. Frontend Setup
```bash
# Navigate to client folder
cd client

# Install dependencies
npm install

# Start the frontend development server
npm start
```
The frontend will run on `http://localhost:3000`

### 3. Backend Setup
```bash
# Navigate to server folder
cd server

# Install dependencies
npm install

# Setup environment variables
# Rename .example.env to .env
mv .example.env .env
```

### 4. Environment Configuration
Edit the `.env` file and add your credentials:

```env
MONGODB_URI=your_mongodb_connection_string
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
JWT_SECRET=your_jwt_secret_key
PORT=5000
```

#### Getting Required Credentials

**MongoDB URI:**
1. Visit [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register)
2. Create a free account
3. Create a new cluster
4. Get your connection string from the "Connect" button

**Cloudinary Credentials:**
1. Visit [Cloudinary](https://cloudinary.com/)
2. Sign up for a free account
3. Find your credentials in the dashboard

### 5. Start the Backend Server
```bash
# Start the backend server
npm start
```
The backend will run on `http://localhost:5000`

## 🎮 Usage

1. Open your browser and navigate to `http://localhost:3000`
2. Create a new account or log in with existing credentials
3. Start chatting with other users in real-time
4. Upload and share images
5. See who's online and their status

## 📂 Project Structure

```
Talksy/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── utils/
│   │   └── App.js
│   └── package.json
├── server/                 # Node.js backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── utils/
│   ├── .example.env
│   └── server.js
└── README.md
```

## Project Preview

![Talksy Demo](https://github.com/user-attachments/assets/6eab4fd0-933f-4457-9aa7-a6586c6c099a)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 👨‍💻 Author

**Vishal** - [GitHub Profile](https://github.com/vishal4050)
