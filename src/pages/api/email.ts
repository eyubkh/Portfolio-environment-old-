// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import sgMail from '@sendgrid/mail'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { from, subject, text } = req.body

  const message = {
    to: 'eyub.kh@gmail.com', // Change to your recipient
    from: 'ayub.kh@outlook.com', // Change to your verified sender
    subject: 'Email sended from my portfolio',
    text,
    html: `
    <p>From: ${from}</p>
    <p>Subject: ${subject} </p>
    <p>${text}</p>
    `
  }
  
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    sgMail  
    .send(message)
    .then(() => {
      res.status(200).json({
        error: false,
        message: 'Email send'
      })
    })
  .catch(error => {
    console.log(error )
      res.status(404).json({
        error: true,
        message: 'Error on send email'
      })
    })


}
