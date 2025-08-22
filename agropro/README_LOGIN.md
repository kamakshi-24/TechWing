# Login System Documentation

## Overview
This project now includes a complete login system that redirects authenticated users to the dashboard.

## Features

### 1. User Registration (Sign Up)
- Users can create accounts with personal information
- Data is stored in browser's localStorage
- Automatic redirect to login page after successful registration

### 2. User Authentication (Login)
- Username/password authentication
- Form validation for required fields
- Successful login redirects to `dashboard.html`
- Failed login shows appropriate error messages

### 3. Dashboard Access Control
- Only authenticated users can access the dashboard
- Unauthorized access redirects to login page
- Welcome message displays the logged-in username
- Logout functionality included

### 4. Security Features
- Session management using localStorage
- Automatic redirect if already logged in
- Form validation and error handling

## How to Use

### Option 1: Create Demo Account
1. Go to `login.html`
2. Click "Create Demo Account" button
3. Login with:
   - Username: `demo`
   - Password: `demo123`

### Option 2: Register New Account
1. Go to `signup.html`
2. Fill in all required fields
3. Submit the form
4. Use the created credentials to login

### Option 3: Use Existing Account
1. Go to `login.html`
2. Enter your username and password
3. Submit the form

## File Structure
- `login.html` - Login page with authentication
- `signup.html` - User registration page
- `dashboard.html` - Protected dashboard (requires authentication)
- `index.html` - Main landing page

## Technical Details
- Uses localStorage for client-side data storage
- Form validation and error handling
- Responsive design with Bootstrap
- Session management and access control

## Testing
1. Open `login.html` in a web browser
2. Create a demo account or register a new account
3. Login with valid credentials
4. You should be redirected to `dashboard.html`
5. Try accessing `dashboard.html` directly without login (should redirect to login)
6. Use the logout button to end your session

## Notes
- This is a client-side only implementation using localStorage
- For production use, consider implementing server-side authentication
- Data is stored locally in the browser and will persist until cleared
