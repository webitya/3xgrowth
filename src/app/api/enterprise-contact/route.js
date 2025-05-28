import nodemailer from "nodemailer"

export async function POST(request) {
  try {
    const { email, company, message } = await request.json()

    // Create transporter with enterprise email configuration
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: process.env.SMTP_PORT || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // Simplified internal email for quick lead processing
    const internalEmailOptions = {
      from: process.env.SMTP_USER,
      to: "hello@3xgrowth.in",
      subject: `🚀 New Lead: ${company}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 500px; margin: 0 auto; background: #f8fafc; padding: 20px;">
          <div style="background: linear-gradient(135deg, #3b82f6, #8b5cf6); padding: 15px; border-radius: 8px; margin-bottom: 15px;">
            <h1 style="color: white; margin: 0; font-size: 20px;">🎯 New Website Lead</h1>
            <p style="color: #e2e8f0; margin: 5px 0 0 0; font-size: 14px;">Quick action required</p>
          </div>
          
          <div style="background: white; padding: 15px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <table style="width: 100%; margin-bottom: 15px;">
              <tr><td style="padding: 5px 0; font-weight: bold; color: #475569; width: 80px;">Company:</td><td style="padding: 5px 0; color: #1e293b;">${company}</td></tr>
              <tr><td style="padding: 5px 0; font-weight: bold; color: #475569;">Email:</td><td style="padding: 5px 0; color: #1e293b;"><a href="mailto:${email}" style="color: #3b82f6;">${email}</a></td></tr>
            </table>

            ${
              message
                ? `
              <div style="background: #f0fdf4; padding: 10px; border-radius: 6px; border-left: 3px solid #10b981; margin-bottom: 15px;">
                <p style="margin: 0; color: #1e293b; font-size: 14px; line-height: 1.5;"><strong>Challenge:</strong> ${message}</p>
              </div>
            `
                : ""
            }

            <div style="background: #eff6ff; padding: 10px; border-radius: 6px; border-left: 3px solid #3b82f6;">
              <p style="margin: 0; color: #1e40af; font-size: 14px; font-weight: bold;">⚡ Action: Call within 24 hours</p>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 15px; color: #64748b; font-size: 12px;">
            <p>Lead from 3xGrowth website • ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `,
    }

    // Simplified auto-response
    const autoResponseOptions = {
      from: process.env.SMTP_USER,
      to: email,
      subject: "Thanks for reaching out to 3xGrowth! 🚀",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 500px; margin: 0 auto; background: #f8fafc; padding: 20px;">
          <div style="background: linear-gradient(135deg, #3b82f6, #8b5cf6); padding: 15px; border-radius: 8px; margin-bottom: 15px;">
            <h1 style="color: white; margin: 0; font-size: 20px;">Welcome to 3xGrowth! 🎯</h1>
            <p style="color: #e2e8f0; margin: 5px 0 0 0; font-size: 14px;">Your growth journey starts here</p>
          </div>
          
          <div style="background: white; padding: 15px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <p style="color: #1e293b; font-size: 15px; line-height: 1.6; margin-bottom: 15px;">Hello,</p>
            
            <p style="color: #1e293b; line-height: 1.6; margin-bottom: 15px;">Thanks for your interest in helping ${company} grow! We're excited to show you how we can 3x your B2B marketing results.</p>
            
            <div style="background: #eff6ff; padding: 12px; border-radius: 6px; border-left: 3px solid #3b82f6; margin: 15px 0;">
              <p style="margin: 0; color: #1e40af; font-size: 14px; font-weight: bold;">📞 What's Next?</p>
              <p style="margin: 5px 0 0 0; color: #1e293b; font-size: 14px;">Our team will call you within 24 hours to schedule your free 30-minute strategy session.</p>
            </div>

            <div style="background: #f0fdf4; padding: 12px; border-radius: 6px; border-left: 3px solid #10b981; margin: 15px 0;">
              <div style="text-align: center;">
                <div style="font-size: 18px; font-weight: bold; color: #10b981; margin-bottom: 5px;">300% Average ROI</div>
                <div style="font-size: 12px; color: #166534;">That's what our clients typically see</div>
              </div>
            </div>
            
            <p style="color: #1e293b; line-height: 1.6; margin-bottom: 0;">Best regards,<br>
            <strong>The 3xGrowth Team</strong><br>
            <a href="mailto:hello@3xgrowth.in" style="color: #3b82f6; font-size: 14px;">hello@3xgrowth.in</a></p>
          </div>
          
          <div style="text-align: center; margin-top: 15px; color: #64748b; font-size: 12px;">
            <p>3xGrowth • B2B Marketing That Actually Works</p>
          </div>
        </div>
      `,
    }

    // Send both emails
    await Promise.all([transporter.sendMail(internalEmailOptions), transporter.sendMail(autoResponseOptions)])

    return Response.json(
      {
        message: "Contact request submitted successfully",
        status: "success",
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Error processing contact form:", error)
    return Response.json(
      {
        error: "Failed to process request",
        status: "error",
      },
      { status: 500 },
    )
  }
}
