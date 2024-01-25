import Header from './Header'
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import Projects from '../pages/Projects';
import ProjectDetails from '../pages/ProjectDetails';
import ChatUI from './ChatUI';
import { BrowserRouter, Routes, Route, Outlet, Navigate } from 'react-router-dom';
import Login from '../pages/Login';

export default function Router(){
    const Layout = () => (
      <>
        <Header></Header>
        {/* <Login /> */}
        <Outlet></Outlet>
        <ChatUI></ChatUI>
      </>
    )

    const BrowserRouters = () => {
      const user = false;
        return (
            <div>
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Layout />}>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="contact-us" element={<Contact />}></Route>
                    <Route path="/login" element={user ? <Navigate to="/"/> : <Login />}></Route>
                    <Route path="projects" element={<Projects />}></Route>
                    <Route path="projects/:id" element={<ProjectDetails />} />
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