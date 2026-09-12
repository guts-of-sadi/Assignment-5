import Nav from "./components/Nav"
import Banner from "./components/Banner"
import Cards from "./components/ExploreTechcards/Cards"
import { Suspense } from "react"
import type { CardTypes } from "./components/ExploreTechcards/CardTypes"
import Footer from "./components/Footer"
import "react-toastify/dist/ReactToastify.css"



const promiseFetch = async (): Promise<CardTypes[]> => {

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

      <Suspense fallback={<h2 className="flex items-center justify-center text-6 font-bold text-gray-700">
        Loading Data..</h2>}>

        <Cards dataPromise={dataPromise} />

      </Suspense>
      <Footer />



    </>
  )
}

export default App
