Below is a **clear, strict, and grading-safe `README.md`**.
It is written so **another developer (or your instructor)** can understand *exactly* how the system works, what each screen does, who can access it, and which backend API it consumes. No ambiguity, no missing steps.

You can copy-paste this directly as your `README.md`.

---

# 📌 Project Management System (ClickUp-like Application)

## 📖 Overview

This project is a **Project Management System** inspired by tools like ClickUp.
It supports **role-based access control** and allows Admins, Managers, and Users to collaborate through Projects and Tasks.

The system is divided into **six main screens**, each with clearly defined permissions and backend API integrations.

---

## 👥 User Roles & Permissions

| Role        | Permissions                                                                    |
| ----------- | ------------------------------------------------------------------------------ |
| **Admin**   | Create projects, create tasks, create users, view all projects, view all users |
| **Manager** | View assigned projects, create tasks within assigned projects                  |
| **User**    | View assigned projects and tasks only                                          |

> ⚠️ **All permission checks must be handled both on the frontend (route protection & UI hiding) and backend (API authorization).**

---

## 🏠 1. Dashboard (HomeScreen)

### 📌 Description

The Dashboard is the **main landing page** after login.

### 📊 Expected UI

* Table-based layout
* Each **row represents a Project**
* Each row acts as an **Accordion**:

  * Clicking expands the row to show high-level project details

### 📄 Data Shown

* Admin: **All projects**
* Manager & User: **Only projects assigned to them**

### 🔐 Access

* Admin
* Manager
* User

### 🔗 Backend API

```http
GET /api/v1/projects
```

---

## 📁 2. Project Page (DetailScreen)

### 📌 Description

This page displays **all information related to a specific project**, including its tasks.

Users are redirected here when clicking a project from the Dashboard.

### 🎨 UI Expectations

* Clean, user-friendly, and visually structured
* Project details shown at the top
* Task list displayed clearly below

---

### 🧩 Project Information (Required)

| Field               |
| ------------------- |
| project_name        |
| project_description |
| status              |
| hours_consumed      |
| start_date          |
| end_date            |

---

### 📝 Task Information (Required)

| Field            |
| ---------------- |
| task_name        |
| task_description |
| status           |
| hours_consumed   |
| user_assigned    |
| start_date       |
| end_date         |

---

### 🔐 Access

* Admin
* Manager (assigned projects only)
* User (assigned projects only)

### 🔗 Backend API

```http
GET /api/v1/projects/<id>
```

---

## ➕ 3. Project Creation Page (ProjectCreateScreen)

### 📌 Description

A dedicated screen used **only by Admins** to create new projects.

### 🔐 Access

* **Admin only**

### 🧾 Required Fields

| Field               | Required |
| ------------------- | -------- |
| project_name        | ✅        |
| project_description | ❌        |
| user_assigned       | ✅        |
| start_date          | ❌        |
| end_date            | ❌        |

### ⚠️ Important Rule

* **Only users with the `Manager` role** may appear in the `user_assigned` dropdown.
* Regular users and admins **must not appear**.

### 🔗 Backend API

```http
POST /api/v1/projects/create/
```

---

## 🧩 4. Task Creation Page (TaskCreateScreen)

### 📌 Description

This page allows creation of a task **inside a specific project**.

### 📍 Route Rule

This screen **must only be accessible from the Project Detail page**.

```text
/project/<id>/task/create/
```

### 🔐 Access

* Admin
* Manager

---

### 🧾 Required Fields

| Field            | Required |
| ---------------- | -------- |
| task_name        | ✅        |
| task_description | ❌        |
| user_assigned    | ❌        |
| start_date       | ❌        |
| end_date         | ❌        |

---

### ⚠️ Assignment Rules (STRICT)

* **If creator is a Manager**
  → Only users with `User` role may be assigned

* **If creator is an Admin**
  → Users with `Manager` **and** `User` roles may be assigned

Admins **cannot assign another Admin to a task**.

---

### 🔗 Backend API

```http
POST /api/v1/projects/<id>/task/create/
```

---

## 👤 5. User List Page (UserListScreen)

### 📌 Description

A table-based screen displaying **all registered users**.

### 🔐 Access

* **Admin only**

> Permission must be enforced **on the frontend** (route protection) and backend.

---

### 📄 Required Table Columns

| Field      |
| ---------- |
| first_name |
| last_name  |
| email      |
| role       |

---

### 🔗 Backend API

```http
GET /api/v1/users
```

---

## 🧑‍💼 6. User Create Page (UserCreateScreen)

### 📌 Description

There is **no public registration**.

All users are created **by an Admin** through this screen.

### 🔐 Access

* **Admin only**

---

### 🧾 Required Fields

| Field      | Required |
| ---------- | -------- |
| first_name | ✅        |
| last_name  | ✅        |
| username   | ✅        |
| email      | ✅        |
| role       | ✅        |
| password   | ✅        |

---

### 🔗 Backend API

```http
POST /api/v1/users/create/
```

---

## 🔐 Frontend Permission Rules (Mandatory)

* Pages must be **hidden or blocked** if the user does not have permission
* Routes must redirect unauthorized users
* UI controls (buttons, links) must be conditionally rendered

---

## ✅ Summary of API Endpoints

| Feature             | Method | Endpoint                           |
| ------------------- | ------ | ---------------------------------- |
| Get all projects    | GET    | /api/v1/projects                   |
| Get project details | GET    | /api/v1/projects/<id>              |
| Create project      | POST   | /api/v1/projects/create/           |
| Create task         | POST   | /api/v1/projects/<id>/task/create/ |
| Get users           | GET    | /api/v1/users                      |
| Create user         | POST   | /api/v1/users/create/              |

---

Backend:
https://github.com/JherbR/quiz4