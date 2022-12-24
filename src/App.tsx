import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import History from './pages/History';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="history" element={<History />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
