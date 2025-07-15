// import Home from "./Home"
// import Child  from "./Child"
// import Counter from "./Counter"
// import Controlled from "./cONTROLLED.JSX"
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import About from "./About"
import Services from './Services'
import Contacts from './Contacts'
import Nav from './Nav'
// import Toast from './Toast'
// // import Spinner from './Spinner'
// import Home from'./Home'
import Getdata from'./Getdata'
function App() {
//  const name={
//   name:"ram",
//   age:20,
//   gender:"female"
//  }

  return (
   <>
   {/* <Toast/> */}
   {/* <Spinner/> */}
  {/* <Home/> */}
  <Getdata/>
   </>
      
// {/* <BrowserRouter>
// <Nav/>
// <Routes>
//   <Route path="/" element={<About/>}/>
//     <Route path="/services" element={<Services/>}/>
//       <Route path="/contacts" element={<Contacts/>}/>
// </Routes>
// </BrowserRouter>
//     */}
  )
}

export default App