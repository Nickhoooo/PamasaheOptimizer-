import './App.css'
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Landing from './pages/Landing';
import Home from './pages/Home';
import Feature from './pages/Feature';
import About from './pages/About';
import Footer from './components/common/Footer/Footer';
import Header from './components/common/Header/Header';
import ProtectedRoutes from './components/ProtectedRoute';
import { AuthProvider } from "./context/AuthContext"
import PageTransition from './components/PageTransition/PageTransition';

function AnimatedRoutes() {
    const location = useLocation()

    return (
        <Routes location={location} key={location.pathname}>
            <Route path='/' element={
                <PageTransition>
                    <Landing/>
                </PageTransition>
            }/>
            <Route path='/home' element={
                <ProtectedRoutes>
                    <PageTransition>
                        <Home/>
                    </PageTransition>
                </ProtectedRoutes>
            }/>
            <Route path='/about' element={
                <PageTransition>
                    <About/>
                </PageTransition>
            }/>
            <Route path='/feature' element={
                <PageTransition>
                    <Feature/>
                </PageTransition>
            }/>
        </Routes>
    )
}

function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Header />
                <AnimatedRoutes />
                <Footer/>
            </BrowserRouter>
        </AuthProvider>
    )
}

export default App;