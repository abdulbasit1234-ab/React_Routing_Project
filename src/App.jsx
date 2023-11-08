import './App.css'
import { Page1 } from './Pages/Page1'
import { Page2 } from './Pages/Page2'
import { Page3 } from './Pages/Page3'
import { Header } from './Pages/HomePage'
import { MyProfile } from './Pages/MyProfile'


import { BrowserRouter , Routes , Route } from 'react-router-dom'

function App()
{
  return(
    <>
      <Header />
      
      <Routes>
        <Route path='/' element={<MyProfile />} />

        <Route path='page1' element={<Page1 />} />

        <Route path='page2' element={<Page2 />} />

        <Route path='page3' element={<Page3 />} />
      </Routes>
    </>
  )
}

export default App
