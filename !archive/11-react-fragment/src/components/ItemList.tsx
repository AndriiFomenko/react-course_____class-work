import { Fragment } from 'react'

interface Item {
  id: number
  name: string
  description: string
}

const ItemList = () => {
  const items: Item[] = [
    { id: 1, name: 'Item 1', description: 'Description for item 1' },
    { id: 2, name: 'Item 2', description: 'Description for item 2' },
    { id: 3, name: 'Item 3', description: 'Description for item 3' }
  ]

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc' }}>
      <h2>Список товарів з фрагментами в map</h2>
      <ul>
        {items.map((item) => (
          // Фрагмент дозволяє повернути кілька елементів без додаткового wrapper div
          <Fragment key={item.id}>
            <li>
              <strong>{item.name}</strong>
            </li>
            <li style={{ marginLeft: '20px', fontStyle: 'italic' }}>{item.description}</li>
          </Fragment>
        ))}
      </ul>
    </div>
  )
}

export { ItemList }
