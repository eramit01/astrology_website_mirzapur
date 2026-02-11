import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Suspense, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import TopHeader from './components/TopHeader'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import FloatingCTAs from './components/FloatingCTAs'
import ScrollToTop from './components/ScrollToTop'
import AstrologyPopup from './components/AstrologyPopup'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import Media from './pages/Media'
import Articles from './pages/Articles'
import ArticleDetail from './pages/ArticleDetail'
import Book from './pages/Book'

function AppContent() {
  const { i18n } = useTranslation()

  useEffect(() => {
    document.documentElement.lang = i18n.language
  }, [i18n.language])

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <TopHeader />
        <NavBar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/media" element={<Media />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/articles/:slug" element={<ArticleDetail />} />
            <Route path="/book" element={<Book />} />
          </Routes>
        </main>
        <Footer />
        <FloatingCTAs />
        <AstrologyPopup />
      </div>
    </Router>
  )
}

function App() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="text-lg">Loading...</div></div>}>
      <AppContent />
    </Suspense>
  )
}

// Note: Loading text in Suspense fallback cannot use translations as i18n may not be initialized yet

export default App


