import React from 'react'
import search from './search'

export default function PokeResults({pName}){
    console.log(pName)
     let test = async () => {
        try{
            let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pName}/`)
            let results = await res.json()
            console.log(results)
            // console.log(results.name)
            // return results
        }catch(error){
            console.log(error)
        }
      }
      test()

    return(
        <>
        <h1>Pokemon Data</h1>
        </>
    )
}