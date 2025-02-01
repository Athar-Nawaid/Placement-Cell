
# Placement Cell Website - README

## Overview

This is a **Placement Cell Management System** designed for administrators to manage student data, schedule interviews, and monitor interview progress. The platform leverages **Node.js** for backend development, **MongoDB Atlas** for database storage, and includes features like:

- **Admin Authentication**: Secure sign-up and sign-in.
- **Student Management**: Create and store student data.
- **Interview Scheduling**: Schedule interviews for students and view the list of scheduled interviews.
- **Status Updates**: Update interview status, results, and dates.
- **Reports**: Generate and download reports containing interviews and student data in CSV format.

---

## Features

1. **Admin Authentication**:
   - Secure sign-up and sign-in for administrators.

2. **Student Management**:
   - Add new student data.
   - Store and manage student data in **MongoDB Atlas**.

3. **Interview Scheduling**:
   - Schedule interviews for students.
   - View the list of scheduled interviews.

4. **Interview Updates**:
   - Update interview status, result, and date.

5. **Reports**:
   - Download interview and student data in CSV format for record-keeping.

---

## Technology Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB Atlas
- **Dependencies**: 
  - mongoose (for database interaction)
  - json2csv (for CSV generation)
  - bcrypt (for password hashing)
  - dotenv (for environment variables)
 

---

## Setup Instructions

Follow these steps to set up the project on your local machine:

### 1. Prerequisites
Ensure you have the following installed:
- Node.js (v16 or above)
- Git
- A MongoDB Atlas account (or local MongoDB setup)

### 2. Clone the Repository
Run the following command to clone the project repository:
```bash
git clone https://github.com/Athar-Nawaid/Placement-Cell.git
```

Navigate to the project directory:
```bash
cd placement-cell
```

### 3. Install Dependencies
Install the required dependencies using npm:
```bash
npm install
```

### 4. Configure Environment Variables
Create a `.env` file in the root directory and add the following:
```
MONGO_URI=your_mongodb_atlas_connection_string
SECRET=your_secret_key
PORT=3000
```

Replace `your_mongodb_atlas_connection_string` and `your_jwt_secret_key` with your credentials.

### 5. Start the Application
Run the following command to start the server:
```bash
node index.js
```

The server will run at `http://localhost:3000` by default (or the port specified in your `.env` file).

---

## Usage Instructions

1. **Admin Sign-Up/Sign-In**:
   - Access the authentication endpoints to create an account and log in.

2. **Add Student Data**:
   - Use the dashboard to input and save student details.

3. **Schedule Interviews**:
   - Schedule interviews via the dashboard and view the list of scheduled interviews.

4. **Update Interview Details**:
   - Modify the interview status, result, or date.

5. **Download Reports**:
   - Navigate to the dashboard and click "Download Report" to get a CSV file of student and interview data.


---

## Dependencies

Below is a list of major dependencies used:
- **Express**: Web framework for Node.js
- **Mongoose**: Object Data Modeling (ODM) library for MongoDB
- **Json2Csv**: Generate CSV reports
- **Bcrypt**: Hash passwords for secure storage
- **Dotenv**: Manage environment variables

Install all dependencies using `npm install`.

---

## Contributing

Feel free to fork the repository, submit pull requests, or open issues for any bugs or feature requests.

---

## License

This project is personal development for educational purpose

---


