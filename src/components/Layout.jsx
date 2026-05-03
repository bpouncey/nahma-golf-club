import Nav from './Nav'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-cream">
      <Nav />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  )
}
