# 🚀 Full Stack Todo Application with Automated Reminders

A full-stack **Task Management (Todo) application** built using **React, Spring Boot, and MySQL**.  
The application allows users to securely manage their tasks and receive **automatic reminders when the task deadline is reached**.

This project demonstrates **secure authentication, REST API development, database integration, and backend scheduling automation**.

---

# 🧠 Features

### 🔐 User Authentication
- User **Signup / Signin**
- **JWT-based authentication**
- Secure API endpoints using **Spring Security**

### ✅ Task Management
- Create tasks
- Set **date and time deadlines**
- View and manage task lists
- Tasks stored persistently in **MySQL**

### ⏰ Automated Reminder System
- Users can assign a **deadline to each task**
- Backend scheduler continuously checks for tasks reaching their deadline
- When the time is reached, the system **automatically sends a reminder**

---

# 🏗️ System Architecture

The application follows a **3-tier architecture**:

### 1️⃣ Frontend
**React**
- User Interface
- Handles authentication and task operations
- Sends API requests to the backend

### 2️⃣ Backend
**Spring Boot**
- REST API development
- JWT Authentication using **Spring Security**
- Business logic for task management
- **Spring Scheduler** for automated reminders

### 3️⃣ Database
**MySQL**
- Stores user information
- Stores task data including deadlines

---

# ⚙️ Tech Stack

### Frontend
- React
- Axios
- CSS

### Backend
- Java
- Spring Boot
- Spring Security
- JWT Authentication
- Spring Scheduler

### Database
- MySQL

---

# 🔄 Application Flow

1. User **registers or logs in** to the system.
2. Backend authenticates user and returns a **JWT token**.
3. The token is used to **authorize API requests**.
4. Users can **create tasks and set a deadline (date & time)**.
5. Task data is stored in **MySQL database**.
6. A **Spring Scheduled Job** periodically checks for tasks whose deadline has been reached.
7. When the deadline matches the current time, the system **triggers a reminder notification**.

---

# 📂 Project Structure

```
todo-app
│
├── frontend (React)
│   ├── components
│   ├── pages
│   ├── services
│   └── App.js
│
├── backend (Spring Boot)
│   ├── controller
│   ├── service
│   ├── repository
│   ├── security
│   ├── scheduler
│   └── model
│
└── database
    └── MySQL schema
```

---

# 🚀 Getting Started

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/yourusername/todo-reminder-app.git
cd todo-reminder-app
```

---

# 🔧 Backend Setup (Spring Boot)

### Configure MySQL

Update `application.properties`:

```
spring.datasource.url=jdbc:mysql://localhost:3306/todo_db
spring.datasource.username=root
spring.datasource.password=yourpassword

spring.jpa.hibernate.ddl-auto=update
```

Run the backend:

```
mvn spring-boot:run
```

---

# 💻 Frontend Setup (React)

Navigate to frontend folder:

```
cd frontend
```

Install dependencies:

```
npm install
```

Run the React app:

```
npm start
```

---

# 📸 Architecture Diagram

![Architecture Diagram](architecture.png)

---

# 📚 What I Learned

- Building **full stack applications**
- Implementing **JWT authentication with Spring Security**
- Designing **REST APIs with Spring Boot**
- Integrating **React with backend services**
- Using **Spring Scheduling for automation**
- Managing relational data with **MySQL**

---

# 🔮 Future Improvements

- Email notification system
- Push notifications
- Task categories and priorities
- Docker deployment
- Cloud deployment (AWS / Azure)

---

# 🤝 Contributing

Contributions are welcome!  
Feel free to open issues or submit pull requests.

---

# ⭐ If you like this project

Give the repository a **star ⭐** and share your feedback!
