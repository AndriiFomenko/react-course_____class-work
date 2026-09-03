import type { Message } from '../types/message.interface'
import { v4 as uuid } from 'uuid'

export const createMessage = (message: string, isPending: boolean = false): Message => ({
  id: uuid(),
  message: message,
  pending: isPending
})
