import { useSearchParams } from 'react-router-dom'

export const Search = () => {
  const [stringSearch, setStringSearch] = useSearchParams()
  const name = stringSearch.get('name')

  const handlerChangeName = ({ target }) => {
    setStringSearch({ name: target.value })
  }

  return (
    <div>
      <p>Страница поиска с использованием query string {name ? `Ищем товар с характеристикой name = ${name}` : ''}</p>
      <input type="text" value={name || ''} onChange={handlerChangeName} />
    </div>
  )
}
