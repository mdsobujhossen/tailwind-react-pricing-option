
import { Suspense } from 'react'
import './App.css'
import DaisyNav from './components/daisy-nav/DaisyNav'
import NavBar from './components/NavBar/NavBar'
import PricingOption from './components/daisy-nav/Pricing option/PricingOption'


const PricingPromise = fetch("PricingData.json").then(res => res.json())
function App() {
  return (
    <>
      <header className='py-3'>
        <NavBar></NavBar>
        {/* <DaisyNav></DaisyNav> */}
      </header>
      <main className='container mx-auto px-5 mt-10'>
        <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
          <PricingOption PricingPromise={PricingPromise}></PricingOption>
        </Suspense>
      </main>
      <footer></footer>
    </>
  )
}

export default App
