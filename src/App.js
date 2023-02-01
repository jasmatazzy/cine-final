import Header from "./components/Header/Header";
import Homepage from "./pages/Homepage/Homepage";
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ThemeContextProvider from "./contexts/ThemeContext";
import { Footer } from "./components/Footer/Footer";
import MovieDetails from "./pages/MovieDetails/MovieDetails";


function App() {
  // const globalStyles = {
  //   fontFamily: "Roboto, Arial, Helvetica, sans-serif"
  // }
  return (
    <div className="App">
      <BrowserRouter>
        <ThemeContextProvider>
          <Header />

          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/moviedetails/:movieID' element={<MovieDetails />} />
          </Routes>

          <Footer />
        </ThemeContextProvider>
      </BrowserRouter>
    </div>
  )
}

export default App;
