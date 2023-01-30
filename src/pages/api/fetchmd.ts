// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
var showdow = require('showdown')

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const baseUrl = 'https://raw.githubusercontent.com/eyubkh/Englicus/main/README.md'
  const text = await fetch(baseUrl)
    .then(data => data.text())

  const convert = new showdow.Converter()
  const html = convert.makeHtml(text)

  res.status(200).send('hello')
}
