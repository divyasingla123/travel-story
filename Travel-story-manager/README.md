
# 🌍 Travel Story Manager

A full-stack travel story management application that allows users to store, manage, and explore their travel experiences.
Built with React.js, Express.js, MongoDB, and JWT-based authentication.

## 🚀 Features

✅ Add, edit, and delete travel stories with title, content, location, images, and visited date.

✅ Mark stories as favorites for quick access.

✅ Filter and search stories by date, location, or keywords.

✅ Guest access: view public stories and create temporary stories (not saved permanently).

🔒 Authentication & user privacy ensured with JWT tokens.

🛠 Admin panel to manage users and their stories.

## Privacy & Authentication
To ensure user privacy, we have implemented authentication:  
- Signup Page: Stores user information in database  
- Login Page: Reads user data from the database(mongoose) and verifies credentials using JWT tokens.  

## 🧰 Tech Stack

### Frontend:

🚀 React.js – Component-based UI development

🎨 Tailwind CSS – Styling and responsiveness

⚡ Vite – Fast development and build tool

### Backend:

🛠 Express.js – REST API endpoints

🌐 MongoDB & Mongoose – Database and ODM

🔑 JWT – Authentication & authorization

⚡ Nodemon – Auto server restart

☁️ CORS – Secure cross-origin requests

### Other:

📁 Multer – Image/file uploads

🖼 File storage in /uploads directory

## ⚙️ Installation

### 1. Clone the repository  
    git clone https://github.com/<your-username>/travel-story-manager.git
    cd travel-story-manager


### 2. Install dependencies backend folder
    npm install
    
### 3. Create .env file in the root directory of backend folder
    ACCESS_TOKEN_SECRET=<your_jwt_secret>
    MONGO_URI=<your_mongodb_connection_string>

### 4. Start the server
     npm run dev
     # or
     node index.js

### 5. Frontend
    npm install
    npm run dev

### 6. Access the application

Backend: http://localhost:8000

Frontend: as per Vite config (usually http://localhost:5173)


## Admin Routes (/admin)

Admin endpoints to manage users and stories.

Authentication required (admin only).

Example: /admin/get-all-users, /admin/delete-user/:userId






