import { useOptimistic, useRef, useState } from 'react'
import { sendMessage } from '../utils/api'

interface Message {
  id: number
  text: string
  pending: boolean
}

const OptimisticMessages = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const [messages, setMessages] = useState<Message[]>([])
  const [optimisticMessages, setOptimisticMessages] = useOptimistic<Message[], string>(
    messages,
    (prevMessages, newMessage) => {
      return [...prevMessages, { id: Date.now(), text: newMessage, pending: true }]
    }
  )

  async function formAction(formData: FormData) {
    const text = formData.get('message') as string
    setOptimisticMessages(text)
    if (!text.trim()) return

    formRef.current?.reset()
    const message = await sendMessage(text)
    setMessages((prevMessages) => [
      ...prevMessages,
      {
        id: Date.now(),
        text: message,
        pending: false
      }
    ])
  }

  return (
    <form ref={formRef} action={formAction}>
      <div className="form-group">
        <input name="message" placeholder="Message" required />
      </div>
      <button type="submit" className="btn">
        Send
      </button>
      <ul className="collection">
        {optimisticMessages.map((message) => (
          <li className="collection-item" key={message.id}>
            {message.text} {message.pending && <small>(Adding)</small>}
          </li>
        ))}
      </ul>
    </form>
  )
}

export default OptimisticMessages
