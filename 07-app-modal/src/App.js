import { useState } from 'react'
import './App.css'
import { Button, Modal, Main } from './components'

export const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const alertWithClose = () => {
    alert('OK')
    setIsModalOpen(false)
  }

  return (
    <div className="app">
      <Main>
        <Button type="button" handlerClick={() => setIsModalOpen(true)}>
          Open Modal
        </Button>
        {isModalOpen && (
          <Modal header="Confirm Your Action" content="Are you sure you want to proceed? This action cannot be undone." handlerClick={() => setIsModalOpen(false)}>
            <Button type="closeButton" handlerClick={() => setIsModalOpen(false)}>
              &times;
            </Button>
            <Button type="secondaryButton" handlerClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>
            <Button type="primaryButton" handlerClick={alertWithClose}>
              Yes, Continue
            </Button>
          </Modal>
        )}
      </Main>
    </div>
  )
}
