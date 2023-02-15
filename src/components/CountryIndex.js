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
        const { data } = await axios.get('https://restcountries.com/v3.1/all')
        setCountries(data)
        console.log(data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  })
  return (
    <Container as="main">
      <Row>
        <Col md="6" lg="4">
          <Link to="#">
            <Card>
              <Card.Img variant='top' src='https://flagcdn.com/w320/my.png'></Card.Img>
              <Card.Body className='bg-light'>
                <Card.Title className='text-center'>Malaysia - Asia</Card.Title>
              </Card.Body>
            </Card>
          </Link>
        </Col>
      </Row>
    </Container>
  )
}

export default CountryIndex