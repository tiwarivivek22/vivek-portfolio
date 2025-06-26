export const createContactEmailTemplate = (name: string, email: string, subject: string, message: string) => `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb; border-radius: 8px;">
  <div style="background-color: #1f2937; color: white; padding: 20px; border-radius: 8px 8px 0 0; text-align: center;">
    <h1 style="margin: 0; font-size: 24px;">New Contact Form Submission</h1>
  </div>
  
  <div style="background-color: white; padding: 30px; border-radius: 0 0 8px 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
    <div style="margin-bottom: 20px; padding: 15px; background-color: #dbeafe; border-left: 4px solid #3b82f6; border-radius: 4px;">
      <h2 style="margin: 0 0 10px 0; color: #1e40af; font-size: 18px;">Contact Details</h2>
      <p style="margin: 5px 0; color: #374151;"><strong>Name:</strong> ${name}</p>
      <p style="margin: 5px 0; color: #374151;"><strong>Email:</strong> ${email}</p>
      <p style="margin: 5px 0; color: #374151;"><strong>Subject:</strong> ${subject}</p>
    </div>
    
    <div style="margin-bottom: 20px;">
      <h3 style="color: #1f2937; font-size: 16px; margin-bottom: 10px;">Message:</h3>
      <div style="background-color: #f3f4f6; padding: 15px; border-radius: 6px; border: 1px solid #e5e7eb;">
        <p style="margin: 0; color: #374151; line-height: 1.6; white-space: pre-wrap;">${message}</p>
      </div>
    </div>
    
    <div style="text-align: center; padding-top: 20px; border-top: 1px solid #e5e7eb;">
      <p style="margin: 0; color: #6b7280; font-size: 14px;">
        This message was sent from your portfolio contact form on ${new Date().toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        })}
      </p>
    </div>
  </div>
</div>
`

export const createConfirmationEmailTemplate = (name: string, email: string, subject: string) => `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb; border-radius: 8px;">
  <div style="background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%); color: white; padding: 30px; border-radius: 8px 8px 0 0; text-align: center;">
    <h1 style="margin: 0; font-size: 28px; font-weight: bold;">Thank You, ${name}!</h1>
    <p style="margin: 10px 0 0 0; font-size: 16px; opacity: 0.9;">Your message has been received</p>
  </div>
  
  <div style="background-color: white; padding: 30px; border-radius: 0 0 8px 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
    <div style="text-align: center; margin-bottom: 25px;">
      <div style="width: 60px; height: 60px; background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%); border-radius: 50%; margin: 0 auto 15px; display: flex; align-items: center; justify-content: center;">
        <span style="color: white; font-size: 24px;">✓</span>
      </div>
      <h2 style="color: #1f2937; margin: 0; font-size: 20px;">Message Received Successfully!</h2>
    </div>
    
    <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; border-left: 4px solid #3b82f6; margin-bottom: 25px;">
      <p style="margin: 0; color: #1e40af; font-weight: 600; margin-bottom: 10px;">What happens next?</p>
      <ul style="margin: 0; padding-left: 20px; color: #374151;">
        <li style="margin-bottom: 5px;">I'll review your message within 24 hours</li>
        <li style="margin-bottom: 5px;">You'll receive a personal response from me</li>
        <li>I'll get back to you at: <strong>${email}</strong></li>
      </ul>
    </div>
    
    <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin-bottom: 25px;">
      <h3 style="color: #1f2937; margin: 0 0 10px 0; font-size: 16px;">Your Message Summary:</h3>
      <p style="margin: 5px 0; color: #6b7280;"><strong>Subject:</strong> ${subject}</p>
      <p style="margin: 5px 0; color: #6b7280;"><strong>Sent:</strong> ${new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      })}</p>
    </div>
    
    <div style="text-align: center;">
      <p style="color: #6b7280; margin-bottom: 20px;">In the meantime, feel free to check out:</p>
      <div style="display: flex; justify-content: center; gap: 15px; flex-wrap: wrap;">
        <a href="https://github.com/vivekprabhat" style="display: inline-block; padding: 10px 20px; background-color: #1f2937; color: white; text-decoration: none; border-radius: 6px; font-weight: 500;">My GitHub</a>
        <a href="https://linkedin.com/in/vivekprabhat" style="display: inline-block; padding: 10px 20px; background-color: #0077b5; color: white; text-decoration: none; border-radius: 6px; font-weight: 500;">LinkedIn</a>
      </div>
    </div>
    
    <div style="text-align: center; padding-top: 25px; border-top: 1px solid #e5e7eb; margin-top: 25px;">
      <p style="margin: 0; color: #6b7280; font-size: 14px;">
        Best regards,<br>
        <strong style="color: #1f2937;">Vivek Prabhat</strong><br>
        <span style="background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-weight: 600;">B.Tech (CSE) Student & Web Developer</span>
      </p>
    </div>
  </div>
</div>
`
