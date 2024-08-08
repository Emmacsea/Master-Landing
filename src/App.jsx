import { useState } from 'react'
import { Page1 } from './Components/Homepage';
import { Page2 } from './Components/Homepage2';
import { Page3 } from './Components/Homepage3';


function App() {
  const [page, setPage] = useState(1);

  const handleNextPage1 = () => setPage(1)
  const handleNextPage2 = () => setPage(2)
  const handleNextPage3 = () => setPage(3)

  return (
    <>
      {page === 1 && (
        <Page1
        pag2={handleNextPage2}
        pag3={handleNextPage3}
        />
      ) }

      {page === 2 && (
        <Page2
        pag3={handleNextPage3}
        pag1={handleNextPage1}
        />
      ) }
    
      {page === 3 && (
        <Page3
        pag2={handleNextPage2}
        pag1={handleNextPage1}
        />
      ) }
    </>
  )
}

export default App
