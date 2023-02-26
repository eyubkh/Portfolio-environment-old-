type Type = {
  from: string, 
  subject: string, 
  text: string
}

type TypeResponse = {
  error: boolean,
  message: number
}

export async function fetchingEmail(object: Type): Promise<TypeResponse> {
  return await window.fetch('/api/email', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(object)
  })
  .then((data) => data.json())
}