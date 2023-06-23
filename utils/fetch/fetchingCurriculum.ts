import parse from 'html-react-parser'

export async function fetchCurriculum() {
  // const urlDoc =
  //   'https://docs.google.com/document/export?format=html&id=11Qi-i4_nDdEo7gN1O3mEG3sx7O6AqX_2hjceeCuE9Vg'
  const urlDoc =
    'https://docs.google.com/document/export?format=html&id=1KO8NvYvFAEpxQ_4v23xsVdcv3B1bfly-67-O0opw_VI'
  const response = await fetch(urlDoc).then((data) => data.text())
  const regex = /(<body>?).*(<\/body>)/i
  const bodyText = regex.exec(response)!![0]
  return parse(bodyText.replace('body', 'div'))
}
