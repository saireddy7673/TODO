# TODO Application

A full-stack TODO application with Spring Boot backend and React frontend.

## Features

- ✅ Add new todos
- ✅ View all todos  
- ✅ Modern responsive UI design
- ✅ Real-time updates
- ✅ RESTful API backend

## Architecture

### Backend (Spring Boot)
- **Location**: `todobackend/`
- **Port**: 8080
- **Technology**: Java 17, Spring Boot 3.5.5, Maven
- **API Endpoints**:
  - `GET /todos` - Get all todos
  - `POST /todos` - Add a new todo
  - `GET /todos/{id}` - Get todo by ID

### Frontend (React)
- **Location**: `todofrontendreact/`
- **Port**: 3000
- **Technology**: React 19, Modern CSS with gradients
- **Features**: 
  - Interactive form for adding todos
  - Real-time todo list display
  - Loading states and error handling
  - Responsive design

## Getting Started

### Prerequisites
- Java 17+
- Node.js 16+
- Maven

### Running the Backend
```bash
cd todobackend
mvn spring-boot:run
```

### Running the Frontend
```bash
cd todofrontendreact
npm install
npm start
```

### Access the Application
- Frontend: http://localhost:3000
- Backend API: http://localhost:8080/todos

## Screenshots

![TODO App](https://github.com/user-attachments/assets/90716ab9-acf1-4acc-8486-23c32e1cde91)

## Technical Details

- **CORS**: Configured for frontend-backend communication
- **Data Storage**: In-memory HashMap (resets on restart)
- **ID Generation**: Auto-incrementing integer IDs
- **Error Handling**: Comprehensive error states in UI
- **Styling**: Modern CSS with purple gradient theme