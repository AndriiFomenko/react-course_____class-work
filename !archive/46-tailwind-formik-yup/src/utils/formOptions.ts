import type { ControlOptionInterface } from '../types'

export const selectOptions: ControlOptionInterface[] = [
  { key: 'Виберіть тему...', value: '' },
  { key: 'Консультація по проекту', value: 'consultation' },
  { key: 'Технічна підтримка', value: 'support' },
  { key: 'Комерційна пропозиція', value: 'commercial' }
]

export const radioOptions: ControlOptionInterface[] = [
  { key: 'Email-повідомлення', value: 'email' },
  { key: 'Телефонний дзвінок', value: 'phone' },
  { key: 'Telegram / Месенджер', value: 'telegram' }
]

export const checkboxOptions: ControlOptionInterface[] = [
  { key: 'Frontend розробка (React / Vite)', value: 'frontend' },
  { key: 'UI/UX дизайн та адаптивність', value: 'design' },
  { key: 'Технічний аудит і оптимізація', value: 'audit' }
]
