A full-stack personal book management app built with the MERN stack and Next.js that helps users maintain their personal reading list with ease.

✨ Intuitive, elegant, and quietly powerful.

🚀 Features
🔐 Authentication
Sign up, log in, and log out securely using JWT

Cookie-based session handling

Protected routes for logged-in users

📚 Book Collection
Add books with title, author, tags, and reading status

Edit and delete books

Filter books by tag or status

Reading status:

📖 Want to Read

📘 Reading

✅ Completed

📊 Dashboard
View total number of books

Quickly update reading status

Clean, clutter-free UI

Fully responsive (mobile-first design)

🛠️ Tech Stack
Frontend
Next.js (React + TypeScript)

Tailwind CSS for styling

Axios for API requests

React Hook Form for form handling

js-cookie for client-side auth handling

Backend
Node.js + Express

MongoDB + Mongoose

JWT for auth

CORS, dotenv, cookie-parser

📁 Folder Structure
vbnet
Copy
Edit
📦 root
├── client/                → Next.js frontend
│   ├── pages/
│   ├── components/
│   ├── lib/               → API configs, auth utils
│   └── styles/
├── server/                → Express backend
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   └── server.js
└── .env                   → Env variables
🔧 Getting Started
1️⃣ Clone the Repo
bash
Copy
Edit
git clone https://github.com/your-username/personal-book-manager.git
cd personal-book-manager
2️⃣ Backend Setup
bash
Copy
Edit
cd server
npm install
➕ Create .env in /server
env
Copy
Edit
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_super_secret_key
🚀 Start the Backend
bash
Copy
Edit
npm run dev
# Server running on http://localhost:5000
3️⃣ Frontend Setup
bash
Copy
Edit
cd ../client
npm install
🚀 Start the Frontend
bash
Copy
Edit
npm run dev
# App running at http://localhost:3000
🌐 API Endpoints
Auth Routes (/api/auth)
Method	Route	Description
POST	/signup	Register user
POST	/login	Login user
POST	/logout	Logout user

Book Routes (/api/books) — Protected
Method	Route	Description
GET	/	Get all books
POST	/	Add a new book
PUT	/:id	Update a book
DELETE	/:id	Delete a book

🔐 Auth Strategy
JWT token issued on login/signup

Stored in HTTP-only cookies

Client reads minimal user data via js-cookie to persist UI state

Protected routes via custom Express middleware (authMiddleware.js)

✅ To-Do / Enhancements
 Tags dropdown + filters

 Drag & drop to reorder books

 Charts (e.g., reading progress)

 Upload cover image (Cloudinary)

 User profiles

 Light/Dark mode

📸 Screenshots (optional)
You can add screenshots later like this:

swift
Copy
Edit
/client/public/screenshots/
md
Copy
Edit
![Dashboard](./client/public/screenshots/dashboard.png)
👨‍💻 Author
Prakhar Shrivastava
LinkedIn • GitHub
