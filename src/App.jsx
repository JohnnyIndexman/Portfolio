import {
  createBrowserRouter,
  createRoutesFromElements,
  Route, RouterProvider
} from 'react-router-dom'
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";
import About from "./Pages/About"
import { AnimatePresence } from 'framer-motion';

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path='/' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='projects' element={<Projects />} />
    </Route>
  ))
  return (
    <div className="App main">
      <AnimatePresence mode='wait'>
        <div className='body-container' key={router.pathname}>
          <RouterProvider router={router} />
        </div>
      </AnimatePresence>
    </div>
  );
}

export default App;
