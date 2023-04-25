import React from 'react'

export default function Search(){
    let test = async () => {
        try{
            let res = await fetch(`https://pokeapi.co/api/v2/pokemon/clefairy/`)
            let results = await res.json()
            console.log(results)
            // return results
        }catch(error){
            console.log(error)
        }
      }
      test()

    return (
        <>
        <h1>Search Page</h1>
        </>
    )
}