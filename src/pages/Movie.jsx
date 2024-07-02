import React from 'react'
import data from '../data.json'
import { Card, Button } from 'react-bootstrap'



const Movie = () => {
  return (
    <div>
      {
        data.movies.map(movie => (
            <Card key = {movie.id} style= {{with: '18rem'}}>
                <Card.Img variant='top' src = {movie.image} />
                <Card.Body>
                    <Card.Title>{movie.title}</Card.Title>
                    <Card.Text>{movie.year}</Card.Text>
                    <Button variant = "primary">Ver Detalles</Button>
                </Card.Body>
            </Card>
        ))
      }
    </div>
  )
}

export default Movie
