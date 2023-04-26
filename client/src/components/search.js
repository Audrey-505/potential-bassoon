import React, { useState } from 'react'
import PokeResults from './PokeResults'

export default function Search(){
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
        <h1>Search Page</h1>
        {!formSubmit ? ( 
        <form onSubmit={handleForm}>
        <input type='text' value={pName} placeholder='Pokemon Name' onChange={(event) => {
            setPName(event.target.value)
        }}/>
        <button type='submit'>Go!</button>
        </form>
        ) : (
        <PokeResults pName={pName}/>
        )}
        </>
    )
}