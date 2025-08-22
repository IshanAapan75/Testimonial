import { BrowserRouter, Routes, Route } from "react-router";
import TestimonialsPage from "./pages/TestimonialsPage";
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TestimonialsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
