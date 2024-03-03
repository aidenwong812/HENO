import { createHandler, Post, Body } from "next-api-decorators"
import { ContactFormDTO } from "../../../DTO/contactform.dto"
import { HENO_EMAIL } from "../../../lib/consts"
import sendEmail from "../../../lib/sendEmail"

class SendContactRequest {
  @Post()
  async sendContactRequest(@Body() body: ContactFormDTO) {
    const { emailAddress, name, subject, message } = body

    const personalizations = [
      {
        to: [{ email: emailAddress, name }],
        subject: "Contact Us - HENO",
      },
    ]

    const data = {
      personalizations,
      content: [
        {
          type: "text/html",
          value: `<html><body>
          <p><strong>Full Name</strong><br>
          ${name} </p>
          <p><strong>Subject</strong><br>
          ${subject || "No response."} </p>
          <p><strong>Email Address</strong><br>
          <a href="mailto:${emailAddress}" target="_blank">${emailAddress}</a> </p>
          <p><strong>Message</strong><br>
          ${message} </p>
          </body></html>`,
        },
      ],
      from: {
        email: HENO_EMAIL,
        name: "HENO",
      },
      reply_to: {
        email: HENO_EMAIL,
        name: "HENO",
      },
    }

    try {
      const response = await sendEmail(data)
      return response.data
    } catch (err) {
      return err.response.data
    }
  }
}

export default createHandler(SendContactRequest)
