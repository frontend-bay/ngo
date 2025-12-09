import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import OrganizationIntro from './organization/OrganizationIntro'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NTIntro from "./nirmaltransport/NTIntro.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
      <BrowserRouter>
            <Routes>
                <Route path="/" element={<OrganizationIntro />} />
                <Route path="/nirmaltransport" element={<NTIntro />} />
            </Routes>
      </BrowserRouter>

  )
}

export default App
