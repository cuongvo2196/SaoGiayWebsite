import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DefaultLayout from './pages/layouts/DefaultLayout';
import Dashboard from './pages/Dashboard';
import Product from './pages/Product';

function App() {

  return (
      <Router>
        <Routes>
          <Route element={<DefaultLayout />} >
            <Route path="/*" element={<Dashboard />} />
            <Route path="/products" element={<Product />} />
          </Route>
        </Routes>
      </Router>
  )
}

export default App
