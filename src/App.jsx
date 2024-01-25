import { useState } from 'react'
import './App.css'
import { Modal } from './components/Modal';
import { Toggle } from './components/Toggle'
import { AnimatePresence } from 'framer-motion'

function App() {

  const [open, setOpen] = useState(false);

  const toggleOpen = (newValue) => {
    setOpen(newValue)
  }

  return (
    <>
      <Toggle propOnClick={toggleOpen} />
      <AnimatePresence>
        {open &&
          <Modal propOnClick={toggleOpen} />
        }
      </AnimatePresence>
    </>
  )
}

export default App
