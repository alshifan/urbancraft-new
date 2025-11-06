import { Resend } from 'resend';

// Helper function to escape HTML
const escapeHtml = (text) => {
  if (!text) return '';
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, m => map[m]);
};

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      message: 'Method not allowed. Use POST.'
    });
  }

  try {
    const { name, email, message, phone, company } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields: name, email, and message are required.'
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid email format.'
      });
    }

    // Validate Resend API key
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not set');
      return res.status(500).json({
        success: false,
        message: 'Email service is not configured. Please contact support.'
      });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const fromEmail = process.env.FROM_EMAIL || 'onboarding@resend.dev';
    const companyEmail = process.env.COMPANY_EMAIL || 'support@urbancraftglobal.com';

    // Escape user input for security
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeMessage = escapeHtml(message);
    const safePhone = phone ? escapeHtml(phone) : '';
    const safeCompany = company ? escapeHtml(company) : '';

    // Email 1: Confirmation auto-reply to the user
    const userConfirmationEmail = {
      from: `UrbanCraft Global <${fromEmail}>`,
      to: email,
      subject: 'Thank you for contacting UrbanCraft Global',
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; background-color: #f5f5f5; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
          <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f5f5f5;">
            <tr>
              <td align="center" style="padding: 40px 20px;">
                <table role="presentation" style="max-width: 600px; width: 100%; border-collapse: collapse; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                  
                  <!-- Header -->
                  <tr>
                    <td style="background: linear-gradient(135deg, #EAB308 0%, #F59E0B 100%); padding: 40px 40px 30px; text-align: center;">
                      <h1 style="margin: 0; color: #000000; font-size: 28px; font-weight: 700; letter-spacing: -0.5px;">
                        Urban<span style="color: #ffffff;">Craft</span> Global
                      </h1>
                      <div style="width: 60px; height: 4px; background-color: #000000; margin: 20px auto 0; border-radius: 2px;"></div>
                    </td>
                  </tr>
                  
                  <!-- Content -->
                  <tr>
                    <td style="padding: 40px 40px 30px;">
                      <h2 style="margin: 0 0 20px; color: #1f2937; font-size: 24px; font-weight: 600; line-height: 1.3;">
                        Thank You for Reaching Out!
                      </h2>
                      
                      <p style="margin: 0 0 20px; color: #4b5563; font-size: 16px; line-height: 1.6;">
                        Dear ${safeName},
                      </p>
                      
                      <p style="margin: 0 0 30px; color: #4b5563; font-size: 16px; line-height: 1.6;">
                        Thank you for contacting UrbanCraft Global. We have successfully received your message and our team will review it and get back to you within <strong style="color: #EAB308;">24 hours</strong>.
                      </p>
                      
                      <!-- Message Box -->
                      <div style="background: linear-gradient(to right, #fef3c7, #fef9e7); border-left: 4px solid #EAB308; padding: 20px; border-radius: 8px; margin: 30px 0;">
                        <p style="margin: 0 0 10px; color: #1f2937; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
                          Your Message
                        </p>
                        <p style="margin: 0; color: #374151; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${safeMessage}</p>
                      </div>
                      
                      <!-- Contact Details -->
                      ${safePhone || safeCompany ? `
                      <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
                        ${safePhone ? `
                        <p style="margin: 0 0 10px; color: #1f2937; font-size: 14px;">
                          <strong style="color: #EAB308;">📞 Phone:</strong> 
                          <span style="color: #4b5563;">${safePhone}</span>
                        </p>
                        ` : ''}
                        ${safeCompany ? `
                        <p style="margin: ${safePhone ? '10px 0 0' : '0'}; color: #1f2937; font-size: 14px;">
                          <strong style="color: #EAB308;">🏢 Company:</strong> 
                          <span style="color: #4b5563;">${safeCompany}</span>
                        </p>
                        ` : ''}
                      </div>
                      ` : ''}
                      
                      <p style="margin: 30px 0 0; color: #4b5563; font-size: 16px; line-height: 1.6;">
                        Our experienced team is committed to providing you with the best sourcing solutions and will respond to your inquiry promptly.
                      </p>
                    </td>
                  </tr>
                  
                  <!-- Footer -->
                  <tr>
                    <td style="background-color: #1f2937; padding: 30px 40px; text-align: center;">
                      <p style="margin: 0 0 15px; color: #ffffff; font-size: 16px; font-weight: 600;">
                        Best Regards,
                      </p>
                      <p style="margin: 0 0 20px; color: #EAB308; font-size: 18px; font-weight: 700;">
                        UrbanCraft Global
                      </p>
                      <p style="margin: 0 0 15px; color: #9ca3af; font-size: 14px;">
                        <a href="mailto:${companyEmail}" style="color: #EAB308; text-decoration: none; font-weight: 500;">${companyEmail}</a>
                      </p>
                      <div style="margin: 20px 0 0; padding-top: 20px; border-top: 1px solid #374151;">
                        <p style="margin: 0; color: #6b7280; font-size: 12px; line-height: 1.5;">
                          This is an automated confirmation email. Please do not reply directly to this message.
                        </p>
                      </div>
                    </td>
                  </tr>
                  
                </table>
                
                <!-- Footer Note -->
                <table role="presentation" style="max-width: 600px; width: 100%; margin-top: 20px;">
                  <tr>
                    <td style="text-align: center; padding: 20px;">
                      <p style="margin: 0; color: #9ca3af; font-size: 12px;">
                        © ${new Date().getFullYear()} UrbanCraft Global. All rights reserved.
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
      text: `
Thank you for reaching out!

Dear ${name},

We have received your message and will get back to you within 24 hours.

Your Message:
${message}

${phone ? `Phone: ${phone}` : ''}
${company ? `Company: ${company}` : ''}

Our team is reviewing your inquiry and will respond promptly.

Best regards,
UrbanCraft Global
${companyEmail}

---
This is an automated confirmation email. Please do not reply directly to this message.
© ${new Date().getFullYear()} UrbanCraft Global. All rights reserved.
      `
    };

    // Email 2: Notification to company
    const companyNotificationEmail = {
      from: `UrbanCraft Contact Form <${fromEmail}>`,
      to: companyEmail,
      subject: `New Contact Form Submission from ${safeName}`,
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; background-color: #f5f5f5; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
          <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f5f5f5;">
            <tr>
              <td align="center" style="padding: 40px 20px;">
                <table role="presentation" style="max-width: 600px; width: 100%; border-collapse: collapse; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                  
                  <!-- Header -->
                  <tr>
                    <td style="background: linear-gradient(135deg, #EAB308 0%, #F59E0B 100%); padding: 30px 40px; text-align: center;">
                      <h1 style="margin: 0; color: #000000; font-size: 24px; font-weight: 700; letter-spacing: -0.5px;">
                        Urban<span style="color: #ffffff;">Craft</span> Global
                      </h1>
                      <div style="width: 60px; height: 4px; background-color: #000000; margin: 15px auto 0; border-radius: 2px;"></div>
                      <p style="margin: 20px 0 0; color: #000000; font-size: 16px; font-weight: 600;">
                        📬 New Contact Form Submission
                      </p>
                    </td>
                  </tr>
                  
                  <!-- Alert Badge -->
                  <tr>
                    <td style="padding: 20px 40px; background-color: #fef3c7; border-bottom: 1px solid #fde68a;">
                      <div style="display: inline-block; background-color: #EAB308; color: #000000; padding: 6px 12px; border-radius: 20px; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
                        New Inquiry
                      </div>
                      <p style="margin: 10px 0 0; color: #92400e; font-size: 13px; font-weight: 500;">
                        Submitted on ${new Date().toLocaleString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </td>
                  </tr>
                  
                  <!-- Content -->
                  <tr>
                    <td style="padding: 40px 40px 30px;">
                      <!-- Contact Information Card -->
                      <div style="background: linear-gradient(to right, #f9fafb, #ffffff); border: 2px solid #e5e7eb; border-radius: 10px; padding: 25px; margin-bottom: 25px;">
                        <h3 style="margin: 0 0 20px; color: #1f2937; font-size: 16px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 2px solid #EAB308; padding-bottom: 10px;">
                          Contact Information
                        </h3>
                        
                        <table role="presentation" style="width: 100%; border-collapse: collapse;">
                          <tr>
                            <td style="padding: 8px 0; width: 120px;">
                              <strong style="color: #1f2937; font-size: 14px;">👤 Name:</strong>
                            </td>
                            <td style="padding: 8px 0;">
                              <span style="color: #374151; font-size: 15px; font-weight: 500;">${safeName}</span>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding: 8px 0;">
                              <strong style="color: #1f2937; font-size: 14px;">✉️ Email:</strong>
                            </td>
                            <td style="padding: 8px 0;">
                              <a href="mailto:${safeEmail}" style="color: #EAB308; text-decoration: none; font-size: 15px; font-weight: 500;">${safeEmail}</a>
                            </td>
                          </tr>
                          ${safePhone ? `
                          <tr>
                            <td style="padding: 8px 0;">
                              <strong style="color: #1f2937; font-size: 14px;">📞 Phone:</strong>
                            </td>
                            <td style="padding: 8px 0;">
                              <a href="tel:${safePhone}" style="color: #EAB308; text-decoration: none; font-size: 15px; font-weight: 500;">${safePhone}</a>
                            </td>
                          </tr>
                          ` : ''}
                          ${safeCompany ? `
                          <tr>
                            <td style="padding: 8px 0;">
                              <strong style="color: #1f2937; font-size: 14px;">🏢 Company:</strong>
                            </td>
                            <td style="padding: 8px 0;">
                              <span style="color: #374151; font-size: 15px; font-weight: 500;">${safeCompany}</span>
                            </td>
                          </tr>
                          ` : ''}
                        </table>
                      </div>
                      
                      <!-- Message Card -->
                      <div style="background: linear-gradient(to right, #fef3c7, #fef9e7); border-left: 4px solid #EAB308; border-radius: 8px; padding: 25px; margin-bottom: 25px;">
                        <h3 style="margin: 0 0 15px; color: #1f2937; font-size: 16px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
                          💬 Message
                        </h3>
                        <div style="background-color: #ffffff; padding: 20px; border-radius: 6px; border: 1px solid #fde68a;">
                          <p style="margin: 0; color: #374151; font-size: 15px; line-height: 1.7; white-space: pre-wrap;">${safeMessage}</p>
                        </div>
                      </div>
                      
                      <!-- Quick Action Button -->
                      <div style="text-align: center; margin: 30px 0;">
                        <a href="mailto:${safeEmail}?subject=Re: Your Inquiry to UrbanCraft Global" style="display: inline-block; background: linear-gradient(135deg, #EAB308 0%, #F59E0B 100%); color: #000000; text-decoration: none; padding: 14px 32px; border-radius: 8px; font-weight: 600; font-size: 15px; box-shadow: 0 4px 6px rgba(234, 179, 8, 0.3);">
                          Reply to ${safeName}
                        </a>
                      </div>
                    </td>
                  </tr>
                  
                  <!-- Footer -->
                  <tr>
                    <td style="background-color: #1f2937; padding: 25px 40px; text-align: center;">
                      <p style="margin: 0 0 10px; color: #9ca3af; font-size: 13px; line-height: 1.5;">
                        This notification was sent from your UrbanCraft Global contact form.
                      </p>
                      <p style="margin: 0; color: #6b7280; font-size: 12px;">
                        <a href="mailto:${safeEmail}" style="color: #EAB308; text-decoration: none;">Reply directly to ${safeEmail}</a>
                      </p>
                    </td>
                  </tr>
                  
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
      text: `
New Contact Form Submission

Contact Information:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Name: ${name}
Email: ${email}
${phone ? `Phone: ${phone}` : ''}
${company ? `Company: ${company}` : ''}

Message:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${message}

Submitted on: ${new Date().toLocaleString()}

Reply directly to: ${email}
      `
    };

    // Send both emails
    console.log('Attempting to send emails via Resend...');
    console.log('User email:', email);
    console.log('Company email:', companyEmail);

    const [userResult, companyResult] = await Promise.all([
      resend.emails.send(userConfirmationEmail),
      resend.emails.send(companyNotificationEmail)
    ]);

    // Check for errors in responses
    if (userResult.error) {
      console.error('User email error:', userResult.error);
      throw new Error(`Failed to send user confirmation email: ${userResult.error.message || JSON.stringify(userResult.error)}`);
    }

    if (companyResult.error) {
      console.error('Company email error:', companyResult.error);
      throw new Error(`Failed to send company notification email: ${companyResult.error.message || JSON.stringify(companyResult.error)}`);
    }

    console.log('✅ User confirmation email sent:', userResult.data?.id);
    console.log('✅ Company notification email sent:', companyResult.data?.id);

    return res.status(200).json({
      success: true,
      message: 'Emails sent successfully'
    });

  } catch (error) {
    console.error('❌ Error sending emails:', error);
    
    // Provide more specific error messages
    let errorMessage = 'Failed to send emails. Please try again later.';
    
    if (error.message?.includes('API key')) {
      errorMessage = 'Resend API key is missing or invalid. Please check your RESEND_API_KEY in environment variables.';
    } else if (error.message?.includes('domain')) {
      errorMessage = 'Email domain not verified in Resend. Please verify your domain in the Resend dashboard.';
    } else if (error.message) {
      errorMessage = error.message;
    }

    return res.status(500).json({
      success: false,
      message: errorMessage,
      error: error.name || 'UNKNOWN'
    });
  }
}

