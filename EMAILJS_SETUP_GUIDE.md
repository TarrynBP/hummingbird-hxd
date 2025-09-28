# EmailJS Setup Guide for HummingBirdd Contact Form

## 📋 Overview

This guide will help you set up EmailJS to handle contact form submissions for your HummingBirdd website.

## 🔧 Step 1: Create EmailJS Account

1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 📧 Step 2: Set Up Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. **Save your Service ID** (you'll need this later)

## 📝 Step 3: Create Email Templates

### Template 1: Contact Form Notification (for you)

1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. **Template Name**: `contact_form_notification`
4. **Subject**: `🎨 New Contact Form Submission - {{from_name}}`
5. **Content**: Copy the HTML from `email-templates/contact-form-template.html`
6. **Save the Template ID** (you'll need this later)

### Template 2: Auto-Reply (for clients)

1. Create another template
2. **Template Name**: `auto_reply`
3. **Subject**: `Thank you for contacting HummingBirdd!`
4. **Content**: Copy the HTML from `email-templates/auto-reply-template.html`
5. **Save the Template ID** (you'll need this later)

## 🔑 Step 4: Get Your Public Key

1. Go to **Account** → **General**
2. Copy your **Public Key**

## ⚙️ Step 5: Configure Environment Variables

1. Create a `.env` file in your project root (copy from `env.example`)
2. Add your EmailJS credentials:

```env
# EmailJS Configuration
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here

# Your email address where contact form submissions will be sent
VITE_YOUR_EMAIL=your-email@example.com
```

## 🧪 Step 6: Test Your Setup

1. Start your development server: `npm run dev`
2. Go to your contact page
3. Fill out and submit the form
4. Check your email for the notification
5. Check the client's email for the auto-reply

## 📊 Template Variables

The email templates use these variables:

### Contact Form Template Variables:

- `{{from_name}}` - Client's name
- `{{from_email}}` - Client's email
- `{{company}}` - Client's company
- `{{service}}` - Service they're interested in
- `{{budget}}` - Project budget
- `{{message}}` - Their message
- `{{submission_date}}` - Date of submission
- `{{submission_time}}` - Time of submission
- `{{reply_to}}` - Email to reply to

### Auto-Reply Template Variables:

- `{{to_name}}` - Client's name
- `{{to_email}}` - Client's email
- `{{company}}` - Client's company
- `{{service}}` - Service they're interested in

## 🎨 Customizing Email Templates

### Colors and Branding:

- Primary color: `#4ade80` (mint-teal)
- Secondary color: `#ec4899` (soft-mauve)
- Update these in the CSS if needed

### Content:

- Modify the HTML templates to match your brand voice
- Update contact information
- Add your logo (as an image URL)

## 🚀 Production Deployment

1. Make sure your `.env` file is properly configured
2. Deploy your site
3. Test the contact form in production
4. Monitor email delivery

## 🔍 Troubleshooting

### Common Issues:

1. **Emails not sending:**

   - Check your environment variables
   - Verify EmailJS service is active
   - Check browser console for errors

2. **Template variables not working:**

   - Ensure variable names match exactly
   - Check for typos in template HTML

3. **Auto-reply not working:**
   - Make sure you created the auto-reply template
   - Update the template ID in the code if needed

### Debug Mode:

Add this to your `.env` file for debugging:

```env
VITE_EMAILJS_DEBUG=true
```

## 📞 Support

If you need help:

1. Check EmailJS documentation: https://www.emailjs.com/docs/
2. Review the console logs for error messages
3. Test with a simple template first

## 🎯 Next Steps

Once everything is working:

1. Set up email analytics
2. Create additional templates for different services
3. Add form validation improvements
4. Consider adding a calendar booking integration

---

**Note**: Keep your EmailJS credentials secure and never commit them to version control. Use environment variables for all sensitive information.








