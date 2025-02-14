# Toposel Assignment

## Base URL
```
http://localhost:3000/api/v1
```

## Endpoints

### 1. User Registration
**Endpoint:**
```
POST /auth/register
```
**Request Body:**
```json
{
    "username": "jane_smith",
    "email": "jane.smith@example.com",
    "password": "StrongPass456!",
    "fullName": "Jane Smith",
    "gender": "Female",
    "dateOfBirth": "2000-12-15",
    "country": "Canada"
}
```
**Response:**
```json
{
    "message": "User created successfully",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2N2FmNDczMWNhNDUyNWUwYTMwNWZkYTUiLCJpYXQiOjE3Mzk1NDAyNzMsImV4cCI6MTczOTYyNjY3M30.JiJflhqWEmcbGFLxu110eEXkMnbku_BTA3M8fLy1b5Q"
}
```

### 2. User Login
**Endpoint:**
```
POST /auth/login
```
**Request Body:**
```json
{
    "email": "jane.smith@example.com",
    "password": "StrongPass456!"
}
```
**Response:**
```json
{
    "message": "Login successful",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2N2FmNDczMWNhNDUyNWUwYTMwNWZkYTUiLCJpYXQiOjE3Mzk1NDAyOTksImV4cCI6MTczOTYyNjY5OX0.q34cs1CG1IIIDvfNWIlGt18sE11D4Pj5PwzVPKmREBI",
    "user": {
        "username": "jane_smith",
        "email": "jane.smith@example.com",
        "fullName": "Jane Smith",
        "gender": "Female",
        "dateOfBirth": "2000-12-15T00:00:00.000Z",
        "country": "Canada",
        "id": "67af4731ca4525e0a305fda5"
    }
}
```

### 3. Get User Details
**Endpoint:**
```
GET /user
```
**Headers:**
```
Authorization: Bearer <token>
```
**Request Body:**
```json
{
    "username": "jane_smith"
}
```
**Response:**
```json
{
    "user": {
        "username": "jane_smith",
        "email": "jane.smith@example.com",
        "fullName": "Jane Smith",
        "gender": "Female",
        "dateOfBirth": "2000-12-15T00:00:00.000Z",
        "country": "Canada",
        "id": "67af4731ca4525e0a305fda5"
    }
}
```