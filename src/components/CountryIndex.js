import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

const CountryIndex = () => {
  //! State
  const [ countries, setCountries] = useState([])
  //! Execution
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('https://restcountries.com/v2/all')
        setCountries(data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  })
  return (
    <Container as="main">
      <h1 className='text-center mt-4 mb-4'>Countries</h1>
      <Row>
        { countries.map(country => {
          const { alpha2Code, name, region, flag } = country
          
          return (
            <Col key={alpha2Code} md="6" lg="4" className='mb-4'>
              <Link to={`/country/${alpha2Code}`}>
                <Card>
                  <Card.Img variant='top' src={flag}></Card.Img>
                  <Card.Body className='bg-light'>
                    <Card.Title className='text-center'>{name} - {region}</Card.Title>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          )
        })}
      </Row>
    </Container>
  )
}

export default CountryIndex