// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const baseUrl = 'https://raw.githubusercontent.com/eyubkh/Portfolio/main/README.md'
  const text = await fetch(baseUrl)
    .then(data => data.text())

  const regex = /<div id="desc">([\s\S]*?)<\/div>/
  const result = regex.exec(text)

  if (result) {
    res.status(200).send(result[0])
  }

  res.status(300).send('error to fetch')
}
