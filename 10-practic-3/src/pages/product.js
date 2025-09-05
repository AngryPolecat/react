import { useParams } from 'react-router-dom'

export const Product = () => {
  const { productId } = useParams()

  return <div>Страница с подробной информацией о продукте с id {productId}</div>
}
