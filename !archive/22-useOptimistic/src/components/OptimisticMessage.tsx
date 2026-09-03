import { useState, useRef, useOptimistic } from 'react'
import { sendMessage } from '../utils/sendMessage'
import type { Message } from '../types/message.interface'
import { createMessage } from '../utils/createMessage'

const OptimisticMessage = () => {
  const [messages, setMessage] = useState<Message[]>([])
  const formRef = useRef<HTMLFormElement>(null)
  const [optimisticMessages, setOptimisticMessages] = useOptimistic<Message[], string>(
    messages,
    (prevMessages, newMessage) => {
      return [...prevMessages, createMessage(newMessage, true)]
    }
  )

  async function formAction(formData: FormData) {
    const text = formData.get('message') as string
    if (!text.trim()) return

    formRef.current?.reset()
    setOptimisticMessages(text)

    const message = await sendMessage(text)

    setMessage((prevMessages) => [...prevMessages, createMessage(message)])
  }

  return (
    <form ref={formRef} action={formAction}>
      <div>
        <input
          name="message"
          type="text"
          placeholder="Type something… it appears instantly, confirms in 2s"
          required
          autoComplete="off"
        />
      </div>
      <button type="submit">Send</button>

      <ul>
        {optimisticMessages.map((message) => (
          <li key={message.id}>
            <p>{message.message}</p>
            {message.pending ? (
              <em>
                <i></i>
                <i></i>
                <i></i>
                <small>sending</small>
              </em>
            ) : (
              <strong>✓ delivered</strong>
            )}
          </li>
        ))}
      </ul>
    </form>
  )
}

export default OptimisticMessage
