import React, { useState } from 'react'
import search from './search'
import { Container, Col } from 'react-bootstrap'

export default function PokeResults({pName}){
    console.log(pName)
    const [pokemon, setPokemon] = useState('')
     let test = async () => {
        try{
            let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pName}/`)
            let results = await res.json()
            console.log(results)
            // console.log(results.name)
            setPokemon(results.name)
        }catch(error){
            console.log(error)
        }
      }
      test()

    return(
        <>
        <Container>
        <h1>Pokemon Data</h1>
        </Container>

        <Container>
            <Col><h1>Pokemon Name: {pokemon}</h1></Col>
        </Container>
        </>
    )
}