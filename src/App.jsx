import './App.css'
import './index.css'
import {Footer,Herosection,Offer,Quality,Reveiws,Service,Subscribe,Product} from './Sections/Index'
import Nav from './Components/Nav'
function App() {
  return (
    <main className='relative'>
     <Nav/>
     <section className='xl:padding-l  padding-b '>
      <Herosection/> 
     </section>
     <section className='padding'>
      <Product/>
     </section>
     <section className='padding'>
      <Quality/>
    
     </section>
     <section className='padding-x py-10'>
      <Service/>
      
     </section>
     <section className='padding '>
      <Offer/>
      
     </section>
     <section className='mt-6'>
      <Reveiws/>
     </section>
     <section className='padding-x sm:py-32 py-16 w-full '>
      <Subscribe/>
     </section>
     <section className='bg-black padding-x padding-t pb-8 text-white'>
      <Footer/>
     </section>
    </main>
  )
}

export default App
