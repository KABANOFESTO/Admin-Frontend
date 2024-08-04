import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Reset from './Components/Reset';

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Signup />
          <div className="content">
            <Routes>
              <Route path='/login' element={<Login />} />
              <Route path='/reset' element={<Reset />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  )
}

export default App
