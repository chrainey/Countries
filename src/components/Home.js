import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <main className="hero text-center">
      <div className="hero-container">
        <h1 className='display-3'>🇧🇷 API Countries 🇧🇷</h1>
        <p className='lead'>This site has information about all of the Countries of the world.</p>
        <Link className='btn dark' to='/bread'>Discover Countries</Link>
      </div>
    </main>
  )
}
export default Home