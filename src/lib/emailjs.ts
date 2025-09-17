import emailjs from '@emailjs/browser';

// EmailJS configuration
export const EMAILJS_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '',
};

// Initialize EmailJS
export const initEmailJS = () => {
  if (EMAILJS_CONFIG.publicKey) {
    emailjs.init(EMAILJS_CONFIG.publicKey);
  }
};

// Contact form data interface
export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  service: string;
  budget: string;
  message: string;
}

// Send contact form email
export const sendContactEmail = async (formData: ContactFormData): Promise<boolean> => {
  try {
    if (!EMAILJS_CONFIG.serviceId || !EMAILJS_CONFIG.templateId || !EMAILJS_CONFIG.publicKey) {
      throw new Error('EmailJS configuration is missing. Please check your environment variables.');
    }

    // Prepare template parameters
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      company: formData.company || 'Not provided',
      service: formData.service || 'Not specified',
      budget: formData.budget || 'Not specified',
      message: formData.message,
      to_email: import.meta.env.VITE_YOUR_EMAIL || 'your-email@example.com',
      reply_to: formData.email,
      // Additional metadata
      submission_date: new Date().toLocaleDateString(),
      submission_time: new Date().toLocaleTimeString(),
    };

    // Send email
    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      templateParams
    );

    console.log('Email sent successfully:', response);
    return true;
  } catch (error) {
    console.error('Failed to send email:', error);
    return false;
  }
};

// Send auto-reply email to client
export const sendAutoReplyEmail = async (formData: ContactFormData): Promise<boolean> => {
  try {
    if (!EMAILJS_CONFIG.serviceId || !EMAILJS_CONFIG.publicKey) {
      throw new Error('EmailJS configuration is missing.');
    }

    // Auto-reply template parameters
    const autoReplyParams = {
      to_name: formData.name,
      to_email: formData.email,
      company: formData.company || 'your business',
      service: formData.service || 'your inquiry',
      // You can customize this message
      auto_reply_message: `Thank you for reaching out to HummingBirdd! We've received your inquiry about ${formData.service || 'our services'} and will get back to you within 24 hours.`,
    };

    // Send auto-reply (you'll need a separate template for this)
    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      'template_auto_reply', // You'll need to create this template
      autoReplyParams
    );

    console.log('Auto-reply sent successfully:', response);
    return true;
  } catch (error) {
    console.error('Failed to send auto-reply:', error);
    return false;
  }
};

