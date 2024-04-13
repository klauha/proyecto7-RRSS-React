
import { useLocation } from 'react-router-dom';
import './App.css'
import { FooterBar } from './common/FooterBar/FooterBar'
import { Header } from './common/Header/Header'
import { Body } from './pages/Body/Body'

function App() {
  const location = useLocation();

  return (
    <>
      <Header />
      <Body />
      {location.pathname !== "/" && <FooterBar />}
    </>
  )
}

export default App
