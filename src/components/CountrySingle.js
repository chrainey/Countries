import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import { Container, Row, Col } from 'react-bootstrap'

const CountrySingle = () => {
  // Params
  const { countryId } = useParams()
  // State
  const [ country, setCountry ] = useState(null)
  const [ errors, setErrors ] = useState(false)
  //Execution
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`https://restcountries.com/v2/alpha/${countryId}`)
        setCountry(data)
        console.log(data)
      } catch (error) {
        setErrors(true)
      }
    }
    getData()
  }, [countryId])

  //JSX
  return (
    <Container as="main">
      <Row>
        { country ?
          <>
            <h1>{country.name}</h1>
            <Col md="6">
              <img className="w-100" src={country.flag} alt={country.name} />
            </Col>
            <Col md="6">
              <h2>Capital</h2>
              <p>{country.capital}</p>
              <hr />
              <h2>Currency</h2>
              <p>{country.currencies[0].name}</p>
              <hr />
              <h2>Time Zone</h2>
              <p>{country.timezones}</p>
              <hr />
              <h2>Language</h2>
              <p>{country.languages[0].name}</p>
              <hr />
              <Link to="/country" className="btn dark">Back to all countries</Link>
            </Col>
          </>
          :
          <h2 className="text-center">
            { errors ? 'Something went wrong' : 'Loading...'}
          </h2>
        }
      </Row>
    </Container>
    
  )
}

export default CountrySingle