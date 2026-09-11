import Nav from "./components/Nav"
import Banner from "./components/Banner"
import Cards from "./components/ExploreTechcards/Cards"
import { Suspense } from "react"
import type { CardTypes } from "./components/ExploreTechcards/CardTypes"



const promiseFetch = async ():Promise<CardTypes[]> => {

  const res = await fetch('/data.json')
  const data = await res.json()
  return data;
}
function App() {

 const dataPromise = promiseFetch();
 console.log(dataPromise);


  return (
    <>
      <Nav />
      <Banner />

      <Suspense fallback={<h2>Loading...</h2>}>
           
            <Cards dataPromise={dataPromise} />

      </Suspense>
     
    </>
  )
}

export default App
