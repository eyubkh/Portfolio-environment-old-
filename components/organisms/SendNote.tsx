import { WindowProvider } from "lib/windowContext"
import { Window } from "./Window"
import data, { sendNote } from "@utils/data"
import styled from "styled-components"
import {  Black100, Grey200 } from "@utils/tokens"
import { fetchingEmail } from "@utils/fetchingEmail"
import { useState } from "react"

const SendNoteComponent = styled.form`
  height: 100%;
  overflow: hidden;
  
  #buttons {
    display: flex;
    gap: 8px;
    padding: 12px;
    background-color: ${Grey200};
    border-bottom: 1px solid ${Black100};
    border-right: 1px solid ${Black100};
  }

  #buttons button {
    border-radius: 2px;
    padding 2px 0;
    width: 100px;
    background-color: ${Grey200};
    cursor: pointer;
  }

  #buttons button:disabled {
    cursor: not-allowed;
  }

  #textarea {
    width: 100%;
    height: 100%;
    resize: none;
    border: none;
    outline: none;
    padding: 8px;
    border-right: 1px solid ${Black100};
  }

  #inputs {
    background-color: ${Grey200};
    list-style-type: none;
    padding: 18px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    border-bottom: 1px solid ${Black100};
    border-right: 1px solid ${Black100};
  }
  .form-row {
    display: flex;
    justify-content: flex-end;
    padding: 0;
  }
  .form-row > label {
    width: 70px;
  }
  .form-row > input {
    flex: 1;
    outline: none;
    padding: 1px;
  }

`
const initValue = {
  from: '',
  subject: '',
  text: ''
}

export const SendNote = () => {
  const { title, icon } = data[sendNote]
  const [value, setValue] = useState(initValue)

  const handlerFormSubmit = async (event: any) => {
    event.preventDefault()
    await fetchingEmail(value)
    setValue(initValue)
  } 

  return (
    <WindowProvider>
      <Window
        title={title}
        icon={icon}
      > 
      <SendNoteComponent
        onSubmit={handlerFormSubmit}
      >
        <div id="buttons">
          <button type="submit">Send</button>
          <button disabled>Check Names</button>
          <button disabled>Attach</button>
          <button disabled>Options</button>
          <button disabled>Address</button>
        </div>

        <ul id="inputs">
          <li className="form-row">
            <label htmlFor="my-email">To:</label>
            <input type="text" id="my-email" value='eyub.kh@gmail.com' disabled />
          </li>
          <li className="form-row">
            <label htmlFor="email">From:</label>
            <input 
              id="email" 
              type="email" 
              value={value.from} 
              onChange={({ target }) => setValue({ ...value, from: target.value})} 
            />
          </li>
          <li className="form-row">
            <label htmlFor="subject" >Subject:</label>
            <input 
              id="subject" 
              type="text" 
              value={value.subject} 
              onChange={({ target }) => setValue({ ...value, subject: target.value})} 
            />
          </li>
        </ul>
        <textarea 
          id="textarea"
          value={value.text} 
          onChange={({ target }) => setValue({ ...value, text: target.value})} 
        ></textarea>
      </SendNoteComponent>
      </Window>
    </WindowProvider>
  )
}