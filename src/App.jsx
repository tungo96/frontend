import './App.css'
import DashboardPage from './pages/Admin/DashboardPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
          <Routes>
            <Route path="/admin/dashboard" element={<DashboardPage />} />
          </Routes>
    </BrowserRouter>  
  );
}

export default App
