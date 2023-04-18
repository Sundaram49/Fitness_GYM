import React from 'react';
import './App.css';
import Hero from './component/Hero';
import Programs from './Programs/Programs';
import Reason from './Reason/Reason';
import Prise from './Prise/Prise';
import Testimonials from './Testimonials/Testimonials';
import Footer from './Footer/Footer';
import Join from './Join/Join';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (

<BrowserRouter>
<Routes>
{/* <Route path='/' element={<Hero/>}></Route>
<Route path='/ /program' element={<Programs/>}></Route>
<Route path='/reason' element={<Reason/>}></Route>
<Route path='/prise' element={<Prise/>}></Route>
<Route path='/testimonials' element={<Testimonials/>}></Route>
<Route path='/join' element={<Join/>}></Route>
<Route path='/footer' element={<Footer/>}></Route> */}

</Routes>
<Hero/>
<Programs/>
<Reason/>
<Prise/>
<Testimonials/>
<Join/>
<Footer/>
</BrowserRouter>
  );
}

export default App;
