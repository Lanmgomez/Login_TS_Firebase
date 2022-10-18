import './App.sass';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { onAuthStateChanged } from 'firebase/auth';
// hooks
import { useState, useEffect } from 'react';
import { useAuthentication } from './hooks/useAuthentication';
// pages
import Home from './pages/Home/Home';
import AboutUs from './pages/AboutUs/AboutUs';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Main from './pages/Main_Pub/Main';
// components
import Navbar from './components/Navbar';
// context
import { AuthProvider } from './context/AuthContext';

function App() {

  const [user, setUser] = useState <any> (undefined)
  const { auth } = useAuthentication();

  const loadingUser = user === undefined

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user)
    })
  }, [auth])

  if (loadingUser) {
    return <p>Carregando...</p>
  }

  return (
    <div className="App">
    <AuthProvider value={{user}}>  
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/register' element={!user ? <Register /> : <Navigate to="/" />} />
          <Route path='/login' element={!user ? <Login /> : <Navigate to="/register" />} />
          <Route path='/main' element={user ? <Main /> : <Navigate to="/login" />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
    </div>
  );
}

export default App;
