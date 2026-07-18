import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Approccio from './components/Approccio'
import Piattaforma from './components/Piattaforma'
import Partner from './components/Partner'
import CTA from './components/CTA'
import ContactModal from './components/ContactModal'
import Footer from './components/Footer'

export default function App() {
  const [modalOpen, setModalOpen] = useState(false)
  const openModal = () => setModalOpen(true)
  const closeModal = () => setModalOpen(false)

  return (
    <div className="min-h-screen bg-nova-night">
      <Navbar onContact={openModal} />
      <main>
        <Hero onContact={openModal} />
        <Approccio />
        <Piattaforma />
        <Partner />
        <CTA onContact={openModal} />
      </main>
      <Footer />
      <ContactModal open={modalOpen} onClose={closeModal} />
    </div>
  )
}
