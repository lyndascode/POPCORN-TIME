import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import MovieList from './components/MovieList'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Welcome to Popcorn Time </h1>
      <Header />
      <MovieList />
      <Footer />
    </>
  )
}

export default App
