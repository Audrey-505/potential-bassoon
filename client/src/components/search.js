import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import PokeResults from './PokeResults'

export default function Search(){
    const pageStyle = {backgroundColor: '#539165'}
    const [pName, setPName] = useState('')
    console.log(pName)
    const [formSubmit, setFormSubmit] = useState(false)
    const handleForm = async (event) => {
        event.preventDefault()
        setFormSubmit(true)
    }
    // let test = async () => {
    //     try{
    //         let res = await fetch(`https://pokeapi.co/api/v2/pokemon/clefairy/`)
    //         let results = await res.json()
    //         console.log(results)
    //         // console.log(results.name)
    //         // return results
    //     }catch(error){
    //         console.log(error)
    //     }
    //   }
    //   test()
    return (
        <>
        <div style={pageStyle}>
        {!formSubmit ? (
        <Container className='d-flex flex-column min-vh-100 justify-content-center align-items-center'>
        {/* <div className='d-flex align-items-center justify-content-center flex-column'>  */}
        <h1 className='d-flex justify-content-center align-items-center'><img src={require('../images/pokemon-logo-transparent.png')} width='45%' alt='pokemon logo'/>Search</h1>
        <form onSubmit={handleForm}>
        <input type='text' value={pName} placeholder='Pokemon Name' onChange={(event) => {
            setPName(event.target.value)
        }}/>
        <button type='submit'>Go!</button>
        </form>
         {/* </div> */}
        </Container>
        ) : (
        <PokeResults pName={pName}/>
        )}
        </div>
        </>
    )
}