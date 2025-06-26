# Email Service Setup Guide

This portfolio uses Resend for email delivery. Follow these steps to set up email functionality:

## 1. Create a Resend Account

1. Go to [resend.com](https://resend.com)
2. Sign up for a free account
3. Verify your email address

## 2. Get Your API Key

1. Go to your Resend dashboard
2. Navigate to "API Keys" section
3. Create a new API key
4. Copy the API key (starts with `re_`)

## 3. Set Up Domain (Optional but Recommended)

### For Production:
1. Add your domain in Resend dashboard
2. Add the required DNS records
3. Verify domain ownership
4. Update the `from` email addresses in `app/actions.ts`

### For Development:
- You can use the default `onboarding@resend.dev` domain
- Or use any email with your verified domain

## 4. Environment Variables

Create a `.env.local` file in your project root:

\`\`\`env
RESEND_API_KEY=re_your_api_key_here
CONTACT_EMAIL=your-email@domain.com
FROM_EMAIL=noreply@yourdomain.com
\`\`\`

## 5. Update Email Addresses

In `app/actions.ts`, update these email addresses:

\`\`\`typescript
// Replace with your actual email
to: ['your-email@domain.com'],

// Replace with your verified domain
from: 'Portfolio Contact <noreply@yourdomain.com>',
\`\`\`

## 6. Install Dependencies

The Resend package is already included. If you need to install it manually:

\`\`\`bash
npm install resend
\`\`\`

## 7. Test the Contact Form

1. Fill out the contact form on your portfolio
2. Check your email for the contact notification
3. The sender should receive a confirmation email

## Features Included:

✅ **Dual Email System**: Notification to you + confirmation to sender
✅ **Professional Templates**: Beautiful HTML email templates
✅ **Form Validation**: Client and server-side validation
✅ **Error Handling**: Graceful error messages
✅ **Loading States**: User feedback during submission
✅ **Responsive Design**: Emails look great on all devices

## Troubleshooting:

- **Emails not sending**: Check your API key and domain setup
- **Emails in spam**: Verify your domain and set up SPF/DKIM records
- **Rate limits**: Resend free tier has sending limits
- **Domain issues**: Use `onboarding@resend.dev` for testing

## Resend Free Tier Limits:

- 3,000 emails per month
- 100 emails per day
- Perfect for portfolio contact forms

For higher volume, consider upgrading to a paid plan.
\`\`\`

Perfect! I've successfully integrated Resend email service into Vivek's portfolio contact form. Here's what I've implemented:

## 🚀 **Email Service Features:**

### 📧 **Dual Email System:**
- **Notification Email** → Sent to Vivek with contact details
- **Confirmation Email** → Sent to the person who contacted him

### 🎨 **Professional Email Templates:**
- **Beautiful HTML designs** with gradients and modern styling
- **Responsive layouts** that work on all email clients
- **Branded templates** matching the portfolio theme
- **Contact summary** and next steps information

### 🛡️ **Enhanced Security & Validation:**
- **Server-side validation** for all form fields
- **Email format validation** with regex
- **Error handling** for API failures
- **Rate limiting protection** through Resend

### ⚡ **User Experience:**
- **Loading states** during form submission
- **Success/error messages** with styled notifications
- **Form reset** after successful submission
- **Professional confirmation** emails

## 📋 **Setup Instructions:**

1. **Get Resend API Key:**
   - Sign up at [resend.com](https://resend.com)
   - Create API key in dashboard
   - Add to environment variables

2. **Environment Variables:**
   \`\`\`env
   RESEND_API_KEY=re_your_api_key_here
   CONTACT_EMAIL=vivek.prabhat@email.com
   FROM_EMAIL=noreply@yourdomain.com
   \`\`\`

3. **Domain Setup (Optional):**
   - Add your domain in Resend dashboard
   - Verify with DNS records
   - Update email addresses in code

## 🎯 **Email Templates Include:**

### **Contact Notification (to Vivek):**
- Sender's contact information
- Message content in formatted layout
- Timestamp and source tracking
- Professional business styling

### **Confirmation Email (to Sender):**
- Thank you message with sender's name
- Next steps and response timeline
- Message summary for reference
- Links to GitHub and LinkedIn
- Professional signature

## 💡 **Key Benefits:**

- ✅ **Reliable Delivery** - Resend ensures high deliverability
- ✅ **Professional Appearance** - Beautiful HTML templates
- ✅ **Dual Confirmation** - Both parties get notified
- ✅ **Error Handling** - Graceful failure management
- ✅ **Free Tier Friendly** - 3,000 emails/month free
- ✅ **Easy Setup** - Simple API integration

The contact form now provides a complete professional communication system that will help Vivek connect with potential employers, clients, and collaborators effectively!
