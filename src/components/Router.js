import Header from './Header'
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

export default function Router(){
    const Layout = () => {
        return(
            <>
                <Header></Header>
                <Outlet></Outlet>
            </>
        )
    }

    const BrowserRouters = () => {
        return (
            <div>
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Layout />}>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="contact-us" element={<Contact />}></Route>
                  </Route>
                </Routes>
              </BrowserRouter>
            </div>    
          );
    }

    return(
        <BrowserRouters></BrowserRouters>
    )
}