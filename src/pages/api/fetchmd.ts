// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const url = req.body
  const baseUrl = 'https://raw.githubusercontent.com'
  const text = await fetch(baseUrl + url)
    .then(data => data.text())

  const regex = /<div id="desc">([\s\S]*?)<\/div>/
  const result = regex.exec(text)

  if (result) {
    res.status(200).send(result[0])
  }

  res.status(300).send('error to fetch')
}
