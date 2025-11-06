# UrbanCraft Backend API

Backend server for handling contact form submissions with email notifications using Resend.

## Quick Start

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` with your Resend API key.

3. **Start the server**
   ```bash
   npm start
   ```

## API Endpoints

### POST /api/contact
Submit contact form data.

**Request:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Your message",
  "phone": "+1 (555) 000-0000",  // Optional
  "company": "Company Name"       // Optional
}
```

**Response:**
```json
{
  "success": true,
  "message": "Emails sent successfully"
}
```

### GET /api/health
Health check endpoint.

**Response:**
```json
{
  "status": "ok",
  "timestamp": "2024-01-01T00:00:00.000Z",
  "service": "UrbanCraft Contact API",
  "emailProvider": "Resend"
}
```

## Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `RESEND_API_KEY` | Resend API key | `re_1234567890abcdef` |
| `FROM_EMAIL` | Email address to send from | `onboarding@resend.dev` or `info@yourdomain.com` |
| `COMPANY_EMAIL` | Company notification email | `info@urbancraftglobal.com` |
| `PORT` | Server port | `3001` |
| `FRONTEND_URL` | Frontend URL for CORS | `http://localhost:5173` |

## Email Setup

This backend uses [Resend](https://resend.com) for sending emails.

**Benefits:**
- No SMTP configuration needed
- Simple API key setup
- Better deliverability
- Free tier: 3,000 emails/month

**Setup Steps:**
1. Sign up at [resend.com](https://resend.com)
2. Get your API key from the dashboard
3. Add it to your `.env` file
4. For production, verify your domain in Resend

See `SETUP_RESEND.md` for detailed instructions.

## Email Templates

The server sends two emails:

1. **User Confirmation** - Auto-reply to the user
2. **Company Notification** - Alert to the company email

## Development

Run with auto-reload:
```bash
npm run dev
```

## Production

For production deployment:
- Set `RESEND_API_KEY` in your hosting environment
- Verify your domain in Resend dashboard
- Update `FROM_EMAIL` to use your verified domain
- Ensure `FRONTEND_URL` matches your production frontend URL
