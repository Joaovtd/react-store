import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Produtos from './Produtos/Produtos';
import Produto from './Produtos/Produto';
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <nav className="navbar">
          <ul className="nav-list">
            <li><Link to="/" className="nav-link">Home</Link></li>
            <li><Link to="/" className="nav-link">Produtos</Link></li>
            <li><Link to="/" className="nav-link">Sobre</Link></li>
          </ul>
        </nav>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Produtos />} />
            <Route path="/:id" element={<Produto />} />
            <Route path="/" element={<Produtos />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  )
}

export default App