import './cards.css'
import { MAX_CARD_ON_PAGE } from '../../const/const.js'

const CardTag = ({ tag }) => {
  return <span className="card-tag">{tag}</span>
}

const Card = ({ card }) => {
  return (
    <div className="card">
      <img className="card-image" src={card.imageUrl} alt={card.title} />
      <div className="card-content">
        <h2 className="card-title">{card.title}</h2>
        <p className="card-description">{card.description}</p>
        <p className="card-date">{card.date}</p>
        <div className="card-tags">
          {card.tags.map((tag, index) => (
            <CardTag tag={tag} key={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

export const CardContainer = ({ cards, tag }) => {
  return (
    <div className="card-container">
      {cards.map((card, index) => {
        const minNumberCard = MAX_CARD_ON_PAGE * (tag - 1) + 1
        const maxNumberCard = MAX_CARD_ON_PAGE * tag
        return index + 1 >= minNumberCard && index + 1 <= maxNumberCard ? <Card card={card} key={index} /> : null
      })}
    </div>
  )
}
