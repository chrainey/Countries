import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Import components
import PageNavbar from './components/PageNavbar'
import Home from './components/Home'
import BreadIndex from './components/BreadIndex'
import NotFound from './components/NotFound'

const App = () => {
  return (
    <div className="site-wrapper">
      {/* When navigating around a React site (internally) we don't use the a tag */}
      {/* Instead, react-router-dom provides a Link component that renders as an a tag but allows us to navigate without reloading the page */}
      {/* Every component that needs to use a Link component, it has to be inside of the BrowserRouter */}
      <BrowserRouter>
        {/* Navbar will be a global component (that uses Link components) so it's inside the BrowserRouter but outsdide the Routes */}
        <PageNavbar />
        {/* Routes wraps all Route components, these are the components or views that will be switched out as we navigate using the Link component */}
        <Routes>
          {/* Inside the Routes component, we specify each individual Route */}
          {/* These individual routes are made up of a path and an element (component) to render when we are at that path */}
          <Route path="/" element={<Home />} />
          <Route path="/bread" element={<BreadIndex />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App