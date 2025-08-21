import { useState } from 'react'
import './App.css'
import { Button, Footer, CardContainer } from './components'
import { MAX_CARD_ON_PAGE } from './const/const'

const cardData = [
  {
    title: 'Mocha',
    description: 'Developing a fintech product for the international market',
    date: 'April 24, 2024',
    imageUrl: '/img-1.jpeg',
    tags: ['#fintech', '#international', '#market'],
    archived: false,
  },
  {
    title: 'Money Forward',
    description: 'Frontend and backend for a salary payout service on demand',
    date: 'January 16, 2024',
    imageUrl: '/img-2.jpeg',
    tags: ['#finance', '#service', '#payouts'],
    archived: false,
  },
  {
    title: 'ActivePlatform',
    description: 'Adobe integration and platform development for comprehensive subscriptions',
    date: 'November 10, 2022',
    imageUrl: '/img-4.jpeg',
    tags: ['#integration', '#platform', '#subscription'],
    archived: false,
  },
  {
    title: 'START',
    description: 'Developed an A/B testing platform for a streaming service',
    date: 'September 22, 2022',
    imageUrl: '/img-5.jpeg',
    tags: ['#A/B testing', '#streaming', '#platform'],
    archived: false,
  },
  {
    title: 'Mindbox',
    description: 'Supporting the redesign of an automated marketing platform',
    date: 'September 21, 2022',
    imageUrl: '/img-6.jpeg',
    tags: ['#marketing', '#redesign', '#automation'],
    archived: false,
  },
]

const MAX_COUNT_TAB = cardData.length % MAX_CARD_ON_PAGE ? Math.floor(cardData.length / MAX_CARD_ON_PAGE) + 1 : cardData.length / MAX_CARD_ON_PAGE
const TABS = Array.from({ length: MAX_COUNT_TAB }, (_, i) => i + 1)

export const App = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [currentTab, setCurrentTab] = useState(1)

  const previousPage = () => {
    currentTab > 1 && setCurrentTab((prev) => prev - 1)
  }

  const nextPage = () => {
    currentTab < MAX_COUNT_TAB && setCurrentTab((prev) => prev + 1)
  }

  return (
    <div className="app">
      {!isOpen ? (
        <Button type="btn" click={() => setIsOpen(true)}>
          Start
        </Button>
      ) : (
        <>
          <span className="close" onClick={() => setIsOpen(false)}>
            &times;
          </span>
          <h1>State Tabs Card Display</h1>

          <div className="tab-buttons">
            {TABS.map((tab, index) => (
              <Button type="tab-button" click={() => setCurrentTab(tab)} key={index} active={tab === currentTab ? true : false}>
                Tab {tab}
              </Button>
            ))}
          </div>

          <CardContainer cards={cardData} tag={currentTab} />

          <div className="navigation-buttons">
            <Button type="btn" click={previousPage} disabled={currentTab === 1 ? true : false}>
              &lt; Previous
            </Button>
            <Button type="btn" click={nextPage} disabled={currentTab === MAX_COUNT_TAB ? true : false}>
              Next &gt;
            </Button>
          </div>

          <Footer />
        </>
      )}
    </div>
  )
}
