import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Clientes from './pages/Client/Clientes'
import Proveedor from './pages/Product/Proveedor'
import Usuarios from './pages/User/Usuarios'
import Logout from './pages/Logout/Logout'

function App() {
  return (
    <div>

    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Puede usar la barra para navegar</h2>
      <h2>por las diferentes opciones</h2>
    </div><br />

    <Navbar />
    <main>
    <div className="container mt-4">
      <Routes>
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/proveedor" element={<Proveedor />} />
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </div>
    </main>
    </div>
  )
}

export default App