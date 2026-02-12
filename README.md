# Full-Stack Todo App

A full-stack **Todo Application** built with **React** (frontend) and **Spring Boot** (backend) with **PostgreSQL** database, deployed online using **Railway** (backend) and **Vercel** (frontend). This app allows users to manage tasks, set reminders, and receive email notifications when a task is due.

---

## Features

### Frontend (React)
- JWT-based authentication (login & signup)
- Add, delete, and view tasks
- Set reminder times for tasks
- Pagination for tasks (5 tasks per page)
- Responsive and user-friendly UI

### Backend (Spring Boot)
- REST API for task CRUD operations
- JWT-based authentication and security
- Scheduled email reminders using Spring Scheduler
- PostgreSQL database integration
- Error handling and validation

### Database (PostgreSQL)
- Stores user credentials
- Stores tasks with reminder times
- Tracks completed tasks

### Deployment
- **Backend**: Railway (Spring Boot + PostgreSQL)
- **Frontend**: Vercel (React)

---

## Architecture

The project follows a **three-tier architecture**:

1. **Frontend**: React app communicates with backend APIs via JWT-authenticated requests.
2. **Backend**: Spring Boot handles task management, email reminders, and database operations.
3. **Database**: PostgreSQL stores users and tasks.

![Architecture Diagram](./architecture.png)

---

## Tech Stack

- **Frontend**: React, Axios, React Router, JavaScript
- **Backend**: Java, Spring Boot, Spring Security, Spring Scheduler
- **Database**: PostgreSQL
- **Deployment**: Railway, Vercel
- **Email Service**: Gmail SMTP (via Spring Boot Email)

---

## Setup Instructions

### Backend
1. Clone the repository and navigate to the backend folder.
2. Configure PostgreSQL credentials in `application.properties` or environment variables:
   ```properties
   spring.datasource.url=jdbc:postgresql://<HOST>:<PORT>/<DB_NAME>
   spring.datasource.username=<USERNAME>
   spring.datasource.password=<PASSWORD>
