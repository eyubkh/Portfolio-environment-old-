import parser from 'html-react-parser'

export async function fetchingMarkDown(url: any) {
  const text = await fetch(url).then((data) => data.text())

  const regex = /<div id="desc">([\s\S]*?)<\/div>/
  const result = regex.exec(text)
  if (result) {
    return parser(result[0])
  } else {
    return 'Error to find <div id="desc"> on the text'
  }

}
