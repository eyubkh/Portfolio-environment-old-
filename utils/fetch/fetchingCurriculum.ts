import parse from 'html-react-parser'

export async function fetchCurriculum() {
  const response = await fetch('https://docs.google.com/document/export?format=html&id=11Qi-i4_nDdEo7gN1O3mEG3sx7O6AqX_2hjceeCuE9Vg')
      .then(data => data.text())
    const regex = /(<body>?).*(<\/body>)/i
    const bodyHtml = regex.exec(response)!![0]
    return parse(bodyHtml.replace('body', 'div'))
}