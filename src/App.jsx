import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Tecnologia from './components/Tecnologia'
import Applicazioni from './components/Applicazioni'
import ChiSiamo from './components/ChiSiamo'
import CTA from './components/CTA'
import ContactModal from './components/ContactModal'
import Footer from './components/Footer'

export default function App() {
  const [modalOpen, setModalOpen] = useState(false)
  const openModal = () => setModalOpen(true)
  const closeModal = () => setModalOpen(false)

  return (
    <div className="min-h-screen bg-nova-night">
      <Navbar />
      <main>
        <Hero />
        <Tecnologia />
        <Applicazioni />
        <ChiSiamo />
        <CTA onContact={openModal} />
      </main>
      <Footer />
      <ContactModal open={modalOpen} onClose={closeModal} />
    </div>
  )
}
