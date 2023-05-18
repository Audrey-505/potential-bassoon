import React, { useEffect, useState } from 'react'
import { Container, Col, Row } from 'react-bootstrap'

export default function PokeResults({pName}){
    console.log(pName)
    const loadingStyle = {position: 'absolute'}
    const fieldStyle = {backgroundColor: '#ffcb05', marginBottom: '0px'}
    const picBckStyle = {backgroundColor: '#ffcb05', position: 'relative', height: '45px', marginTop: '0px'}
    const picBack = {backgroundColor: '#3c5aa6', width: '325px', height: '325px', padding: '10px', margin: '10px' }
    const picStyle = {width: '300px', height: '300px'}
    const title = {justifyContent: 'center', display: 'flex'}
    const [pokemon, setPokemon] = useState('')
    const [pokemonId, setPokemonId] = useState('')
    const [pokemonPic, setPokemonPic] = useState('')
    const [xp, setXp] = useState('')
    const [abilities, setAbilities] = useState([])
    useEffect(() => {
        const getAbilities = async () => {
            try{
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pName}/`)
                const data = await res.json()
                let arrayAb = data.abilities
                let eachAb = arrayAb.map(a => a.ability.name).join(', ')
                // console.log(eachAb)
                setAbilities(eachAb)
            }catch(err){
                console.log(err)
            }
        }
        getAbilities()
    },[])

     let test = async () => {
        try{
            let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pName}/`)
            let results = await res.json()
            console.log(results)
            // console.log(results.name)
            setPokemon(results.name)
            setPokemonId(results.id)
            setPokemonPic(results.sprites.other.home.front_default)
            setXp(results.base_experience)
        }catch(error){
            console.log(error)
        }
      }
      test()

      if (!pokemonPic) {
        return <div style={loadingStyle}><h2>LOADING...</h2></div>;
      }

    return(
        <>
        <Container>
        <h1 style={title}>Pokemon Data</h1>
        </Container>

        <Container>
            <Container style={fieldStyle}>
            <Col><h1>Name: {pokemon}</h1></Col>
            <Col><h1>ID: {pokemonId}</h1></Col>
            <Col><h1>XP: {xp}</h1></Col>
            {/* {abilities.map((a) => {
                 <Col><h1>Abilities: {a}</h1></Col>
            })} */}
            <Col><h1>Abilities: {abilities}</h1></Col>
            </Container>
            <Container>
            <Row>
                <Col style={picBckStyle}><h1>Picture:</h1></Col>
                <Container style={picBack}>
                <Col><img src={pokemonPic} style={picStyle} alt='pokemon'/></Col>
                </Container>
            </Row>
            </Container>
        </Container>
        </>
    )
}