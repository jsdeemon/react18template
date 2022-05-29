import React, {useState, useEffect} from 'react'
import { showNotification } from '../utils/notification'

const SendNotification = () => {

    const [notification, setNotification] = useState<boolean>(false);
const [title, setTitle] = useState<string>('');
const [icon, setIcon] = useState<string>('');
const [body, setBody] = useState<string>('');
const [delay, setDelay] = useState<number>(0);


useEffect(() => {
    if (notification) {
      showNotification(title, icon, body, delay)
      setNotification(false)
      }
}, [notification])

  return (
    <form
    className="notify"
     >
    <h2>Send notification to users</h2>
   
    <div className="mb-3">
      <input
       type="text"
       className="form-control"
       name='title'
       onChange={(e: any) => setTitle(e.target.value)}
       value={title}
       placeholder='Title of notification' />
       </div>
       <div className="mb-3">
      <input
       type="text"
       className="form-control"
       name="icon"
       onChange={(e: any) => setIcon(e.target.value)}
      placeholder='Icon url' />
      </div>
      <div className="mb-3">
      <textarea 
      rows={3}
      className="form-control"
      name="body"
      onChange={(e: any) => setBody(e.target.value)}
      placeholder='Text of notificaton' />
      </div>
      <div className="mb-3">
      <input
      type="number"
      className="form-control"
      name="delay"
      onChange={(e: any) => setDelay(e.target.value)}
      placeholder='Timeout in milliseconds' />
      </div>
      <button type='submit'
      className='btn btn-primary'
      onClick={(e: any) => {
        e.preventDefault()
     setNotification(true)    
      } 
    }
      >
        Send notifications to users 
      </button>
    </form>
  )
}

export default SendNotification