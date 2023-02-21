import { BrowserRouter, Routes, Route } from 'react-router-dom'

import PageNavbar from './components/PageNavbar'
import Home from './components/Home'
import NotFound from './components/NotFound'
import CountryIndex from './components/CountryIndex'
import CountrySingle from './components/CountrySingle'

const App = () => {
  return (
    <div className="site-wrapper">
      <BrowserRouter>
        <PageNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country" element={<CountryIndex />} />
          <Route path="/country/:countryId" element={<CountrySingle />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App