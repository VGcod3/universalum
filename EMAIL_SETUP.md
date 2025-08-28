# Email Setup for Contact Form

## Environment Variables

Add the following environment variables to your `.env.local` file:

```env
# SMTP Configuration for Email
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password_here
CONTACT_EMAIL=contact@yourdomain.com
```

## Gmail Setup

If using Gmail, you'll need to:

1. Enable 2-Factor Authentication on your Google account
2. Generate an App Password:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a new app password for "Mail"
   - Use this password as `SMTP_PASS`

## Other Email Providers

For other providers, update the SMTP settings accordingly:

- **Outlook/Hotmail**: `smtp-mail.outlook.com:587`
- **Yahoo**: `smtp.mail.yahoo.com:587`
- **Custom SMTP**: Use your provider's SMTP settings

## Testing

The contact form will now:

1. Validate input using Zod schema
2. Send emails via nodemailer
3. Show success/error messages to users
4. Reset form on successful submission

## Features

- ✅ React Hook Form integration
- ✅ Zod validation with translated error messages
- ✅ Real-time form validation
- ✅ Email sending via nodemailer
- ✅ Success/error status messages
- ✅ Form reset on successful submission
- ✅ Loading states during submission
- ✅ Responsive design
- ✅ Multi-language support
