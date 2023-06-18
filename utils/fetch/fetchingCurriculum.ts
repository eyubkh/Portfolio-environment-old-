import parse from 'html-react-parser'

export async function fetchCurriculum() {
  const urlDoc =
    'https://docs.google.com/document/export?format=html&id=11Qi-i4_nDdEo7gN1O3mEG3sx7O6AqX_2hjceeCuE9Vg'
  const response = await fetch(urlDoc).then((data) => data.text())
  const regex = /(<body>?).*(<\/body>)/i
  const bodyText = regex.exec(response)!![0]
  return parse(bodyText.replace('body', 'div'))
}
