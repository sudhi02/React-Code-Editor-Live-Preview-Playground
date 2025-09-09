
# React-Code-Editor-Live-Preview-Playground with Network Layer (Axios + Environment-Based Setup)
A powerful, interactive React code editor that allows you to write, run, and preview React components in real-time. Perfect for learning, experimenting, and prototyping React applications that supports multiple environments (`development`, `production`) using `.env` files. 

---

## 🚀 Features

Real-time Code Execution: Write React code and see results instantly
Live Preview: Visual output updates as you type
Error Handling: Clear error messages with syntax highlighting
Example Templates: Pre-built examples to learn from (Counter, Todo List, API Fetch)
No Setup Required: Start coding React immediately in your browser
Modern UI: Clean, intuitive interface with professional design
Responsive Design: Works perfectly on desktop and mobile devices


## 📁 Folder Structure

react-network-layer/
│
├── public/
│ └── index.html
│
├── src/
│ ├── api/
│ │ └── apiClient.js # Axios instance with headers/interceptors
│ │
│ ├── globalUtils/
│ │ └── Header.js # Application Header
│ │ └── Footer.js # Application Footer
│ │ └── Error.js # Will Display runtime error in editor
│ │
│ ├── component/
│ │ └── examples.js # Example code templates
│ │ └── main.js # Main editor component
│ │ └── useCodeRunner.js # Custom hook for code execution 
│ │
│ ├── config/
│ │ └── env.js # Reads environment variables
│ │
│ ├── services/
│ │ ├── accountService.js # API call functions
│ │ └── accountEndpoints.js # Endpoint paths
│ │
│ ├── Style/
│ │ ├── style.css # Handle All the CSS
│ │
│ ├── utils/
│ │ ├── errorHandler.js # Central error handler
│ │ ├── networkStatus.js # 🔌 Internet connectivity checker
│ │ ├── ErrorBoundary.js # Global error boundaries (optional)
│ │ └── loader.js # Optional: Loader component
│ │ └── logger.js # Optional: logs app error component
│ │ └── reactLoader.js # Optional: Make React, ReactDOM and Babel available globally for the code editor
│ │
│ ├── App.js # Example UI to test API
│ ├── index.js # Entry point
│ └── App.css / index.css
│
├── .env.development # Local API env
├── .env.production # Production env
├── package.json
└── README.md




## 📦 Install & Setup

git clone https://github.com/yourusername/react-live-editor.git
cd react-live-editor
npm install


npm run start:dev     # Runs with .env.development
npm run start:uat     # Runs with .env.uat
npm run start:prod    # Runs with .env.production

npm run build:dev     # Builds with .env.development
npm run build:uat     # Builds with .env.uat
npm run build:prod    # Builds with .env.production

## Sample API Test

🔗 https://jsonplaceholder.typicode.com/users

## Sample Output
GET /users
➡️ List of 10 users displayed in UI

----

## 🌐 Connectivity Monitoring
This project includes a built-in internet connectivity checker:

🛑 Blocks API calls if user is offline

🔔 Shows popup message: No internet connection. Please check your network.

✅ Optionally alerts when connection is restored

This check is globally applied using navigator.onLine and browser online/offline events.

## Writing Code
Type your React code in the left editor panel

Use the Run Code button to execute your code

View the results in the right preview panel

## Using Examples
Click on any example button to load pre-built React components:

Counter: Simple state management example

Todo List: Component with list management

API Example: Fetching and displaying data from APIs
---

## 🛠️ Technology Stack
React 18 - Modern React with hooks

Babel Standalone - In-browser JSX transformation

CSS3 - Modern styling with flexbox and grid

Custom Hooks - Clean state management


## 🤝 Contributing
We welcome contributions! Please feel free to submit pull requests or open issues for bugs and feature requests.

## 👨‍💻 Author

**Sudhi**  
💬 Available for collaboration, questions, and improvements!