// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import sgMail from '@sendgrid/mail'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)

  const msg = {
    to: 'eyub.kh@gmail.com', // Change to your recipient
    from: 'ayub.kh@outlook.com', // Change to your verified sender
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  }

  sgMail  
    .send(msg)
    .then(() => {
      res.status(200).send('email send')
    })
    .catch((error: any) => {
      console.log(error)
      res.status(200).send('email error')
    })
}
