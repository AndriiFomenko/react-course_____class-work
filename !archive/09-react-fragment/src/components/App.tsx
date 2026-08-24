import { Fragment } from 'react'

const App = () => {
  return (
    <Fragment>
      <h1>Привіт! Мене звати</h1>
      <h2>Дмитро, мені 21 рік</h2>
      <p>
        Я радий вітати вас на моєму сайті! Тут ви знайдете багато цікавої інформації про мене, мої захоплення та
        досягнення.
      </p>
      {[
        { id: 1, label: 'Навичка: ', value: 'React & TypeScript' },
        { id: 2, label: 'Хобі: ', value: 'Гра на гітарі' },
        { id: 3, label: 'Спорт: ', value: 'Плавання' },
        { id: 4, label: 'Освіта: ', value: 'Компʼютерні науки' },
        { id: 5, label: 'Мета: ', value: 'Frontend Developer' }
      ].map((item) => {
        return (
          <Fragment key={item.id}>
            <span>{item.label}</span>
            <span>{item.value}</span>
          </Fragment>
        )
      })}
    </Fragment>
  )
}

export default App
