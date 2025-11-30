import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import OrganizationIntro from './organization/OrganizationIntro'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <OrganizationIntro />
    </>
  )
}

export default App
