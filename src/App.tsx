import { Routes, Route } from "react-router-dom"
import { Home } from "./views/home/Home"
import { Landing } from "./views/landing/Landing"
import { Form } from "./views/form/Form"
import { Detail } from "./views/detail/Detail"
import { Error } from "./views/error/Error"
function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/home" element={<Home />} />
      <Route path="/create" element={<Form />} />
      <Route path="/countrie/:id" element={<Detail />} />
      <Route path="*" element={<Error />} />
    </Routes>
  )
}

export default App
