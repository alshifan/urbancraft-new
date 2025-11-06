# UrbanCraft Global

A modern, responsive website for UrbanCraft Global - your trusted partner in global industrial supply and sourcing solutions.

## Tech Stack

- **Frontend**: React + Vite + Tailwind CSS
- **Backend**: Node.js + Express + Nodemailer
- **Styling**: Tailwind CSS with Framer Motion animations

## Project Structure

```
urbancraft-new/
├── frontend/         # Frontend React application
│   ├── src/         # React source files
│   ├── public/      # Static assets
│   ├── package.json # Frontend dependencies
│   └── ...
├── backend/         # Node.js Express API server
│   ├── server.js    # Express server
│   ├── package.json # Backend dependencies
│   └── ...
└── README.md        # This file
```

## Getting Started

### Frontend Setup

1. **Navigate to frontend directory**
   ```bash
   cd frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   The frontend will run on `http://localhost:5173`

4. **Build for production**
   ```bash
   npm run build
   ```

### Backend Setup

1. **Navigate to backend directory**
   ```bash
   cd backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` and add your Resend API key:
   ```env
   RESEND_API_KEY=re_your_api_key_here
   FROM_EMAIL=onboarding@resend.dev
   COMPANY_EMAIL=info@urbancraftglobal.com
   PORT=3001
   FRONTEND_URL=http://localhost:5173
   ```

   **Get your Resend API key:**
   1. Sign up at [https://resend.com](https://resend.com)
   2. Go to API Keys section
   3. Create a new API key
   4. Copy and paste it into your `.env` file
   
   **For testing:** Use `onboarding@resend.dev` as `FROM_EMAIL`
   **For production:** Verify your domain in Resend and use your domain email (e.g., `info@urbancraftglobal.com`)
   
   See `backend/SETUP_RESEND.md` for detailed setup instructions.

4. **Start the backend server**
   ```bash
   npm start
   ```
   
   Or for development with auto-reload:
   ```bash
   npm run dev
   ```
   
   The backend will run on `http://localhost:3001`

## Contact Form API

### Endpoint
`POST /api/contact`

### Request Body
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Your message here",
  "phone": "+1 (555) 000-0000",  // Optional
  "company": "Company Name"        // Optional
}
```

### Response (Success)
```json
{
  "success": true,
  "message": "Emails sent successfully"
}
```

### Response (Error)
```json
{
  "success": false,
  "message": "Error message here"
}
```

## Testing the API

### Using Postman

1. **Method**: POST
2. **URL**: `http://localhost:3001/api/contact`
3. **Headers**: 
   - `Content-Type: application/json`
4. **Body** (raw JSON):
   ```json
   {
     "name": "Test User",
     "email": "test@example.com",
     "message": "This is a test message"
   }
   ```

### Using cURL

```bash
curl -X POST http://localhost:3001/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "message": "This is a test message"
  }'
```

### Using Browser Console

```javascript
fetch('http://localhost:3001/api/contact', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'Test User',
    email: 'test@example.com',
    message: 'This is a test message'
  })
})
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.error('Error:', err));
```

## Health Check

Test if the backend is running:
```
GET http://localhost:3001/api/health
```

## Email Configuration

The backend sends two emails when a contact form is submitted:

1. **Confirmation Email** (to the user)
   - Auto-reply confirming receipt of their message
   - Includes their submitted message for reference

2. **Notification Email** (to company)
   - Sent to `COMPANY_EMAIL` (default: info@urbancraftglobal.com)
   - Contains all form submission details
   - Includes user contact information

## Production Deployment

### Backend Deployment Options

1. **Vercel Serverless Functions**
   - Create `api/contact.js` in your project
   - Configure environment variables in Vercel dashboard

2. **Railway / Render / Heroku**
   - Push backend code to a separate repository
   - Set environment variables in platform dashboard
   - Update frontend API URL to production endpoint

3. **Dedicated Server**
   - Use PM2 or similar process manager
   - Set up reverse proxy (nginx) if needed
   - Configure environment variables securely

### Frontend Deployment

- **Vercel / Netlify**: Connect your repository for automatic deployments
- **Update API URL**: Change `http://localhost:3001` to your production backend URL

### Environment Variables for Production

Update the frontend API endpoint in `frontend/src/sections/Contact.jsx`:
```javascript
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';
const response = await fetch(`${API_URL}/api/contact`, { ... });
```

Then create `frontend/.env.production`:
```
VITE_API_URL=https://your-backend-api.com
```

## Troubleshooting

### Backend Issues

- **SMTP Authentication Failed**: Check your email credentials and App Password
- **Connection Timeout**: Verify SMTP host and port settings
- **CORS Errors**: Ensure `FRONTEND_URL` matches your frontend URL

### Frontend Issues

- **Cannot connect to backend**: Ensure backend is running on port 3001
- **CORS errors**: Check backend CORS configuration

## License

See LICENSE file for details.

