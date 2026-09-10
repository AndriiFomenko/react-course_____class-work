import { useContext, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { AppContext } from '../context/AppContext'
import Form from './Form'
import { RiCloseLine } from 'react-icons/ri'

const Modal = () => {
  const { isModalOpen, closeModal, editingTodo } = useContext(AppContext)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal()
      }
    }

    if (isModalOpen) {
      document.addEventListener('keydown', handleKeyDown)
      // Prevent background scrolling while modal is open
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [isModalOpen, closeModal])

  if (!isModalOpen) return null

  return createPortal(
    <div className="modal-backdrop" onClick={closeModal}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <header className="modal-header">
          <h3>{editingTodo ? 'Edit Task' : 'Add New Task'}</h3>
          <button type="button" className="modal-close-btn" onClick={closeModal} title="Close modal">
            <RiCloseLine />
          </button>
        </header>
        <div className="modal-body">
          <Form key={editingTodo ? editingTodo.id : 'new'} />
        </div>
      </div>
    </div>,
    document.body
  )
}

export default Modal
