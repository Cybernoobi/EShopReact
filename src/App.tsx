import { BrowserRouter, Routes, Route } from "react-router"
import Header from "./components/Header/Header.tsx";
import Home from "./pages/Home/Home.tsx";
import "./assets/scss/main.scss"

const App = () => {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App