import parser from 'html-react-parser'

export async function fetchingMarkDown(url: any) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/text'
    },
    body: url
  }
  const text = await window.fetch('/api/fetchmd', options)
    .then(data => data.text())
  return parser(text)
}