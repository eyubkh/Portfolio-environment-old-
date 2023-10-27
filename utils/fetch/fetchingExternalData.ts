import parser from 'html-react-parser'

export async function fetchExternalData(url: any, google = false) {
  const text = await fetch(url).then((data) => data.text())
  let regex
  if (google) {
    regex = /(<body>?).*(<\/body>)/i
  } else {
    regex = /<div id="desc">([\s\S]*?)<\/div>/
  }
  const result = regex.exec(text)
  if (result) {
    return parser(result[0].replace('body', 'div'))
  } else {
    return 'Error to find <div id="desc"> on the text'
  }

}
